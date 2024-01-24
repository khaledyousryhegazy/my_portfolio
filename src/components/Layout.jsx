import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>

      <main className="lg:ml-[249.141px] min-[1300px]:ml-[384px] md:px-6 min-h-screen  max-[1024px]:container m-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
