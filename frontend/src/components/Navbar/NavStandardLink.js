export function NavStandardLink(section) {
  console.log(`NavListButton : ${section.id}`)
  return (
    <li className="ml-2 md:ml-4 px-2 text-center hover:font-bold hover:text-kyellow hover:drop-shadow-kmag1"
      key={section.id}> {section.sectionTitle}</li>
  )
}
