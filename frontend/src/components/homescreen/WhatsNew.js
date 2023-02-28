import { KStoreTitle } from '../global/userinterface/KStoreTitle'
import { CTAButton } from '../global/userinterface/CTAButton';

const WhatsNew = props => {

    const { sectionTitle } = props
    // console.log(`props: ${sectionTitle}`)

    return (<section className="w-full bg-[#111] pt-6 pb-5">
        <div className="container w-full mx-auto mt-6 mb-12 bg-transparent max-w-7xl md:mt-12">
            <h2 className="mx-auto text-center ">
                <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
            </h2>
            {props.children}
            <div className="w-full mx-auto md:w-10/12 lg:w-5/12">
                <CTAButton text={"View the Store"} level={"secondary"} location={"/gallery"}
                    layoutPrefs="w-10/12 lg:w-full mx-auto mt-8" />
            </div>

        </div>
    </section>)

}

export default WhatsNew