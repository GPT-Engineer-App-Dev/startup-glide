import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-8 overflow-auto items-center justify-center bg-gray-50">
      <Outlet />
    </main>
  );
};

export default Layout;