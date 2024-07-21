import { Route, Routes } from "react-router-dom"

import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import FilmPage from "./pages/FilmPage/FilmPage"
import GenrePage from "./pages/GenrePage/GenrePage"

import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path={`/:id`} element={<FilmPage />}/>
          <Route path={`/genre/:genreId`} element={<GenrePage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App