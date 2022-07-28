
import { CTAButton } from '../global/userinterface/CTAButton';
import { KStoreTitle } from '../global/userinterface/KStoreTitle';

const ProductInformation = () => {

    return (
        <div className="w-full  flex flex-col space-y-6 items-start px-6">
            <div className="flex items-center justify-start font-quicksand text-white ">
                <KStoreTitle title={"skulliver"} textType={"productTitle"} />
            </div>
            <div className="w-full   text-3xl text-white font-medium font-quicksand">
                <span className="text-2xl">CAD
                </span>
                $1699.99
            </div>

            <div className="w-full   text-2xl text-white font-quicksand">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae eligendi voluptate reiciendis fugit, quidem eos libero asperiores quam magnam, cupiditate repudiandae accusantium dolores ducimus mollitia excepturi doloremque, in modi.</div>
            <div className="w-full">
                <CTAButton
                    text="Add to Cart"
                    level="primary"
                />
            </div>



        </div>
    )

}

export default ProductInformation