export function KStoreTitle(title) {
  let wordInTitle = title.split(' ');
  let output = [];

  //console.log(wordInTitle);
  for (let i = 0; i < wordInTitle.length; i++) {
    // output.push(<span className="inline-block font-berkshire bg-chill-grad bg-clip-text text-transparent first-letter:text-5xl first-letter:sm:text-5xl  first-letter:md:text-5xl first-letter:lg:text-6xl first-letter:xl:text-7xl first-letter:2xl:text-8xl first-letter:py-0 pr-2 lg:pr-3 text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer font-bold shadow-kyellow1 md:shadow-kyellow2 leading-3  leading-tighter animate-glow lg:pb-4" key={i}>{wordInTitle[i]}</span>);
    output.push(
      <span className="
    first-letter:text-5xl first-letter:lg:text-6xl first-letter:xl:text-7xl first-letter:2xl:text-8xl first-letter:py-0 pr-2 lg:pr-3
    text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl inline-block"
        key={i}>
        {wordInTitle[i]}
      </span>);

  }


  return (
    <div className="">
      <span className="whitespace-nowrap font-berkshire text-chill-grad bg-chill-grad bg-clip-text text-transparent drop-shadow-kyellow1 bg-400 animate-shiny cursor-pointer md:drop-shadow-kyellow2 block ">
        {output}
      </span>

    </div>);
}