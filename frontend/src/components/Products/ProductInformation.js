
import { CTAButton } from '../global/userinterface/CTAButton';
import { KStoreTitle } from '../global/userinterface/KStoreTitle';

const ProductInformation = (props) => {

    const { itemPrice, itemDescription, itemTitle } = props

    // const item = items.length() === 1 ? items.map((item) => item) : null

    // console.log(`item.itemTitle = ${item[0].itemTitle}`)


    return (
        <div className="w-full  flex flex-col space-y-6 items-start px-6">
            <div className="flex items-center justify-start font-quicksand text-white ">
                <KStoreTitle title={itemTitle.toLowerCase()} textType={"productTitle"} allowLineBreak={true} />
            </div>
            <div className="w-full   text-3xl text-white font-medium font-quicksand">
                {itemPrice}
            </div>

            <div className="w-full   text-2xl text-white font-quicksand">{itemDescription}</div>
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