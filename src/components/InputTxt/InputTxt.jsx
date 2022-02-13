import React from "react";
import { Search } from "../../assets/svg";
import "./InputTxt.styles.css"
import MenuButton from "../MenuButton/MenuButton";


const InputTxt = (props) => {


    return (
        <>
            {props.type == 'Search' ?
                <div className=" inputSeach__wrapper">
                    <input value={props.value} onChange={props.onChange} className='inputTxt inputType--Search' type='text' placeholder={props.placeholder ? props.placeholder : null} />
                    <MenuButton src={<Search />} />
                </div>
                : <input value={props.value} onChange={props.onChange} className={`inputTxt inputType--${props.type}`} type='text' placeholder={props.placeholder ? props.placeholder : null} />}

        </>
    )

}

export default InputTxt