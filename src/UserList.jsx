import "./index.css"

import styled from "styled-components"

const Card = styled.div`
margin: 2rem auto;
height:auto;

background-color: antiquewhite;
box-shadow: 0 2px 8px rgba(0,0,0,0.26);
border-radius: 10px;
font: inherit;
display: block;
width: 50%;
max-width:auto;
min-width:auto;
border: 1px solid #ccc;
padding: 0.15rem;

padding-left:20px;
  `
const List = styled.ul`
list-style: none;
padding: 1rem;
`
const ListItem = styled.li`
border: 1px solid #ccc;
margin: 0.5rem 0;
padding: 0.5rem;
`
const UserList = (props)=>{
    return (
        <>
        <Card>
        <List>
        {props.users.map((user) => (
            <ListItem key={user.id}>
                {user.name} is {user.age} years old.
            </ListItem>
        ))}
        </List>
        </Card>
        </>
    )
}

export default UserList