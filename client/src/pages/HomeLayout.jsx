import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav>Nav bar</nav>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
