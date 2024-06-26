import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"
import { CreateMovie } from "../pages/CreateMovie"
import { MoviePreview } from "../pages/MoviePreview"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<CreateMovie />} />
      <Route path="/details/:id" element={<MoviePreview />} />
    </Routes>
  )
}