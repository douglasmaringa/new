import React,{useState} from "react"
import './App.css';
import axios from "axios"

function App() {
  const[title,setTitle]= useState("")
  const[result,setResult]=useState([])
  const[result1,setResult1]=useState([])

  const search = async () =>{
    try{
     const res = await axios.get("https://api.github.com/search/repositories?q=react")
     setResult(res.data.items)
    }catch(err)
    {
      console.log(err)
    }
  }

  const search1 = async () =>{
    try{
     const res = await axios.get("https://api.github.com/search/users?q=douglasmaringa")
     setResult1(res.data.items)
    }catch(err)
    {
      console.log(err)
    }
  }
  console.log(result1)
  return (
    <div className="App">
      <div className="center">
      <input type="text" placeholder="search by name" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
    <button onClick={search}>Search</button>

    
    <div className="card">
      {
        result.map(m=>(
          <div>
            {m.name}
            <br/>
            {m.full_name}
            </div>
        ))
      }
    </div>
      </div>

      <div className="center">
      <input type="text" placeholder="search by username" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
    <button onClick={search1}>Search</button>

    
    <div className="card">
      {
        result1.map(m=>(
          <div>
            {m.login}
            <br/>
            <img src={m.avatar_url} alt="" width="150px" height="130px"/>
            </div>
        ))
      }
    </div>
      </div>
    
    </div>
  );
}

export default App;
