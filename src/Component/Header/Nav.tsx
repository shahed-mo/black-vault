
import { NavLink } from "react-router-dom";

type NavProps={
    mobile?:boolean
}

function Nav({mobile = false}:NavProps) {
  return (
    <nav className={`font-label-caps text-label-caps uppercase ${
        mobile?"flex flex-col gap-5":"hidden md:flex items-center gap-8"
        }`}>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `transition-all duration-300 ease-in-out ${
            isActive
              ? "text-primary border-b-2 border-primary pb-1 font-bold"
              : "text-on-surface-variant font-medium hover:text-primary border-b-2 border-transparent pb-1"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/active-cases"
        className={({ isActive }) =>
          `transition-all duration-300 ease-in-out ${
            isActive
              ? "text-primary border-b-2 border-primary pb-1 font-bold"
              : "text-on-surface-variant font-medium hover:text-primary border-b-2 border-transparent pb-1"
          }`
        }
      >
        Active Cases
      </NavLink>

      <NavLink
        to="/cases"
        className={({ isActive }) =>
          `transition-all duration-300 ease-in-out ${
            isActive
              ? "text-primary border-b-2 border-primary pb-1 font-bold"
              : "text-on-surface-variant font-medium hover:text-primary border-b-2 border-transparent pb-1"
          }`
        }
      >
        Case Files
      </NavLink>

      <NavLink
        to="/mysteries"
        className={({ isActive }) =>
          `transition-all duration-300 ease-in-out ${
            isActive
              ? "text-primary border-b-2 border-primary pb-1 font-bold"
              : "text-on-surface-variant font-medium hover:text-primary border-b-2 border-transparent pb-1"
          }`
        }
      >
        Solved Mysteries
      </NavLink>
    </nav>
  );
}

export default Nav;

