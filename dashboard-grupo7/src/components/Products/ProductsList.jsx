
function ProductsList(props){
    return(
        <>
            <tr>
                <td>{props.products.id}</td>
                <td>{props.products.nombre}</td>
                <td>{props.products.descripcion}</td>
                <td>{props.products.categoria.nombre}</td>
            </tr>
        </>
    )
}
export default ProductsList