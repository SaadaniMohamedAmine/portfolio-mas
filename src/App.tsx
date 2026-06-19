import { Routes, Route } from 'react-router-dom'
import HomePage            from './pages/HomePage'
import ProjectCategoryPage from './pages/ProjectCategoryPage'
import ProjectDetailPage   from './pages/ProjectDetailPage'

export default function App() {
  return (
    <Routes>
      <Route path="/"                                      element={<HomePage />} />
      <Route path="/projects/:categorySlug"               element={<ProjectCategoryPage />} />
      <Route path="/projects/:categorySlug/:projectSlug"  element={<ProjectDetailPage />} />
    </Routes>
  )
}
