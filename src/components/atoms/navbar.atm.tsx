import { Link } from "@tanstack/react-router";
import type { TNavLinkProps } from "../../settings/types.settings";

export function NavLink({ to, label }: TNavLinkProps) {
  return <Link to={to}>{label}</Link>;
}
