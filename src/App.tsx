import { Routes, Route } from 'react-router-dom'
import HomePage              from './pages/HomePage'
import ProjectCategoryPage   from './pages/ProjectCategoryPage'
import ProjectDetailPage     from './pages/ProjectDetailPage'
import RouteTransitionLoader from './components/RouteTransitionLoader'

export default function App() {
  return (
    <>
      <RouteTransitionLoader />
      <Routes>
        <Route path="/"                                      element={<HomePage />} />
        <Route path="/projects/:categorySlug"               element={<ProjectCategoryPage />} />
        <Route path="/projects/:categorySlug/:projectSlug"  element={<ProjectDetailPage />} />
      </Routes>
    </>
  )
}
