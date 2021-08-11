import ItemList from "./ItemList"
import FormAddApplicants from "./FormAddApplicants";
import { useEffect, useState } from "react"

// Modal y asignación del elemento app
import Modal from "react-modal";
Modal.setAppElement('#root')

// Interfaz para el componente Card
interface Icard {
    props: {
        path: string
        title: string
        addbtn: boolean
    }
}


/*Dirección de la API para consultar candidatos */
const Api = process.env.REACT_APP_API


const Card: React.FC<Icard> = ({ props }) => {

    /*
    * Obtiene la lista de candidatosTMO
     */
    const getApplicantsTMO = async () => {
        /*  await fetch(`${Api}/candidatos`, {
            method: "GET",
              headers: {
                  'Content-Type': 'application/json'
              },
        }).then(res => res)
          .then(data => data)
          .catch(err => err)*/
        console.log(Api);

    }
    useEffect(() => {
        getApplicantsTMO()
    }, [])


    /*
    *Hook que abre y cierra el Modal de agregar/buscar candidato
     */
    const [modal, setModal] = useState<boolean>(false)


    return (
        <div className="card-container">
            <div className="card-tag">
                {/* Rendereza un botón para agregar candidato 
                    si está en la ruta de CandidatosTMO*/}
                {(props.addbtn && props.path === "candidatos") &&
                    <button className="add-applicant" onClick={() => setModal(!modal)}>
                        AGREGAR CANDIDATO
                    </button>
                }

                <div className="tag">
                    {props.title}
                </div>

            </div>
            <div className="card-content">
                {/*map con la lista de items*/}
                <ItemList />
            </div>

            {/*Modal Agregar y Buscar candidatos*/}
            <Modal
                style={
                    {
                        overlay: {
                            backgroundColor: "none" // No se cambia de color el fondo
                        }
                    }
                }
                className="modal"
                isOpen={modal}
                onRequestClose={() => { setModal(!modal) }}
            >

                {/*Formulario agregar/buscar candidatos */}
                <FormAddApplicants />

            </Modal>
        </div>
    )
}

export default Card
