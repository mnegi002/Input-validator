import classes from "./ErrorModal.module.css"
import styled from "styled-components"
const Card = styled.div`
height:14rem;
margin-top:20px;
background-color: antiquewhite;
box-shadow: 0 2px 8px rgba(0,0,0,0.26);
border-radius: 10px;
font: inherit;
display: block;
width: 40%;

border: 1px solid #ccc;
padding: 0.15rem;
margin-bottom: 0.5rem;
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
const ErrorModal = (props)=>{
    return (
        <>
        <div className={classes.backdrop} onClick={props.onConfirm}>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>
                    {props.message}
                </p>
            </div>
            <footer className={classes.actions}>
                <Button type="button" onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
        </div>
        </>
    )
}
export default ErrorModal