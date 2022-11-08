import s from './Button.module.css'
import classNames from "classnames";

const Button = ({
    onClick,
    type,
    children,
    size = s
}) => {
    const btnClasses = classNames({
        'btn': true,
        'btn--primary': type === 'primary'
    })
    return(
        <button>
            {children}
        </button>
    )
}

export default Button