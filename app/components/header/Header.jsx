import { NavLink } from "@remix-run/react";

export const Header = () => {
  return (
    <nav className="bg-neutral-900 border-white-500 px-4 py-2.5">
      <ul className="flex justify-start max-w-screen-xl p-5 ml-5 text-white font-comic">
        <li className="ml-2">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="ml-8">
          <NavLink to="/popular-movie/1">Popular Movies</NavLink>
        </li>
        <li className="ml-8">
          <NavLink to="/">My Notes</NavLink>
        </li>
        <li className="ml-8">
          <NavLink to="/">My Notes</NavLink>
        </li>
        <li className="ml-8">
          <NavLink to="/">My Notes</NavLink>
        </li>
        <li className="ml-8">
          <NavLink to="/">My Notes</NavLink>
        </li>
        <li className="absolute right-0 mr-10">
          <NavLink to="/">Log out</NavLink>
        </li>
      </ul>
    </nav>
  );
};
