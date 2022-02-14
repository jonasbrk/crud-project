import react, { useEffect, useState, useRef } from "react";
import InputTxt from "../InputTxt/InputTxt";
import "./inputTxtButton.styles.css"

const InputTxtButton = (props) => {

    const [txtButton, setTxtButton] = useState(false)
    const [buttonTitle, setButtonTitle] = useState(props.title)
    const [columnsTitle, setColumnsTitle] = useState(props.Columns.find(x => x.id === props.id))

    const Ref = useRef(null)


    // const HandleColumnTitle = () => {

    //     setColumnsTitle(columnsTitle.title = buttonTitle)


    // }



    const HandleButtonTitle = (e) => {

        setButtonTitle(e.target.value)

        console.log(props.Columns.find(x => x.id === props.id).title)


    }

    useEffect(() => {

        function handleClickOutside(event) {
            if (Ref.current && !Ref.current.contains(event.target)) {


                setTxtButton(false)

                // HandleColumnTitle(props.Columns, props.id)
                if (props.Columns.find(x => x.id === props.id))
                    return { ...props.Columns, title: buttonTitle }
            }

        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {

            document.removeEventListener("mousedown", handleClickOutside);

        };

    }, [Ref])

    return (
        <>
            <button onClick={() => console.log(props.Columns.find(x => x.id === props.id))}></button>
            <button className="txtButton" onClick={() => setTxtButton(true)}>
                {buttonTitle}
            </button>
            <div ref={Ref} className={`txtButton__wrapper ${txtButton && ('txtButton__wrapper--open')}`}>
                <div className={`txtButton__Input ${props.buttonColor}`}>
                    <InputTxt onChange={(e) => HandleButtonTitle(e)}  >{props.children}</InputTxt>
                </div>
                <div className="color__picker">
                    <ul>
                        <label onClick={() => props.setButtonColor('background--1')} className="background--1"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.setButtonColor('background--2')} className="background--2"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.setButtonColor('background--3')} className="background--3"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.setButtonColor('background--4')} className="background--4"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.setButtonColor('background--5')} className="background--5"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.setButtonColor('background--6')} className="background--6"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.setButtonColor('background--7')} className="background--7"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.setButtonColor('background--8')} className="background--8"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.setButtonColor('background--9')} className="background--9"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.setButtonColor('background--10')} className="background--10"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.setButtonColor('background--11')} className="background--11"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.setButtonColor('background--12')} className="background--12"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default InputTxtButton