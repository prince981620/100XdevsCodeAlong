// context API


import { useContext, useState } from "react"
import { CountContext } from "./context";

function App(){
  const [count,setCount] = useState(0);
  // wrap anyone that wants to use the teleported value inside a provide
  return (
    <div>
      <CountContext.Provider value={[count,setCount]}>
        <Count setCount={setCount}/> {/* No need to pass count or setCount as props here */}
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}
function CountRenderer(){
  const [count] = useContext(CountContext);

  return <div>
    {count}
  </div>
}
function Buttons(){
  const [count,setCount] = useContext(CountContext);

  return <div>
    <button onClick={()=>{
      setCount(count+1);
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1);
    }}>Decrease</button>
  </div>
}

export default App;