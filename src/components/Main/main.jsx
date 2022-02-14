import react, { useState } from "react";
import "./main.styles.css"
import { Close, Plus, Activity, Automation, Filter, Help, Integrate, Notification, People, Settings, Share, Tools } from '../../assets/svg'
import MenuButton from "../MenuButton/MenuButton";
import Column from "../Column/Column";
import Modal from "../Modal/Modal";
import InputTxt from "../InputTxt/InputTxt";

const Main = () => {


    const [openModal, setOpenModal] = useState(false)

    const [Columns, setColumns] = useState([]);

    const [InputData, setInputData] = useState('')


    const HandleColumns = (input) => {

        const newColumn = [...Columns,

        {
            id: Math.random(),
            title: input,
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



    return (
        <main>

            {/* <MenuButton src={<Automation />} onClick={() => console.log(Columns)} /> */}
            {Columns.map((e) => { return <Column HandleColumnsDeletion={HandleColumnsDeletion} title={e.title} id={e.id} key={e.id} Columns={Columns} /> })}


            <MenuButton onClick={() => {
                setOpenModal(true)
                setInputData('')
            }} src={<Plus />}>Nova fase</MenuButton>


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
    )
}

export default Main