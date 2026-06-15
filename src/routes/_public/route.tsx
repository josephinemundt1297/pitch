import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "../../components/organism/nav.org";
import { Footer } from "../../components/organism/footer.org";

export const Route = createFileRoute("/_public")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
