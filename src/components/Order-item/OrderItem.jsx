import './OrderItem.css'
import GameCover from "../Game-cover/GameCover";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {deleteItemInCart} from "../../redux/Cart-reducer/Cart-reducer";

const OrderItem = ({game}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteItemInCart(game.id))
    }

    return(
        <div className="order-item">
            <div className="order-item__cover">
                <GameCover image={game.image} />
            </div>
            <div className="order-item__title">
                <span>
                    {game.title}
                </span>
            </div>
            <div className="order-item__price">
                <span>
                    {game.price} руб.
                </span>
                <AiOutlineCloseCircle
                size={25}
                className="cart-item__delete-icon"
                onClick={handleClick}
                />
            </div>
        </div>
    )
}

export default OrderItem