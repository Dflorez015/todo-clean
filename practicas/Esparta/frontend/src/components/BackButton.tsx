import { MdChevronLeft } from 'react-icons/md'
import { IconContext } from "react-icons/lib"

const BackButton = () => {
    /*
    * Redirecciona a una página anterior de la actual
    */
    const backAction = () => {
        window.history.back()
    }
    return (
        <button className="backBtn" onClick={backAction}>
            <div className="btn">
                <IconContext.Provider value={{ className: "backArrow" }}>
                    <MdChevronLeft />
                </IconContext.Provider>
                <p>Volver</p>
            </div>
        </button>
    )
}

export default BackButton
