import styled from "styled-components";
const ButtonB = styled.button` 
    
  font: inherit;
 
  border-radius: 25px;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;


&:hover,
&:active {
  background: #741188;
  border-color: #741188;
}

&:focus {
  outline: none;
}`


function Button(props){

    
    return (
<ButtonB onClick={props.onClick}>
    {props.children}
</ButtonB>
    )
}


export default Button;