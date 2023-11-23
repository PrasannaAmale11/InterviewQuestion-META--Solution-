
import './App.css'
import ChangetoDo from './compo/ChangetoDo'

function App() {
 

  return (
    <>
    <h1 className="underline text-white text-4xl text-center p-4">
      This Question was asked In META interview
      <span>(this is Solution)</span>
    </h1>

    <p className='text-white text-center '>Basically you have to make two boxes with any label and checkbox and in middle two buttons which will move the checkd items from left box to right and vice versa </p>
      <ChangetoDo/>
    </>
  )
}

export default App
