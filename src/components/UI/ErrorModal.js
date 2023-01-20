import Card from "./Card";
import Button from "./Button";
import styled from "styled-components";

const ModalComponent=styled.div` 
.header {
  background: #4f005f;
  padding: 1rem;
  border-radius: 10px ;
}

 .header h2 {
  margin: 0;
  color: white;
}

.content {
  padding: 1rem;
}

.footer {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
}
` 
const Backdropdiv = styled.div`

  position:fixed ;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);

`
const CardB = styled.div`

    position: fixed ;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
  .modal {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
 
`
function ErrorModal(props){
    return (
        <div>
       
        <Backdropdiv onClick={props.onConfirm}/>
       
<CardB  >
<Card>
<ModalComponent>
    <header className="header" >
        <h2>{props.title}</h2>
    </header>
    <div className="content">
    <p>{props.massage}</p>
    </div>
    <footer className="footer">
        <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
    </ModalComponent>
    </Card>
</CardB>
 
 </div>
    )
}

export default ErrorModal;