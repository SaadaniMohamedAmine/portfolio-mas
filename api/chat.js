import https from 'https';

const SYSTEM_PROMPT = `You are an AI assistant embedded in Mohamed Amine Saadani's personal portfolio website.
Answer questions about Amine concisely, warmly, and professionally. Keep replies under 120 words.
Never make up information — only use facts below. If unsure, invite the visitor to email Amine directly.

## Who is Amine?
Mohamed Amine Saadani is a Senior Front-End Developer and Product Tech Manager based in Monastir, Tunisia.
He has 4+ years of experience building high-performance web applications and leading cross-functional Agile teams.

## Contact
- Email: mohamedaminesaadani79@gmail.com
- LinkedIn: https://www.linkedin.com/in/mohamed-amine-saadani/
- Location: Beni Hassen, Monastir, Tunisia

## Key Achievements
- Improved Core Web Vitals by 40%
- Delivered MVPs 30% faster through Agile leadership
- Built platform serving 5,000+ daily users
- Reduced average hiring time by 65%
- Cut server response time by 50%
- 95% uptime on e-learning platform for 3,000+ students

## Work Experience
1. Product Tech Manager @ WayConnect (Oct 2023 - Dec 2025, Sousse)
2. Senior Front-End Developer @ WayConnect (Mar 2022 - Sep 2023, Sousse)
3. Full Stack JS Developer @ Pixelium (Aug-Dec 2021, Tunis) - 5,000+ daily users
4. Full Stack JS Developer @ GoMyCode (Aug-Dec 2020, Tunis) - 3,000+ students

## Skills
Front-End: React.js, Next.js, TypeScript, JavaScript ES6+, HTML5, CSS3, Tailwind CSS, Redux Toolkit, Vite
Backend: Node.js, Express.js, MongoDB, Firebase
Product & Agile: Scrum, Kanban, Roadmapping, MVP Development, Figma

## Languages
Arabic (Native), French (Fluent), English (Fluent), German (Basic)

## Availability
Amine is open to new opportunities.`;

function sendJSON(res, statusCode, data) {
  const body = JSON.stringify(data);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(body);
}

function httpsPost(url, data) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(data);
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
    };
    const request = https.request(options, (response) => {
      let raw = '';
      response.on('data', (chunk) => { raw += chunk; });
      response.on('end', () => resolve({ status: response.statusCode, body: raw }));
    });
    request.on('error', reject);
    request.write(payload);
    request.end();
  });
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    return res.end();
  }

  if (req.method !== 'POST') {
    return sendJSON(res, 405, { error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return sendJSON(res, 200, {
      reply: "The AI assistant isn't configured yet. Reach out to Amine at mohamedaminesaadani79@gmail.com!"
    });
  }

  let message;
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    message = body && body.message;
    if (!message || typeof message !== 'string') throw new Error('invalid');
  } catch (e) {
    return sendJSON(res, 400, { error: 'Bad request' });
  }

  try {
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey;
    const result = await httpsPost(url, {
      contents: [{
        role: 'user',
        parts: [{ text: SYSTEM_PROMPT + '\n\n---\nVisitor question: ' + message.slice(0, 500) }]
      }],
      generationConfig: { maxOutputTokens: 800, temperature: 0.7 }
    });

    const data = JSON.parse(result.body);
    console.log('Gemini status:', result.status, 'body:', result.body.slice(0, 300));

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I couldn't generate a response. Please try again!";

    return sendJSON(res, 200, { reply });
  } catch (err) {
    console.error('Chat error:', err.message);
    return sendJSON(res, 200, {
      reply: "Something went wrong. Contact Amine at mohamedaminesaadani79@gmail.com or via LinkedIn!"
    });
  }
}
