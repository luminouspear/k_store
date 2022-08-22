export function KStoreSubtitle(subtitle) {

    let wordInSubtitle = subtitle.toString().split(' ');
    let output = [];

    for (let i = 0; i < wordInSubtitle.length; i++) {
        output.push(
            <span className="inline-block pr-2 text-3xl 
  first-letter:text-4xl first-letter:lg:text-5xl first-letter:xl:text-6xl first-letter:2xl:text-7xl first-letter:py-0 lg:pr-3
 lg:text-4xl xl:text-5xl 2xl:text-6xl whitespace-nowrap"
                key={i}>
                {wordInSubtitle[i]}
            </span>);

    }


    return (
        <div className="">
            <h2 className="inline-block text-center  font-berkshire text-kyellow drop-shadow-kmag1 lg:drop-shadow-kmag2 whitespace-nowrap">
                {output}
            </h2>

        </div>);
}