import React,{useState} from "react"
import './App.css';
import axios from "axios"
import Card from "./components/Card"

function App() {
  const[title,setTitle]= useState("")
  const[result,setResult]=useState([])
  const[load,setLoad]= useState(false)
  const[err,setErr]= useState("")

  const search = async () =>{
    if(title){

      setLoad(true)
    try{
     const res = await axios.get(`https://api.github.com/search/repositories?q=${title}`)
     setResult(res.data.items)
     setLoad(false)
     setErr("")
    }catch(err)
    {
      console.log(err)
    }


    }else{
      setErr("please enter name")
    }
    
  }

  console.log(result)
 
  return (
    <div className="App">
      <div className="center">
      <input type="text" placeholder="type repo name" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
    <button onClick={search}>Search</button>
      <br/>
      <h1>{err}</h1>
    {
      load?
      (
      <>
      <h1>loading...</h1>
      </>
      ):
      (
      <>
        <div className="card">
      {
        result.map(m=>(
         <div>
           <Card image={m.owner.avatar_url} name={m.name} fullname={m.full_name} forks={m.forks} open={m.open_issues} stars={m.stargazers_count} contributors={m.contributors_url}/>
          </div>
        ))
      }
    </div>
      </>
      )
    }
    
      </div>

      
    
    </div>
  );
}

export default App;
