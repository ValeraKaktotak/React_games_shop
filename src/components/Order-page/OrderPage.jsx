import './OrderPage.css'
import {useSelector} from "react-redux";
import OrderItem from "../Order-item/OrderItem";
import {totalCartCost} from "../utils";

const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart);
    if(items.length < 1) return <h1>Ваша корзина пуста</h1>
    return(
        <div className="order-page">
            <div className="order-page__left">
                {items.map(game => <OrderItem key={game.id} game={game} />)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>
                        {items.length} игр(ы) на сумму: {totalCartCost(items)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default OrderPage