import react, { useEffect, useRef } from "react";
import "./ColumnItem.styles.css"
import MenuButton from "../MenuButton/MenuButton";
import Modal from "../Modal/Modal";
import InputTxt from "../InputTxt/InputTxt";

import { Close, Trash, Options, Plus, Activity, Automation, Filter, Help, Integrate, Notification, People, Settings, Share, Tools } from '../../assets/svg'

const ColumnItem = (props) => {


    const GetItemInfo = () => {

        props.setInputTitle(props.title)
        props.setInputContent(props.content)
        props.setInputId(props.id)
    }


    const RefItem = useRef(null)
    useEffect(() => {

        function handleClickOutside(event) {
            if (RefItem.current && !RefItem.current.contains(event.target)) {

                console.log('oi')
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {

            document.removeEventListener("mousedown", handleClickOutside);

        };

    }, [RefItem])



    return (
        <>
            <div className="columnItem" ref={RefItem}
                onClick={() => {
                    //     props.setOpenItemModal(true)
                    //     GetItemInfo()

                }}
            >
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

        </>
    )
}

export default ColumnItem