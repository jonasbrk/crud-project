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

    const [inputTitle, setInputTitle] = useState('')

    const [inputId, setInputId] = useState('')

    const [inputContent, setInputContent] = useState('')

    const [openItemModal, setOpenItemModal] = useState(false)


    const HandleItemWraper = (Title, Content) => {

        const newItemWraper = [...itemWraper,

        {
            id: Math.random(),
            title: Title,
            Conteudo: Content,
        }];

        setItemWraper(newItemWraper)
    }

    const HandleInputTitle = (e) => {

        setInputTitle(e.target.value)

    }

    const HandleInputContent = (e) => {

        setInputContent(e.target.value)

    }

    const HandleItemWraperDeletion = (itemWraperID) => {

        const newItemWraper = itemWraper.filter((item) => item.id !== itemWraperID)

        setItemWraper(newItemWraper)
    }

    const HandleItemAdd = () => {


        console.log(itemWraper.find(x => x.id === inputId))

        if (itemWraper.find(x => x.id === inputId)) {

            itemWraper.find(x => x.id === inputId).title = inputTitle
            itemWraper.find(x => x.id === inputId).Conteudo = inputContent

        } else {
            HandleItemWraper(inputTitle, inputContent)
        }

    }


    return (
        <>
            <div className="column">
                <ColumnHeader setInputId={setInputId} id={props.id} title={props.title} Columns={props.Columns} setOpenItemModal={setOpenItemModal} HandleColumnsDeletion={props.HandleColumnsDeletion} setInputContent={setInputContent} setInputTitle={setInputTitle} />
                <div className="column__main">
                    {itemWraper.map((e) => {
                        return <ColumnItem
                            setInputTitle={setInputTitle}
                            setInputContent={setInputContent}
                            HandleItemWraperDeletion={HandleItemWraperDeletion}
                            setInputId={setInputId}
                            setOpenItemModal={setOpenItemModal}
                            title={e.title}
                            content={e.Conteudo}
                            id={e.id}
                            key={e.id}
                        />
                    })}
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
                        <InputTxt value={inputTitle} onChange={HandleInputTitle} />

                    </div>
                    <div className="item__edit__2">
                        <span>
                            Conteudo
                        </span>
                        <InputTxt value={inputContent} onChange={HandleInputContent} /></div>

                    <div className="creation__btns">
                        <button
                            onClick={() => { setOpenItemModal(false) }}
                        >
                            Cancelar
                        </button>
                        <button onClick={() => {

                            // HandleItemWraper(inputTitle, inputContent)
                            setOpenItemModal(false)
                            HandleItemAdd()
                        }}
                            className={`save--button ${inputTitle ? null : 'save--button--disable'}`} disabled={!inputTitle}
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