
import { CTAButton } from '../global/userinterface/CTAButton';
import { KStoreTitle } from '../global/userinterface/KStoreTitle';

const ProductInformation = (props) => {

    const { itemPrice, itemDescription, itemTitle } = props

    // const item = items.length() === 1 ? items.map((item) => item) : null

    // console.log(`item.itemTitle = ${item[0].itemTitle}`)


    return (
        <div className="flex flex-col items-start w-full px-6  space-y-6">
            <div className="flex items-center justify-start text-white font-quicksand ">
                <KStoreTitle title={itemTitle.toLowerCase()} textType={"productTitle"} allowLineBreak={true} />
            </div>
            <div className="w-full text-3xl font-medium text-white  font-quicksand">
                {itemPrice}
            </div>

            <div className="w-full text-2xl text-white  font-quicksand">{itemDescription}</div>
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