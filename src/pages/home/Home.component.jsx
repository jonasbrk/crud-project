import react, { useEffect, useState } from "react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from "react-dnd-html5-backend";
import './Home.styles.css';
import MenuButton from "../../components/MenuButton/MenuButton";
import InputTxt from "../../components/InputTxt/InputTxt";
import Main from "../../components/Main/main";
import { Loading, Close, Search, Activity, Automation, Filter, Help, Integrate, Notification, People, Settings, Share, Tools } from '../../assets/svg/'



const Home = () => {


    const [searchInput, setSearchInput] = useState('')
    const [searchIcon, setSearchIcon] = useState(<Search />)
    const [searchClick, setSearchClick] = useState('')


    const handleSearchImput = (i) => {

        const inputValue = i.target.value
        setSearchInput(inputValue)
        setSearchClick(inputValue)
    }

    const handleInputButton = () => {

        if (searchInput) {

            setSearchClick('')
            setSearchInput('')
        }
    }

    useEffect(() => {

        if (searchInput) {

            setSearchIcon(<Loading />)

            const delayDebounceFn = setTimeout(() => setSearchIcon(<Close />), 1000)

            return () => clearTimeout(delayDebounceFn)

        }
        if (!searchInput) {
            setSearchIcon(<Search />)
        }
    }, [searchInput])

    return (
        <DndProvider backend={HTML5Backend}>
            <header className="divider--bottom">
                <div className="header__1 divider--bottom">
                    <div className="header__wrapper">
                        <h1 className="header__logo">crudfy</h1>
                    </div>
                    <div className="header__wrapper">
                        <MenuButton src={<Share />} >
                            Compartilhar
                        </MenuButton>
                        <MenuButton src={<People />} >
                            Pessoas
                        </MenuButton>
                        <MenuButton src={<Activity />} />
                        <MenuButton src={<Notification />} />
                        <MenuButton src={<Help />} />
                        <div className="header__account__wrapper">
                            <div className="header__account">
                                <span>Jo??o.dev</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="header__2">
                    <div className="header__wrapper">

                    </div>
                    <div className="header__wrapper ">
                        <div className="header__wrapper ">
                            <InputTxt value={searchClick} onClick={() => handleInputButton()} src={searchIcon} onChange={(i) => { handleSearchImput(i) }} type="Search" placeholder="Procurar cards" />
                            <MenuButton src={<Filter />} />
                        </div>
                        <div className="header__wrapper divider--left">
                            <MenuButton src={<Automation />} >
                                Automatizar
                            </MenuButton>
                            <MenuButton src={<Integrate />} >
                                Integrar
                            </MenuButton>
                            <MenuButton src={<Tools />} />
                            <MenuButton src={<Settings />} />
                        </div>
                    </div>
                </div>
            </header>
            <Main searchInput={searchInput} />

        </DndProvider>
    )
}

export default Home;