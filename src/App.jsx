
import './App.css'

function App() {
  function Changecol(param){
    document.body.style.backgroundColor = param;
  }

  return (
    <>
      <div id='Plane'>
        <button onClick={()=> Changecol("white")}>White</button>
        <button onClick={()=>Changecol("black")}>Dark</button>
        <button onClick={()=>Changecol("Yellow")}>Yellow</button>
        <button onClick={()=>Changecol("Green")}>Green</button>
        <button onClick={()=>Changecol("Blue")}>Blue</button>
      </div>
    </>
  )
}

export default App
