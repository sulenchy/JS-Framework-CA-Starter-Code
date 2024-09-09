import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

export default function MainLayout() {
  return (<div className="container mx-auto my-5 h-lvh">
    <Header />
      <Outlet />

    <Footer />
  </div>)
}