import s from './ItemsInCart.module.css'

const ItemsInCart = ({quantity = 0}) => {
    return (
        quantity > 0 ?
            <div className={s.items_in_cart}>
                {quantity}
            </div> : null
    )
}

export default ItemsInCart