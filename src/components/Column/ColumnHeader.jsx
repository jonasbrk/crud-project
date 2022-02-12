import react from "react";
import "./Column.styles.css"
import { Trash, Options, Plus, Activity, Automation, Filter, Help, Integrate, Notification, People, Settings, Share, Tools } from '../../assets/svg'

import MenuButton from "../MenuButton/MenuButton";

const ColumnHeader = (props) => {

    return (

        <div className="column__header">
            <div className="column__title">
                <h2>{props.title}</h2>
            </div>
            <div className="column__header__btn">
                <div className="column__btns_1 divider--rigth">
                    <MenuButton src={<Settings />} />
                    <MenuButton onClick={() => { props.HandleColumnsDeletion(props.id) }} src={<Trash />} />
                </div>
                <div className="column__btns_2">
                    <MenuButton onClick={props.setOpenItemModal} src={<Plus />} />
                </div>

            </div>
        </div>
    )
}

export default ColumnHeader