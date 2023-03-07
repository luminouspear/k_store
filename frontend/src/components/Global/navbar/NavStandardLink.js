import { Link } from 'react-router-dom'

export function NavStandardLink(section) {



  return (
    <li className={`px-2 ml-2 ${section.sectionTitle === 'Shop' ? 'w-8' : 'w-24 mr-2'} md:ml-4 hover:font-semibold origin-top transition duration-75 transform hover:scale-105  hover:text-kyellow hover:drop-shadow-kmag1 whitespace-nowrap drop-shadow-kclear1  flex items-center justify-center`}
      key={section.id}>
      <Link to={section.linkLocation}
      className="text-right">
        {section.sectionTitle}

      </Link>
    </li>
  )
}
