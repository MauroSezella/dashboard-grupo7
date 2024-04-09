
function CategoriesList(props){
    return(
        <>
            <tr>
                <td>{props.categories.nombre}</td>
                <td>{props.categories.cantidad}</td>
            </tr>
        </>
    )
}
export default CategoriesList