import { Link } from "react-router-dom";

export function NavCartButton(section) {
  console.log(`NavCartButton : ${section.id}`)

  return <li className="ml-2 md:ml-4 text-center hover:Font-bold hover:text-kyellow  group lg:w-fit sm:flex sm:items-center sm:content-center hidden hover:drop-shadow-kmag2  lg:inline" key={section.id}>
    <Link
      to={section.linkLocation}
      className="bg-kmag group-hover:bg-kyellow group-hover:text-kmag p-2 flex justify-center items-center text-center w-full rounded-full">
      <i className="fas fa-shopping-cart mx-2"  />
      <span className="px-1 flex justify-center items-center">
        {section.sectionTitle}
        <span className="mx-2.5 h-8 w-8 text-kmag bg-slate-200 group-hover:text-kyellow group-hover:bg-kmag group-hover:transition-all group-hover:duration-300 py-1.5 px-2.5 text-sm font-bold rounded-full">
          {section.quantity}</span>
      </span>
    </Link>
  </li>;
}
