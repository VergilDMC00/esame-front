import axios from 'axios';
import { useState, useEffect} from 'react'
import CommessTable from './CommessTable';
import UserTable from './UserTable';

function App() {

  const [userList,setUserList]=useState([])
  const [commessList,setCommessList]=useState([])
  const [showTable,setShowTable]=useState("")
  let show = () => {
    if(userList&&showTable=="USER")
    {
      return(
        <UserTable usersList={userList} />
      )
    }
    else
    {
      if(commessList&&showTable=="COMMESS")
      {
        return(
          <CommessTable commessList={commessList} />
        )
      }
      else
      {
        return(<div></div>)
      }
    }
  } 


  useState(()=>{console.log("userList:",userList)},[userList])
  useState(()=>{console.log("commessList:",commessList)},[commessList])
  useState(()=>{console.log("showTable:",showTable); show()},[showTable])

  const getUser = () =>{
    const {data:list}=axios.get('https://zenithar-dev.herokuapp.com/users', {
      headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGIzOTRkNzA4OWY5MDAxNmRiYzlkMSIsImlhdCI6MTY1MzI5MTM4Mn0.z11A1VUEDgMQFVfVpNuRSeaVEAV0uLmsYoqLPhT-yUs'
    }
  });
  setUserList(list)
  setShowTable("USER")
  show()
}


const getCommess = () =>{
  const {data:list}=axios.get('https://zenithar-dev.herokuapp.com/orders', {
    headers: {
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGIzOTRkNzA4OWY5MDAxNmRiYzlkMSIsImlhdCI6MTY1MzI5MTM4Mn0.z11A1VUEDgMQFVfVpNuRSeaVEAV0uLmsYoqLPhT-yUs'
  }
});
setCommessList(list)
setShowTable("COMMESS")
show()
}


  return(
      <div>
        <button onClick={getUser}>USER</button>
        <button onClick={getCommess}>COMMESSE</button>
      </div>
    )
}
export default App;