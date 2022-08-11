import { Link } from "react-router-dom";

export function NavCartButton(section) {

  return <li className="hidden ml-2 text-center md:ml-4  hover:text-kyellow group lg:w-fit sm:flex sm:items-center sm:content-center lg:inline" key={section.id}>
    <Link
      to={section.linkLocation}
      className="flex items-center justify-center w-full p-2 text-center rounded-full bg-kmag group-hover:bg-kyellow group-hover:text-kmag group-hover:shadow-kmag2">
      <i className="mx-2 fas fa-shopping-cart" />
      <span className="flex items-center justify-center px-1">
        {section.sectionTitle}
        <span className="mx-2.5 h-8 w-8 text-kmag bg-slate-200 group-hover:text-kyellow group-hover:bg-kmag group-hover:transition-all  group-hover:duration-300 py-1.5 px-2.5 text-sm font-bold rounded-full">
          {section.quantity}</span>
      </span>
    </Link>
  </li>;
}
