export const ItemList = () => {
    return (
        <div className="item">
            <table>
                <tr>
                    <td >
                        <div className="info">
                            <label htmlFor="nombre">
                                Nombre:
                            </label>
                            <p className="nombre">nombre</p>
                        </div>
                    </td>
                    <td>
                        <div className="info">
                            <label htmlFor="estado">
                                Estado:
                            </label>
                            <p className="estado">estado</p>
                        </div>
                    </td>
                    <td>
                        <div className="info last-column">
                            <label htmlFor="ingreso">
                                Ingreso:
                            </label>
                            <p className="ingreso">Ingreso</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="info">
                            <label htmlFor="edad">
                                Edad:
                            </label>
                            <p className="edad">Edad</p>
                        </div>
                    </td>
                    <td>
                        <div className="info">
                            <label htmlFor="sexo">
                                Sexo:
                            </label>
                            <p className="sexo">Sexo</p>
                        </div></td>
                    <td>
                        <div className="info last-column">
                            <label htmlFor="diagnostico">
                                Diagnóstico:
                            </label>
                            <p className="diagnostico">Diagnóstico</p>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default ItemList
