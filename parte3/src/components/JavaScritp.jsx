export const JavaScritp = (props) => {

  // props es un objeto que contiene todas las propiedades que le pasamos al componente
  return(
    <p style={{color: props.color}}>{props.info}</p>
   
    
  )
};
