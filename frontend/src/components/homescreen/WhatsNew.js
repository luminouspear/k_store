import { KStoreTitle } from '../global/userinterface/KStoreTitle'

const WhatsNew = props => {

    const { sectionTitle } = props
    console.log(`props: ${sectionTitle}`)

    return (<section className="w-full bg-[#111] pt-6 pb-5">
        <div className="w-full max-w-7xl container mx-auto bg-transparent mt-6 md:mt-12 mb-12">
            <h2 className="mx-auto text-center ">
                <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
            </h2>
            {props.children}

        </div>
    </section>)

}

export default WhatsNew