import './CartMenu.css'
import {totalCartCost} from "../utils";
import Button from "../Button/Button";
import CartItem from "../Cart-item/CartItem";

const CartMenu = ({items, onClick}) => {
    return (
        <div className="cart-menu">
            <div className="cart-menu__game-list">
                {
                    items.length > 0 ?
                        items.map(game => <CartItem
                            key={game.id}
                            title={game.title}
                            price={game.price}
                            id={game.id}
                        />) :
                        'Корзина пуста'
                }
            </div>
            {
                items.length > 0 ?
                    <div className="cart-menu__arrange">
                        <div className="cart-menu__total-price">
                            <span>Итого к оплате:</span>
                            <span>{totalCartCost(items)} руб.</span>
                        </div>
                        <Button type='primary' size='m'>
                            Оплатить
                        </Button>
                    </div> :
                    null
            }
        </div>
    )
}


export default CartMenu