import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="font-['Nunito'] text-[var(--color-grey-700)]">
      <Navbar />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
