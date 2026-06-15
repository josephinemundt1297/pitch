import { createFileRoute } from "@tanstack/react-router";
import { Impressum } from "../../pages/impressum.page";

export const Route = createFileRoute("/_public/impressum")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Impressum />;
}
