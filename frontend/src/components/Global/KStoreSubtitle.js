export function KStoreSubtitle(subtitle) {
    console.log(`subtitle is ${subtitle}`)
    let wordInSubtitle = subtitle.toString().split(' ');
    let output = [];

    //console.log(wordInTitle);
    for (let i = 0; i < wordInSubtitle.length; i++) {
        // output.push(<span className="inline-block font-berkshire bg-chill-grad bg-clip-text text-transparent first-letter:text-5xl first-letter:sm:text-5xl  first-letter:md:text-5xl first-letter:lg:text-6xl first-letter:xl:text-7xl first-letter:2xl:text-8xl first-letter:py-0 pr-2 lg:pr-3 text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer font-bold shadow-kyellow1 md:shadow-kyellow2 leading-3  leading-tighter animate-glow lg:pb-4" key={i}>{wordInTitle[i]}</span>);
        output.push(
            <span className="
    first-letter:text-4xl first-letter:lg:text-5xl first-letter:xl:text-6xl first-letter:2xl:text-7xl first-letter:py-0 pr-2 lg:pr-3
    text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl inline-block whitespace-nowrap"
                key={i}>
                {wordInSubtitle[i]}
            </span>);

    }


    return (
        <div className="">
            <h2 className=" font-berkshire text-center text-kyellow drop-shadow-kmag1 lg:drop-shadow-kmag2 block ">
                {output}
            </h2>

        </div>);
}