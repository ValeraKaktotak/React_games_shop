import s from './GameItem.module.css'
import GameCover from "../Game-cover/GameCover";
import GameBuy from "../Game-buy/GameBuy";

const GameItem = ({game}) => {
    return(
        <div className={s.game_item}>
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