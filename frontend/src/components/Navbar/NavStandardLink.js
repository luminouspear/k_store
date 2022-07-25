import { Link } from 'react-router-dom'

export function NavStandardLink(section) {



  return (
    <li className="ml-2 md:ml-4 px-2 text-center hover:font-bold hover:text-kyellow hover:drop-shadow-kmag1 whitespace-nowrap"
      key={section.id}>
      <Link to={section.linkLocation}>
        {section.sectionTitle}
      </Link>
    </li>
  )
}
