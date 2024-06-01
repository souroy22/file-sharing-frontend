import { Outlet } from "react-router-dom";
import "../../style/downloadStyle.css";
const Download = () => {
  return (
    <div className="download_container">
      <Outlet />
    </div>
  );
};

export default Download;
