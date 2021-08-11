import React, { useState } from "react"
// Interfaz para el formulario de candidatos
interface IformApplicant {
    nombre: string
    edad: string
    estado: string
    sexo: string
    tipoId: string
    diag: string
    ID?: string
}


/*Formulario vacio */
const emptyFormApplicant = {
    nombre: "",
    edad: "",
    estado: "",
    sexo: "",
    tipoId: "",
    diag: "",
    ID: ""
}

/*Modelado para eventos Form de React */
type FormElement = React.FormEvent<HTMLFormElement>

/*Interfaz de la lista de tipo de documento */
interface IidType {
    id_type: string
    value: string
}

/* Opciones del selector de tipo de documento */
const idType: IidType[] = [
    { id_type: "CC", value: "Cédula de ciudadanía" },
    { id_type: "TI", value: "Tarjeta de identidad" },
    { id_type: "RC", value: "Registro civil" },
    { id_type: "PE", value: "P. E. de permanencia" }]


const FormAddApplicants = () => {
    /*
    *Hooks Agregar candidato form
    */
    const [formModal, setFormModal] = useState<IformApplicant>(emptyFormApplicant)
    /*
    * handle agregar candidato
    * Verifica los inputs del formulario
     */
    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value, id } = e.target
        if (value.length < 50) {
            const newData = { ...formModal }

            switch (id) {
                case "nombre":
                    newData.nombre = value
                    setFormModal(newData)
                    break;

                case "edad":
                    if (parseInt(value) <= 130 || value === "") {
                        newData.edad = value.match(/[0-9]*/)![0]
                        setFormModal(newData)
                    }
                    break;

                case "sexo":
                    newData.sexo = value
                    setFormModal(newData)
                    break;

                case "diag":
                    newData.diag = value
                    setFormModal(newData)
                    break;

                case "ID":
                    if (value.length <= 11) {
                        newData.ID = value.match(/[0-9]*/)![0]
                        setFormModal(newData)
                    }
                    break;

                case "tipoId":
                    newData.tipoId = value
                    setFormModal(newData)
                    break;

                default:
                    break;
            }
        }
    }


    /*
    * Submit agregar candidato
    * Envía a la API la información del candidato 
     */
    const addApplicant = (e: FormElement) => {
        e.preventDefault()
        console.log(formModal)

    }

    const searchApplicant = (e: FormElement) => {
        e.preventDefault()
        console.log(formModal)

    }

    return (
        <div className="form-add-applicant">

            <div className="form-search">
                <h4>AGREGAR CANDIDATO</h4>

                <form onSubmit={searchApplicant}>
                    <select name="tipoId" id="tipoId"
                        onChange={handle}
                        required>

                        {/*Tipos de documentos */}
                        <option value="">Tipo de documento</option>
                        {idType.map((type: IidType) => (
                            <option key={type.id_type} value={type.id_type}>{type.value}</option>
                        ))}
                    </select>

                    <input type="text" placeholder="identificación" name="ID" id="ID"
                        value={formModal.ID}
                        onChange={handle}
                        required
                    />
                    <button type="submit" className="btn-form-applicant"> Buscar </button>
                </form>
            </div>

            <form onSubmit={addApplicant}>
                <div className="form-add">
                    <div className="form-add-nombre">
                        <label htmlFor="nombre">Nombre:</label> <br />
                        <input type="text" name="nombre" id="nombre"
                            value={formModal.nombre}
                            onChange={handle}
                            required
                        />
                    </div>

                    <div className="form-add-info">
                        <div className="form-add-edad">
                            <label htmlFor="edad">Edad:</label>
                            <input type="text" name="edad" id="edad"
                                value={formModal.edad}
                                onChange={handle}
                                required
                            />
                        </div>

                        <div className="form-add-sexo">
                            <label htmlFor="sexo">Sexo:</label>
                            <input type="text" name="sexo" id="sexo"
                                value={formModal.sexo}
                                onChange={handle}
                                required
                            />
                        </div>

                        <div className="form-add-diag">
                            <label htmlFor="diag">Diagnóstico:</label>
                            <input type="text" name="diag" id="diag"
                                value={formModal.diag}
                                onChange={handle}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn-form-applicant">Agregar</button>
                </div>
            </form>

        </div>
    )
}

export default FormAddApplicants