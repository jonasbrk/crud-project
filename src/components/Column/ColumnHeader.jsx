import react, { useRef, useState } from "react";
import "./Column.styles.css"
import { Trash, Options, Plus, Activity, Automation, Filter, Help, Integrate, Notification, People, Settings, Share, Tools } from '../../assets/svg'
import InputTxtButton from "../InputTxtButton/InputTxtButton";
import MenuButton from "../MenuButton/MenuButton";

const ColumnHeader = (props) => {

    const [buttonColor, setButtonColor] = useState('background--1')






    return (

        <div className={`column__header column--${buttonColor}`}>
            <div className={`column__title ${buttonColor}`}>
                <InputTxtButton id={props.id} title={props.title} Columns={props.Columns} buttonColor={buttonColor} setButtonColor={setButtonColor} id={props.id} />

            </div>
            <div className="column__header__btn">
                <div className="column__btns_1 divider--rigth">
                    <MenuButton src={<Settings />} />
                    <MenuButton onClick={() => {
                        props.HandleColumnsDeletion(props.id)

                    }} src={<Trash />} />
                </div>
                <div className="column__btns_2">
                    <MenuButton onClick={() => {
                        props.setOpenItemModal(true)
                        props.setInputTitle('')
                        props.setInputContent('')
                    }
                    } src={<Plus />} />
                </div>

            </div>
        </div>
    )
}

export default ColumnHeader