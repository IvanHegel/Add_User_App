import styled from "styled-components";
const Div = styled.div`
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
    margin: 5% 20%;
`
function Card(props){
    

    return (
<Div> {props.children}</Div>
    )
}


export default Card;