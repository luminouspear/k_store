
import { CTAButton } from '../global/userinterface/CTAButton';
import { KStoreTitle } from '../global/userinterface/KStoreTitle';

const ProductInformation = (props) => {

    const { itemPrice, itemDescription, itemTitle, id, onAddToCart, status, quantity, itemSize, shippingPrice, itemCredit } = props
    // console.log('quantity: ', quantity);
    // console.log('id: ', id);
    // console.log('itemSize: ', itemSize);

    // const [hoverState, setHoverState] = useState(false)



    return (
        <div className="z-0 flex flex-col items-start w-full px-6 ">
            <h1 className="flex items-center justify-start pt-6 pb-6 text-white md:pt-0 font-quicksand">
                <KStoreTitle title={itemTitle.toLowerCase()} textType={"productTitle"} allowLineBreak={true} />
            </h1>

            <p className="w-full pb-2 text-2xl text-white font-quicksand">{itemDescription}</p>
            <div className="w-full pb-4 text-sm font-light text-left text-white font-quicksand">{itemCredit}</div>
            <div className="w-full pb-2 text-sm font-light text-left text-white uppercase font-quicksand">{itemSize}</div>
            <div className="w-full text-sm font-light text-left text-white uppercase font-quicksand">{status}</div>

            <h2 className="w-full pt-6 pb-6 text-3xl font-medium text-white font-quicksand ">
                {quantity === 1 && (<div className="text-lg font-semibold font-quicksand text-kyellow ">One of a Kind!</div>)}
                CA ${itemPrice.toFixed(2)}
                <div className="w-full pt-2 text-lg font-semibold text-white font-quicksand">
                    Shipping: {shippingPrice === 0 ? "Free" : `CA $${shippingPrice.toFixed(2)}`}</div>
            </h2>
            {quantity > 0 ? (
                <div className="w-full pt-6">
                    <CTAButton
                        text="Add to Cart"
                        level="primary"
                        location="/cart"
                        onClickEvent={() => onAddToCart(id)}
                        id={id}
                    />
                </div>) :
                <div className="w-full pt-6">
                    <h3 className="text-2xl font-bold text-kyellow hover:text-kmag font-quicksand">SOLD OUT!</h3>
                </div>}



        </div>
    )

}

export default ProductInformation