import react, { useEffect, useState } from "react";
import "./Column.styles.css"
import { Close } from '../../assets/svg'

import ColumnHeader from "./ColumnHeader";
import ColumnItem from "./ColumnItem";
import MenuButton from "../MenuButton/MenuButton";
import Modal from "../Modal/Modal";
import InputTxt from "../InputTxt/InputTxt";
import InputTxtArea from "../InputTxt/InputTxtArea";

const Column = (props) => {

    const [itemWraper, setItemWraper] = useState(props.column.cards)

    const [inputId, setInputId] = useState('')

    const [inputTitle, setInputTitle] = useState('')

    const [inputContent, setInputContent] = useState('')

    const [itemLength, setItemLength] = useState('')

    const [openItemModal, setOpenItemModal] = useState(false)


    const handleItemWraper = (Title, Content) => {

        props.column.cards = [...itemWraper,

        {
            id: Math.random(),
            title: Title,
            content: Content,
        }];

        setItemWraper(props.column.cards)
    }

    useEffect(() => { setItemLength(props.column.cards.length) }, [itemWraper])


    const handleInputTitle = (e) => {

        setInputTitle(e.target.value)
    }

    const handleInputContent = (e) => {

        setInputContent(e.target.value)
    }

    const handleItemWraperDeletion = (itemWraperID) => {

        const newItemWraper = props.column.cards.filter((item) => item.id !== itemWraperID)

        props.column.cards = newItemWraper
        setItemWraper(props.column.cards)
    }

    const handleItemAdd = () => {

        if (itemWraper.find(x => x.id === inputId)) {
            itemWraper.find(x => x.id === inputId).title = inputTitle
            itemWraper.find(x => x.id === inputId).content = inputContent
        } else {
            handleItemWraper(inputTitle, inputContent)
        }

    }

    // useEffect(() => {
    //     setItemWraper(props.column.cards)

    // }, [props.column.cards])

    const handleInput = (title, content, id) => {

        setInputTitle(title)
        setInputContent(content)
        setInputId(id)

    }


    useEffect(() => {

        const handleSearch = setTimeout(() => {

            const cardFilter = props.column.cards.filter((allCards) => allCards.title.toLocaleLowerCase().includes(props.searchInput) || allCards.content.toLocaleLowerCase().includes(props.searchInput))

            if (props.searchInput) setItemWraper(cardFilter)

        }, 1000)

        if (!props.searchInput) setItemWraper(props.column.cards)

        return () => clearTimeout(handleSearch)
    }, [props.searchInput])



    return (
        <>
            <div className="column">
                <MenuButton onClick={() => { console.log(props.column) }} />
                <ColumnHeader handleInput={handleInput} column={props.column} color={props.color} setInputId={setInputId} itemLength={itemLength} id={props.id} title={props.title} columns={props.columns} setOpenItemModal={setOpenItemModal} handleColumnsDeletion={props.handleColumnsDeletion} setInputContent={setInputContent} setInputTitle={setInputTitle} />
                <div className="column__main">
                    {itemWraper.map((e, index) => {
                        return <ColumnItem
                            // setInputTitle={setInputTitle}
                            // setInputContent={setInputContent}
                            handleItemWraperDeletion={handleItemWraperDeletion}
                            // setInputId={setInputId}
                            handleInput={handleInput}
                            setOpenItemModal={setOpenItemModal}
                            title={e.title}
                            content={e.content}
                            // card={e.cards}
                            id={e.id}
                            key={e.id}
                            index={index}
                            listIndex={props.index}
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
                        <InputTxt value={inputTitle} onChange={handleInputTitle} />

                    </div>
                    <div className="item__edit__2">
                        <span>
                            Conteudo
                        </span>
                        <InputTxtArea value={inputContent} onChange={handleInputContent} type='Area' /></div>

                    <div className="creation__btns">
                        <button
                            onClick={() => { setOpenItemModal(false) }}
                        >
                            Cancelar
                        </button>
                        <button onClick={() => {
                            setOpenItemModal(false)
                            handleItemAdd()
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