import react, { useState } from "react";
import "./Column.styles.css"
import { Close, Trash, Options, Plus, Activity, Automation, Filter, Help, Integrate, Notification, People, Settings, Share, Tools } from '../../assets/svg'

import ColumnHeader from "./ColumnHeader";
import ColumnItem from "./ColumnItem";
import MenuButton from "../MenuButton/MenuButton";
import Modal from "../Modal/Modal";
import InputTxt from "../InputTxt/InputTxt";

const Column = (props) => {

    const [itemWraper, setItemWraper] = useState([])

    const [openItemModal, setOpenItemModal] = useState(false)


    const HandleItemWraper = () => {

        const newItemWraper = [...itemWraper,

        {
            id: Math.random(),
            title: Math.random(),
            Conteudo: 'fgiasdfgjsadhfgj',
        }];

        setItemWraper(newItemWraper)
    }

    const HandleItemWraperDeletion = (itemWraperID) => {

        const newItemWraper = itemWraper.filter((item) => item.id !== itemWraperID)

        setItemWraper(newItemWraper)
    }



    return (
        <>
            <div className="column">
                <ColumnHeader id={props.id} title={props.title} setOpenItemModal={setOpenItemModal} HandleColumnsDeletion={props.HandleColumnsDeletion} />
                <div className="column__main">
                    {itemWraper.map((e) => { return <ColumnItem HandleItemWraperDeletion={HandleItemWraperDeletion} id={e.id} key={e.id} /> })}
                </div>
            </div>
            <Modal onClick={() => { setOpenItemModal(false) }} value={openItemModal}>
                <MenuButton src={<Close />} onClick={() => { setOpenItemModal(false) }} />
                <div className="item__edit_wrapper">
                    <h3>
                        Edit Item
                    </h3>
                    <div className="item__edit__1">
                        <span>Titulo</span>
                        <InputTxt />

                    </div>
                    <div className="item__edit__2">
                        <span>
                            Conteudo
                        </span>
                        <InputTxt /></div>

                    <div className="creation__btns">
                        <button
                        // onClick={() => { setOpenModal(false) }}
                        >
                            Cancelar
                        </button>
                        <button onClick={() => {
                            // HandleColumns(InputData)
                            // setOpenModal(false)
                        }}
                        // className={`save--button ${InputData ? null : 'save--button--disable'}`} disabled={!InputData}
                        >
                            Salvar
                        </button>

                    </div>

                </div>
            </Modal>
        </>
    )
}

export default Column