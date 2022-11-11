import s from './GameGenre.module.css'

const GameGenre = ({genre}) => {
    return(
        <span className={s.genre_item}>
            {genre}
        </span>
    )
}

export default GameGenre