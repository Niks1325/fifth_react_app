import { useState } from "react";

function App() {
  return (
    <>
      <h1>Stateful List</h1>
      <ListDemo/>
    </>
  );
   
}

function ListDemo(){
  let [list,setList]=useState(["delhi"]);

  let addItamAction=()=>{
    let newList=[...list,"mumbai"];
    console.log(newList);
    setList(newList);
  };
 
    return(
      <>
        <input type="button" value="Add New Item" onClick={addItamAction} />

        {list.map((item)=> (<h1>hello {item}</h1>) )}
      </>
    );
}

export default App;