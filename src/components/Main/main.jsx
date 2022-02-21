import react, { useEffect, useState } from "react";
import "./main.styles.css"
import { Close, Plus } from '../../assets/svg'
import MenuButton from "../MenuButton/MenuButton";
import Column from "../Column/Column";
import Modal from "../Modal/Modal";
import InputTxt from "../InputTxt/InputTxt";
import columnContext from '../Column/context'
import { produce, setAutoFreeze } from 'immer'


const Main = (props) => {

    setAutoFreeze(false)

    const [openModal, setOpenModal] = useState(false)

    const [columns, setColumns] = useState([]);

    const [InputData, setInputData] = useState('')


    const handleColumns = (input) => {

        const newColumn = [...columns,

        {
            id: Math.random(),
            title: input,
            color: 'background--1',
            cards: [],
        }];
        setColumns(newColumn)

    }

    const handleColumnsDeletion = (columnId) => {

        const newColumn = columns.filter((column) => column.id !== columnId)

        setColumns(newColumn)
    }



    const HandleInputData = (e) => {

        setInputData(e.target.value)

    }




    function move(fromList, toList, from, to) {

        console.log(fromList, from, to)

        setColumns(produce(columns, (draft) => {

            const dragged = draft[fromList].cards[from];

            draft[fromList].cards.splice(from, 1);
            draft[toList].cards.splice(to, 0, dragged);

        }))
    }



    return (
        <columnContext.Provider value={{ columns, move }}>
            <main>
                {columns.map((e, index) => {
                    return <Column
                        setColumns={setColumns}
                        handleColumnsDeletion={handleColumnsDeletion}
                        card={e.cards}
                        title={e.title}
                        color={e.color}
                        id={e.id}
                        key={e.id}
                        column={e}
                        columns={columns}
                        index={index}
                        searchInput={props.searchInput}
                    />
                })}

                <div className="column">
                    <MenuButton onClick={() => {
                        setOpenModal(true)
                        setInputData('')
                    }} src={<Plus />}><span className="newColumn">Nova fase</span></MenuButton>
                </div>

                <Modal onClick={() => { setOpenModal(false) }} value={openModal}>
                    <MenuButton src={<Close />} onClick={() => { setOpenModal(false) }} />
                    <div className="creation__column">
                        <div className="creation__input divider--bottom">
                            <h3>Nova fase</h3>
                            <span>Nome da fase</span>
                            <InputTxt value={InputData} onChange={HandleInputData} />
                        </div>
                        <div className="creation__btns">
                            <button onClick={() => { setOpenModal(false) }}>
                                Cancelar
                            </button>
                            <button onClick={() => {
                                handleColumns(InputData)
                                setOpenModal(false)
                            }} className={`save--button ${InputData ? null : 'save--button--disable'}`} disabled={!InputData}>
                                Salvar
                            </button>

                        </div>
                    </div>
                </Modal>


            </main >
        </columnContext.Provider>
    )
}

export default Main