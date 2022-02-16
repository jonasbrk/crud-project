import react, { useEffect, useState } from "react";
import "./main.styles.css"
import { Close, Plus, Activity, Automation, Filter, Help, Integrate, Notification, People, Settings, Share, Tools } from '../../assets/svg'
import MenuButton from "../MenuButton/MenuButton";
import Column from "../Column/Column";
import Modal from "../Modal/Modal";
import InputTxt from "../InputTxt/InputTxt";

import columnContext from '../Column/context'
import { produce, setAutoFreeze } from 'immer'


const Main = () => {

    setAutoFreeze(false)

    const [openModal, setOpenModal] = useState(false)

    const [Columns, setColumns] = useState([]);

    const [InputData, setInputData] = useState('')


    const HandleColumns = (input) => {

        const newColumn = [...Columns,

        {
            id: Math.random(),
            title: input,
            cards: [],
        }];
        setColumns(newColumn)

    }

    const HandleColumnsDeletion = (ColumnId) => {

        const newColumn = Columns.filter((Column) => Column.id !== ColumnId)

        setColumns(newColumn)
    }



    const HandleInputData = (e) => {

        setInputData(e.target.value)

    }


    function move(fromList, toList, from, to) {

        console.log(fromList, from, to)

        const newColumn = produce(Columns, (draft) => {

            const dragged = draft[fromList].cards[from];

            draft[fromList].cards.splice(from, 1);
            draft[toList].cards.splice(to, 0, dragged);


        })

        setColumns(newColumn)

        console.log(Columns[0].cards)
    }



    return (
        <columnContext.Provider value={{ Columns, move }}>
            <main>
                {Columns.map((e, index) => {
                    return <Column
                        setColumns={setColumns}
                        HandleColumnsDeletion={HandleColumnsDeletion}
                        card={e.cards}
                        title={e.title}
                        id={e.id}
                        key={e.id}
                        Column={e}
                        Columns={Columns}
                        index={index} />
                })}


                <MenuButton onClick={() => {
                    setOpenModal(true)
                    setInputData('')
                }} src={<Plus />}>Nova fase</MenuButton>

                <MenuButton onClick={() => { console.log(Columns) }} src={<Automation />} />
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
                                HandleColumns(InputData)
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