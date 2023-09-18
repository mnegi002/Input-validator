import { useState } from "react"
import styled from "styled-components"
import ErrorModal from "./ErrorModal"
const Card = styled.div`
height:15rem;
margin-top:20px;
width:50%;
background-color: antiquewhite;
box-shadow: 0 2px 8px rgba(0,0,0,0.26);
border-radius: 10px;
font: inherit;
 display: block;

border: 1px solid #ccc; padding: 0.15rem;
margin-bottom: 0.5rem;
padding-left:20px;
 `
const Form = styled.form`
`
const Label = styled.label`
display: block;
font-weight: bold;
// margin-bottom: 1rem;
`
const Input = styled.input`
margin: 0.5em;
padding: 1rem;
height:auto;
width: 90%;
min-width: auto;
display: block;
font-weight: bold;
margin-bottom: 0.6rem;
&:focus{
outline: none;
border-color: #4f005f;
}
`
const Button = styled.button`
margin-top:10px;
font: inherit;
border: 1px solid #4f005f;
background: #4f005f;
color: white;
padding: 0.25rem 1rem;
  cursor: pointer;
&:hover,
:active {
  background: #741188;
  border-color: #741188;
}
&:focus {
  outline: none;
}
`
const AddUser = (props)=>{
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [error,setError] = useState()
    const nameHandler = (event)=>{
        setName(event.target.value)

    }

    const ageHandler = (event)=>{
        setAge(event.target.value)

    }
    
    const addUserHandler = (event)=>{
        event.preventDefault()
        if (name.trim().length === 0 || age.trim().length === 0){
            setError({
                title: 'Invalid input',
                message : 'Please enter a valid name & age (non-empty values) ',
            })
            return
        }
        if (+age<1){
            setError({
                title: 'Invalid age',
                message : 'Please enter a valid age (greater than 0 ) ',
            })
        }
        props.onAddUser(name,age)
        setName('')
        setAge('')
    }
    
    const ErrorHandler = () =>{
        setError(null)
    }
   
    return (
        <>
        {error &&
        <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler}/>}
        <Card>
        <Form onSubmit={addUserHandler}>
        <Label htmlFor="username">UserName</Label>
        <Input placeholder="Enter Name"
        id="username"
        type="text"
        value={name}
        onChange={nameHandler}/>
        <Label htmlFor="age">Age</Label>
        <Input placeholder="Enter Age"
        id="age"
        type="number"
        value={age}
        onChange={ageHandler}/>
        <Button type="submit"
        onClick={props.onConfirm} >Add User</Button>
        </Form>
        </Card>
        
        </>
    )
}

export default AddUser