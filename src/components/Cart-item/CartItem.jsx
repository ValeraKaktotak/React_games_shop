import './CartItem.css'

const CartItem = ({title, price, id}) => {
    return(
        <div className="cart-item">
            <span>
                {title}
            </span>
            <div className="cart-item__price">
                {price} руб.
            </div>
        </div>
    )
}

export default CartItem