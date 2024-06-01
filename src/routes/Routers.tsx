import { Routes, Route } from "react-router-dom";
import Home from "../layout/Home/Home";
import Download from "../layout/Home/Download";
import DownloadPage from "../pages/DownloadPage";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/download" element={<Download />}>
        <Route index element={<DownloadPage />} />
      </Route>
    </Routes>
  );
};

export default Routers;
