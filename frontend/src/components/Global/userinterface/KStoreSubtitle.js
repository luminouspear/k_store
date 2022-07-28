export function KStoreSubtitle(subtitle) {

    let wordInSubtitle = subtitle.toString().split(' ');
    let output = [];

    for (let i = 0; i < wordInSubtitle.length; i++) {
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
            <h2 className=" font-berkshire text-center text-kyellow drop-shadow-kmag1 lg:drop-shadow-kmag2  inline-block whitespace-nowrap">
                {output}
            </h2>

        </div>);
}