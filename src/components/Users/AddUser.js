import Card from "../UI/Card";
import styled from "styled-components";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const FormControl=  styled.div`
 
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem ;
  


 label {
  display: flex;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

 input {
  font: inherit;
  display: block;
  width: 90%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;
}

&:focus {
  outline: none;
  border-color: #4f005f;
}
`
function AddUser(props) {
const [enteredUsername, setEnteredUsername] = useState("");  
const [enteredAge, setEnteredAge] = useState("");
const [error, setError]= useState("");

const AddUserHandler =(event) => {
    event.preventDefault();
if(enteredUsername.trim().lenght === 0 || enteredAge.trim().length === 0){
    setError ({
        title: "Invalid input",
        massage:"Please enter a valid name  and age (non-empty values)."

    })
    return ;
}
if(+enteredAge < 1){
    setError ({
        title: "Invalid age",
        massage:"Please enter a valid age (> 0)."

    })
    return;
}

    props.onAddUser(enteredUsername, enteredAge);
   setEnteredUsername("");
   setEnteredAge("");
};
const userNameChangeHandler = (event)=> {
    setEnteredUsername(event.target.value);
    
};
const userAgeChangeHandler = (event)=> {
    setEnteredAge(event.target.value);
    
};

const ErrorHandler = ()=> {
    setError(null);
}
    return (
        <div>
        {error && <ErrorModal title={error.title} massage={error.massage} onConfirm={ErrorHandler}/>}
        <Card> 
        <form onSubmit={AddUserHandler}>
        <FormControl>
            <label htmlFor="username"  > Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={userNameChangeHandler}/>
            <label htmlFor="age"> Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={userAgeChangeHandler}/>
           
            <Button type="submit">Add User</Button>
            </FormControl>
        </form>
        
        </Card>
        </div>
    )
}


export default AddUser;