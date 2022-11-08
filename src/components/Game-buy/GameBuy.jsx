import s from './GameBuy.module.css'
import Button from "../Button/Button";

const GameBuy = ({game}) => {
    return(
        <div className={s.game_buy}>
            <span>{game.price} руб.</span>
            <Button onClick={()=>null} type="primary" >
                В корзину
            </Button>
        </div>
    )
}

export default GameBuy