import PropTypes from "prop-types";

export const FirstApp = ({
    // config: {
    //     title = 'No hay título',
    //     subTitle = 'No hay subtítulo',
    //     // otros parámetros con valores predeterminados
    // }
    title = 'No hay título', subTitle = 'No hay subtítulo', name = 'No hay nombre'
 }) => {
    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <p>{subTitle}</p>
            <p>{name}</p>
            <hr />
        </>
    )
}

FirstApp.propTypes = {
    name: PropTypes.string,
    subTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

// FirstApp.propTypes = {    
//     config: PropTypes.shape({
//         title: PropTypes.string,
//         subTitle: PropTypes.string,
//         // otros parámetros con sus tipos
//     })
// }