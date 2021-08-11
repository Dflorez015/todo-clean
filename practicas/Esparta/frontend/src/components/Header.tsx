import { IconContext } from 'react-icons/lib'
import { MdHome } from 'react-icons/md'
import espartaIcon from '../assets/icons/espartaIcon.svg'
import title from '../assets/icons/title.svg'

export default function Header() {

    return (
        <header>
            <nav className="menu">
                <li>
                    {/* Home icon*/}
                    <a href="/">
                        <IconContext.Provider value={{ className: "iconHome" }}>
                            <MdHome />
                        </IconContext.Provider>
                    </a>
                </li>
                <li className="title">
                    <img src={espartaIcon} alt="" />
                    <img src={title} alt="" />
                </li>
                <li>opciones</li>
            </nav>
        </header>
    )
}
