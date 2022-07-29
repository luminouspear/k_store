import { React } from 'react';

export function KStoreTitle({ title, textType, allowLineBreak = false }) {
  const wordInTitle = title.toString().split(' ')
  let output = []
  const titleStyle = {
    logo: 'first-letter:text-5xl first-letter:lg:text-6xl first-letter:xl:text-7xl first-letter:2xl:text-8xl first-letter:py-0 pr-2 lg:pr-3 text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl inline-block cursor-pointer',
    subheader: 'text-4xl xl:text-5xl first-letter:text-5xl first-letter:xl:text-6xl inline-block -mx-0 ',
    nocaps: 'text-4xl  2xl:text-5xl ',
    sectionheader: 'first-letter:text-4xl first-letter:lg:text-5xl first-letter:xl:text-6xl first-letter:2xl:text-7xl first-letter:py-0 pr-2 lg:pr-3 text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl inline-block',
    productTitle: 'first-letter:text-8xl  first-letter:py-0 pr-2 lg:pr-3 text-6xl inline-block'
  }

  const staticStyles = ['sectionheader', 'productTitle']
  const glowOnHover = ['productTitle']
  const allowsLineBreak = allowLineBreak ? "whitespace-normal" : "whitespace-nowrap"

  for (let i = 0; i < wordInTitle.length; i++) {
    output.push(
      <span className={titleStyle[textType]} key={i}>
        {wordInTitle[i]}
      </span>)

    if (i < wordInTitle.length - 1) {
      output.push(
        <span key={i - 500} className="">{" "}</span>
      )
    }


  }


  const colorStyling = staticStyles.indexOf(textType) >= 0 ? " text-kyellow drop-shadow-kmag1 lg:drop-shadow-kmag2 " : " text-chill-grad bg-chill-grad bg-clip-text text-transparent drop-shadow-kyellow1 bg-400 animate-shiny "

  const animateOnHover = glowOnHover.indexOf(textType) >= 0 ? "hover:bg-chill-grad hover:text-chill-grad hover:bg-clip-text hover:bg-text-transparent hover:drop-shadow-kyellow1 hover:bg-400  lg:hover:drop-shadow-kcyan2 hover:animate-shiny " : ""


  return (
    <div className="">
      <span className={`${allowsLineBreak} font-berkshire md:drop-shadow-kyellow2 block p-1.5 isolate ${colorStyling} ${animateOnHover} `} >
        {output}
      </span>

    </div>)
}