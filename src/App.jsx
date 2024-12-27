import { useState } from 'react'

import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
const [todo, setTodo] = useState("")
const [todos, setTodos] = useState([])

const handleAdd = () =>{
  setTodos([...todos,{id:uuidv4(),todo, isCompleted:false}])
  setTodo("")
  console.log(todos)
}
const handleEdit = (e, id) =>{
let t = todos.filter(i=>{
  return i.id === id
})
setTodo(t[0].todo)
let newTodos = todos.filter(item =>{
  return item.id!==id
})
setTodos(newTodos)
}
const handleDelete = (e, id) =>{
  let newTodos = todos.filter(item =>{
    return item.id!==id
  })
  setTodos(newTodos)
}
const handleChange = (e) =>{
setTodo(e.target.value)
// console.log(todo)
}

 
const handleCheckbox = (e) => {
//  console.log(e,e.target,e.target.name)
 let id = e.target.name;

 let index = todos.findIndex(item=>{
  return item.id === id;
 })

 let newTodos = [...todos];
 newTodos[index].isCompleted = !newTodos[index].isCompleted;
 setTodos(newTodos);
}



  return (
    <>
    <Navbar />
      <div className="container mx-auto bg-violet-100 p-3 rounded-xl min-h-[80vh]">
        <div className="add-Todo">
          <h2 className="font-bold mt-5">Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className="rounded-lg w-1/2" />
          <button onClick={handleAdd} className="mx-5 bg-purple-800 hover:bg-purple-950 text-sm px-2 py-1 text-white rounded-lg font-bold">Save</button>
        </div>
        <div className=" font-bold">

       <h2> Your Todos</h2>
        </div>
        <div className="todos ">
          {todos.length === 0 && <div className='m-2'>No Todos to Display</div> }
          {todos.map(item=>{
            return <div key={item.id} className="todo flex my-3 justify-between w-1/4">
              <div className="flex gap-5">

              <input onChange={handleCheckbox} type="checkbox" name={item.id} value={item.isCompleted} id="" />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              </div>
            <div className="buttons">
            
          <button onClick={(e)=>handleEdit(e,item.id)} className="mx-2 bg-purple-800 hover:bg-purple-950 text-sm px-2 py-1 text-white rounded-lg font-bold">Edit</button>
          <button onClick={(e)=>handleDelete(e,item.id)} className="mx-2 bg-purple-800 hover:bg-purple-950 text-sm px-2 py-1 text-white rounded-lg font-bold">Delete</button>
              
            </div>
          </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
