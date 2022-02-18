import React from "react";
import { Search } from "../../assets/svg";
import "./InputTxt.styles.css"
import MenuButton from "../MenuButton/MenuButton";



const InputTxtArea = (props) => {

    const Type = () => {

        if (props.type == 'Search' || props.type == 'Text') {

            return (
                <div className=" inputSeach__wrapper">
                    <input value={props.value} onChange={props.onChange} className='inputTxt inputType--Search' type='text' placeholder={props.placeholder ? props.placeholder : null} />
                    <MenuButton onClick={props.onClick} src={props.src} />
                </div>
            )
        }
        if (props.type == 'Area') {

            return (
                <div className=" inputSeach__wrapper">
                    <textarea value={props.value} onChange={props.onChange} className='inputTxt' type='text' placeholder={props.placeholder ? props.placeholder : null} />
                </div>
            )
        }
    }


    return (

        Type()
    )

}

export default InputTxtArea