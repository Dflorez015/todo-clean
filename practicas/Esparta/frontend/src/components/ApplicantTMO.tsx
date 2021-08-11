import BackButton from "./BackButton"
import Card from "./Card"

/*Interfaz del componente ApplicantTMO */
interface IApplicantTMO {
    path: string
    title: string
    addbtn: boolean
}


export default function ApplicantTMO() {
    /* Esta información ayuda a que el componente 
    Card renderice los elementos de ApplicantTMO*/
    const propsApplicantTMO: IApplicantTMO = {
        path: "candidatos",
        title: "Candidatos TMO",
        addbtn: true
    }

    return (
        <div className="contentTMO">
            <BackButton />
            <Card props={propsApplicantTMO}></Card>
        </div>
    )
}
