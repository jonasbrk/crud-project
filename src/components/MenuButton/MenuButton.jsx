import React from "react";
import "./MenuButton.styles.css"


const MenuButton = (props) => {

    return (
        <button onClick={props.onClick} className={props.children ? `button--type--text` : `button--type--icon`}>
            <div className="button__icon">
                {props.src}
            </div>
            {props.children ?
                <div className="button__value">
                    <span>{props.children}</span>
                </div> : null}
        </button>
    )
}

export default MenuButton