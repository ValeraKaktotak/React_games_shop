import './Button.css'
import classNames from "classnames";
import React from "react";

const Button = React.memo(({
                               onClick,
                               type,
                               children,
                               size = "s"
                           }) => {
    const btnClasses = classNames({
        'btn': true,
        'btn__primary': type === 'primary',
        'btn__secondary': type === 'secondary',
        'btn__small': size === 's',
        'btn__medium': size === 'm'
    })
    return(
        <button className={btnClasses} onClick={onClick}>
            {children}
        </button>
    )
})

export default Button