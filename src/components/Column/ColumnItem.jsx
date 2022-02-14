import react from "react";
import "./ColumnItem.styles.css"
import MenuButton from "../MenuButton/MenuButton";
import Modal from "../Modal/Modal";
import InputTxt from "../InputTxt/InputTxt";

import { Close, Trash, Options, Plus, Activity, Automation, Filter, Help, Integrate, Notification, People, Settings, Share, Tools } from '../../assets/svg'

const ColumnItem = (props) => {


    return (
        <>
            <div className="columnItem" onClick={() => { props.setOpenItemModal(true) }}>
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

            <Modal onClick={() => { props.setOpenItemModal(false) }} value={props.openItemModal}>
                <MenuButton src={<Close />} onClick={() => { props.setOpenItemModal(false) }} />
                <div className="item__edit_wrapper">
                    <h3>
                        Edit Item
                    </h3>
                    <div className="item__edit__1">
                        <span>Titulo</span>
                        <InputTxt value={props.inputTitle} onChange={props.HandleInputTitle} />

                    </div>
                    <div className="item__edit__2">
                        <span>
                            Conteudo
                        </span>
                        <InputTxt value={props.inputContent} onChange={props.HandleInputContent} /></div>

                    <div className="creation__btns">
                        <button
                            onClick={() => { props.setOpenItemModal(false) }}
                        >
                            Cancelar
                        </button>
                        <button onClick={() => {

                            props.HandleItemWraper(props.inputTitle, props.inputContent)
                            props.setOpenItemModal(false)
                        }}
                            className={`save--button ${props.inputTitle ? null : 'save--button--disable'}`} disabled={!props.inputTitle}
                        >
                            Salvar
                        </button>

                    </div>

                </div>
            </Modal>
        </>

    )
}

export default ColumnItem