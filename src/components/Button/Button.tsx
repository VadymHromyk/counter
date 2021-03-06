import React from 'react';
import css from './Button.module.css'


type ButtonType = {
    isDisabled: boolean
    title: string
    func: () => void
}

const Button = (props: ButtonType) => {

    const callBackFn = () => {
        props.func()
    };

    return (
        <div>
            <button disabled={props.isDisabled} onClick={callBackFn}
                    className={props.isDisabled ? css.disabled_button : css.enabled_button}
            >
                {props.title}
            </button>
        </div>
    );
}

export default Button;