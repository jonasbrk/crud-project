import react, { useState } from "react";
import "./Modal.styles.css"
// import { Close, Plus, Activity, Automation, Filter, Help, Integrate, Notification, People, Settings, Share, Tools } from '../../assets/svg'
// import MenuButton from "../MenuButton/MenuButton";


const Modal = (props) => {




    return (
        <div className={`modal__wrapper ${props.value ? `modal__wrapper--open` : null}`}>


            <div onClick={props.onClick} className={`modal__background ${props.value ? `modal__background--open` : null}`}>
            </div>
            <div className={`modal ${props.value ? `modal--open` : null}`}>
                {props.children}
            </div>

        </div>
    )
}

export default Modal