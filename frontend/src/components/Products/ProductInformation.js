
import { CTAButton } from '../global/userinterface/CTAButton';
import { KStoreTitle } from '../global/userinterface/KStoreTitle';

const ProductInformation = (props) => {

    const { itemPrice, itemDescription, itemTitle, id, onAddToCart } = props



    return (
        <div className="flex flex-col items-start w-full px-6 space-y-6">
            <div className="flex items-center justify-start text-white font-quicksand ">
                <KStoreTitle title={itemTitle.toLowerCase()} textType={"productTitle"} allowLineBreak={true} />
            </div>
            <div className="w-full text-3xl font-medium text-white font-quicksand">
                {itemPrice}
            </div>

            <div className="w-full text-2xl text-white font-quicksand">{itemDescription}</div>
            <div className="w-full">
                <CTAButton
                    text="Add to Cart"
                    level="primary"
                    location="/cart"
                    onClickEvent={() => onAddToCart(id)}
                    id={id}
                />
            </div>



        </div>
    )

}

export default ProductInformation