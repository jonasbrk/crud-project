import react, { useState } from "react";
import "./Column.styles.css"
import { Trash, Plus } from '../../assets/svg'
import InputTxtButton from "../InputTxtButton/InputTxtButton";
import MenuButton from "../MenuButton/MenuButton";

const ColumnHeader = (props) => {

    const [buttonColor, setButtonColor] = useState('background--1')


    // useEffect(() => {

    //     props.column.color = buttonColor

    // }, [buttonColor])


    const handleButtonColor = (color) => {
        setButtonColor(color)
        props.column.color = buttonColor
    }



    return (

        <div className={`column__header column--${buttonColor}`}>
            <div className={`column__title ${buttonColor}`}>
                <InputTxtButton
                    id={props.id}
                    title={props.title}
                    columns={props.columns}
                    buttonColor={buttonColor}
                    // setButtonColor={setButtonColor}
                    handleButtonColor={handleButtonColor}
                />
                {props.itemLength ? <span>{`(${props.itemLength})`}</span> : ''}
            </div>
            <div className="column__header__btn">
                <div className="column__btns_1 divider--rigth">
                    {/* <MenuButton src={<Settings />} /> */}
                    <MenuButton onClick={() => { props.handleColumnsDeletion(props.id) }} src={<Trash />} />
                </div>
                <div className="column__btns_2">
                    <MenuButton onClick={() => {
                        props.setOpenItemModal(true)
                        // props.setInputTitle('')
                        // props.setInputContent('')
                        // props.setInputId('')
                        props.handleInput('', '', '')
                    }
                    } src={<Plus />} />
                </div>

            </div>
        </div>
    )
}

export default ColumnHeader