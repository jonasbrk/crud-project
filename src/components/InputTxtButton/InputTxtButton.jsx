import react, { useEffect, useState, useRef } from "react";
import InputTxt from "../InputTxt/InputTxt";
import "./inputTxtButton.styles.css"

const InputTxtButton = (props) => {

    const [txtButton, setTxtButton] = useState(false)
    const [buttonTitle, setButtonTitle] = useState(props.title)
    const [buttonPlaceHoldder, setButtonPlaceHoldder] = useState('Inserir titulo')

    const Ref = useRef(null)

    // useEffect(() => {

    //     props.columns.find(x => x.id === props.id).title = buttonTitle

    // }, [buttonTitle])


    const handleButtonTitle = (e) => {

        setButtonTitle(e.target.value)
    }

    useEffect(() => {

        // if (buttonTitle) setButtonPlaceHoldder(buttonTitle)
        // if (!buttonTitle) setButtonPlaceHoldder('Inserir titulo')
        buttonTitle ? setButtonPlaceHoldder(buttonTitle) : setButtonPlaceHoldder('Inserir titulo')

        props.columns.find(x => x.id === props.id).title = buttonTitle

    }, [buttonTitle])


    useEffect(() => {

        function handleClickOutside(event) {
            if (Ref.current && !Ref.current.contains(event.target)) {

                setTxtButton(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {

            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [Ref])

    return (
        <>
            <button className="txtButton" onClick={() => setTxtButton(true)}>
                {buttonPlaceHoldder}
            </button>
            <div ref={Ref} className={`txtButton__wrapper ${txtButton && ('txtButton__wrapper--open')}`}>
                <div className={`txtButton__Input ${props.buttonColor}`}>
                    <InputTxt placeholder='Inserir titulo' value={buttonTitle} onChange={(e) => handleButtonTitle(e)}  >{props.children}</InputTxt>
                </div>
                <div className="color__picker">
                    <ul>
                        <label onClick={() => props.handleButtonColor('background--1')} className="background--1"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.handleButtonColor('background--2')} className="background--2"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.handleButtonColor('background--3')} className="background--3"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.handleButtonColor('background--4')} className="background--4"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.handleButtonColor('background--5')} className="background--5"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.handleButtonColor('background--6')} className="background--6"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.handleButtonColor('background--7')} className="background--7"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.handleButtonColor('background--8')} className="background--8"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.handleButtonColor('background--9')} className="background--9"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.handleButtonColor('background--10')} className="background--10"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.handleButtonColor('background--11')} className="background--11"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                        <label onClick={() => props.handleButtonColor('background--12')} className="background--12"><input type="radio" name={`color__picker${props.id}`} /><span className="checkmark"></span> </label>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default InputTxtButton