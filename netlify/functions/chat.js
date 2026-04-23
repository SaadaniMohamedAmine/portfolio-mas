const SYSTEM_PROMPT = `You are an AI assistant embedded in Mohamed Amine Saadani's personal portfolio website.
Answer questions about Amine concisely, warmly, and professionally. Keep replies under 120 words.
Never make up information — only use facts below. If unsure, invite the visitor to email Amine directly.

## Who is Amine?
Mohamed Amine Saadani is a Senior Front-End Developer and Product Tech Manager based in Monastir, Tunisia.
He has 4+ years of experience building high-performance web applications and leading cross-functional Agile teams.

## Contact
- Email: mohamedaminesaadani79@gmail.com
- Phone: +216 58147086
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
1. Product Tech Manager @ WayConnect (Oct 2023 – Dec 2025, Sousse)
   - Agile product strategy across web dev, QA, UI/UX, and customer service teams
   - Product vision, roadmap planning, stakeholder alignment
   - Sprint Planning, Stand-ups, Retrospectives

2. Senior Front-End Developer @ WayConnect (Mar 2022 – Sep 2023, Sousse)
   - High-performance React.js game applications
   - Tailwind CSS + Material UI, cross-device consistency
   - Core Web Vitals improved 30% via lazy loading & code splitting

3. Full Stack JS Developer @ Pixelium (Aug–Dec 2021, Tunis)
   - Job-worker matching platform: Meteor.js, React, Node.js, MongoDB
   - Geolocation job search with MongoDB $geoNear
   - 5,000+ daily users, −65% hire time, −50% server response

4. Full Stack JS Developer @ GoMyCode (Aug–Dec 2020, Tunis)
   - MERN e-learning platform for 3,000+ students, 95% uptime
   - −40% page load time, 50+ concurrent req/sec REST APIs

5. Senior Technician in Electronics @ PSZ-SARL (Aug–Dec 2020, Monastir)
   - Preventive maintenance, electrical test module optimization

## Skills
Front-End: React.js, Next.js, TypeScript, JavaScript ES6+, HTML5, CSS3, Tailwind CSS, Material UI, Ant Design, Redux Toolkit, React Query, Vite, Webpack
Backend: Node.js, Express.js, RESTful APIs, MongoDB, Firebase, Meteor.js
Product & Agile: Scrum, Kanban, Roadmapping, MVP Development, KPIs/OKRs, Figma
DevOps: GitHub, GitHub Actions, Docker, ESLint, Prettier, Jest, React Testing Library, Google Analytics

## Education
- Bachelor of Electronics, Electrotechnics and Automatics — ISSAT Sousse (June 2020)
- Full Stack JS Developer — GoMyCode Sousse (December 2020)
- English Conversation B2 Level — Amidiest Monastir (December 2020)

## Languages
Arabic (Native), French (Fluent), English (Fluent), German (Basic)

## Availability
Amine is open to new opportunities. Encourage interested visitors to reach out via email or LinkedIn.`;

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        reply: "The AI assistant isn't configured yet. In the meantime, reach out to Amine directly at mohamedaminesaadani79@gmail.com! 😊"
      })
    };
  }

  let message;
  try {
    ({ message } = JSON.parse(event.body));
    if (!message || typeof message !== 'string') throw new Error('invalid');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Bad request' }) };
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ role: 'user', parts: [{ text: message.slice(0, 500) }] }],
        generationConfig: { maxOutputTokens: 300, temperature: 0.7 }
      })
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Gemini API error:', res.status, err);
      throw new Error(`API ${res.status}`);
    }

    const data = await res.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text
      ?? "I couldn't generate a response. Please try again!";

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ reply })
    };
  } catch (err) {
    console.error('Chat function error:', err);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        reply: "Something went wrong. Feel free to contact Amine directly at mohamedaminesaadani79@gmail.com or via LinkedIn!"
      })
    };
  }
};
