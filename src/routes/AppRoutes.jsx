import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Explore } from "../pages/Explore/Explore";
import { Upload } from "../pages/Upload/Upload";
import Auth from "../pages/Auth/Auth";
import { AudioPlayer } from "../pages/Home/components/AudioPlayer/AudioPlayer";
import { Creators } from "../pages/Creators/Creators";

export const AppRoutes = () => {
  const location = useLocation();

  // hide player on these pages
  const hidePlayerRoutes = ["/auth", "/upload"];
  const hidePlayer = hidePlayerRoutes.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/creators" element={<Creators />} />
      </Routes>

      {!hidePlayer && <AudioPlayer />}
    </>
  );
};