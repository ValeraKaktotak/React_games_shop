import s from './GameCover.module.css'

const GameCover = ({image=""}) => {
    return(
        <div className={s.game_cover} style={{backgroundImage: `url(${image})`}} />
    )
}

export default GameCover