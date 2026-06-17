import { NavLink } from "../atoms/navbar.atm";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/react";

export function Navbar() {
  return (
    <>
      <ul></ul>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <NavLink to="/" label="Josephine Mundt" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li></li>
            <SignedOut>
              {/* ↑ wird nur gerendert wenn NICHT eingeloggt */}
              <SignInButton />
            </SignedOut>

            <SignedIn>
              {/* ↑ wird nur gerendert wenn eingeloggt */}
              <UserButton />
            </SignedIn>
            <li>
              <a href="https://github.com/josephinemundt1297">Mein GitHub</a>
            </li>
            <li>
              <details>
                <summary>Informationen</summary>
                <ul className="bg-base-100 rounded-t-none p-2 z-1">
                  <li>
                    <NavLink to="/projects" label="Projekte" />
                  </li>
                  <li>
                    <NavLink to="/about" label="Über mich" />
                  </li>
                  <li>
                    <NavLink to="/impressum" label="Impressum" />
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
