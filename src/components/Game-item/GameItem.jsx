import s from './GameItem.module.css'
import GameCover from "../Game-cover/GameCover";
import GameBuy from "../Game-buy/GameBuy";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setCurrentGame} from "../../redux/Game-reducer/Game-reducer";

const GameItem = ({game}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        dispatch(setCurrentGame(game))
        navigate(`/app/${game.title}`)
    }
    return(
        <div className={s.game_item} onClick={handleClick}>
            <GameCover image={game.image}/>
            <span className={s.title}>{game.title}</span>
            <div className={s.ganres_block}>
                {game.genres.map((ganre, index) => {
                    return <span key={index} className={s.ganre_item}>{ganre}</span>
                })}
            </div>
            <div className={s.buy}>
                <GameBuy game={game} />
            </div>
        </div>
    )
}

export default GameItem