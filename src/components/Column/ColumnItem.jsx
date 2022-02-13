import react from "react";
import "./ColumnItem.styles.css"
import MenuButton from "../MenuButton/MenuButton";
import { Trash, Options, Plus, Activity, Automation, Filter, Help, Integrate, Notification, People, Settings, Share, Tools } from '../../assets/svg'

const ColumnItem = (props) => {


    return (

        <div className="columnItem">
            <div className="columnItem__header">
                <div className="columnItem__section__1">
                    <span>fruta</span>
                    <MenuButton onClick={() => props.HandleItemWraperDeletion(props.id)} src={<Trash />} />
                </div>
                <div className="columnItem__section__2">
                    <h3>
                        {props.title}
                    </h3>
                </div>

            </div>

            <p>
                {props.content}
            </p>

        </div>
    )
}

export default ColumnItem