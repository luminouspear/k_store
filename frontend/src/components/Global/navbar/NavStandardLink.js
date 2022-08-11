import { Link } from 'react-router-dom'

export function NavStandardLink(section) {



  return (
    <li className="px-2 ml-2 text-center md:ml-4 hover:font-bold hover:text-kyellow hover:drop-shadow-kmag1 whitespace-nowrap"
      key={section.id}>
      <Link to={section.linkLocation}>
        {section.sectionTitle}
      </Link>
    </li>
  )
}
