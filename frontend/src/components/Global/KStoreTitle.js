import { React } from 'react';

export function KStoreTitle({ title, textType }) {
  const wordInTitle = title.toString().split(' ')
  let output = []
  const titleStyle = {
    logo: 'first-letter:text-5xl first-letter:lg:text-6xl first-letter:xl:text-7xl first-letter:2xl:text-8xl first-letter:py-0 pr-2 lg:pr-3 text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl inline-block',
    subheader: 'text-4xl xl:text-5xl first-letter:text-5xl first-letter:xl:text-6xl inline-block -mx-0 ',
    nocaps: 'text-4xl  2xl:text-5xl '
  }

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


  return (
    <div className="">
      <span className="whitespace-nowrap font-berkshire text-chill-grad bg-chill-grad bg-clip-text text-transparent drop-shadow-kyellow1 bg-400 animate-shiny cursor-pointer md:drop-shadow-kyellow2 block p-1.5 isolate ">
        {output}
      </span>

    </div>);
}