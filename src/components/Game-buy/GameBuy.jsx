import s from './GameBuy.module.css'
import {useDispatch, useSelector} from "react-redux";
import Button from "../Button/Button";
import {deleteItemInCart, setItemInCart} from "../../redux/Cart-reducer/Cart-reducer";


const GameBuy = ({game}) => {
    const dispatch = useDispatch();
    const gamesInCart = useSelector(store => store.cart.itemsInCart)
    const isThisGameInCart = gamesInCart.some(item => item.id === game.id)

    const cartHandle = (e) => {
        e.stopPropagation();
        if(isThisGameInCart){
            dispatch(deleteItemInCart(game.id))
        }
        else{
            dispatch(setItemInCart(game))
        }
    }
    return (
        <div className={s.game_buy}>
            <span>{game.price} руб.</span>
            <Button onClick={cartHandle} type={isThisGameInCart?"secondary":"primary"}>
                {isThisGameInCart ? 'Убрать из корзины' : 'В корзину'}
            </Button>
        </div>
    )
}

export default GameBuy