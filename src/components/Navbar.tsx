import type { FC } from "react";
import { navLinks } from "../constants";

export const Navbar: FC = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple Logo" />

        <ul>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">

          <button type="button">
            <img src="/search.svg" alt="Search" />
          </button>

          <button type="button">
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};
