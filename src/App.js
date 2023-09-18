import AddUser from "./AddUser";
import UserList from "./UserList"
import "./index.css"
import { useState } from "react";
function App() {
  const [userList,setUserList] = useState([])
  const addUserHandler = (uName,uAge) =>{
    setUserList((prevList)=>{
      return [
        ...prevList ,
      {name:uName , age : uAge , id:Math.random().toString()}]
    })
  }  
  return (
    <div className="container">
     <AddUser onAddUser={addUserHandler}/>
     <UserList users = {userList}/>
         
    </div>
  );
}

export default App;
