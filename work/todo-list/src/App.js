import React, { useReducer, useState } from 'react'
import './App.css';


const ListItem = ({text, dispath, id })=> {
return (
  <div>
    <input type="checkbox"/>
    <span>{text}</span>
    <button onClick={()=> dispath({type: 'delete', payload : id})}>delete</button>
  </div>
)
}
const List = ({state, dispath})=> {
  return state.map(item=><ListItem key={item.id} text={item.listText} dispath={dispath} id={item.id}/>)
}

const Form = ({onChange, onClick})=> {
  return (
    <>
      <input 
      type="text"
      placeholder="you todo"
      onChange={onChange}
      defaultValue=''
      />
      <button onClick={onClick}>Add</button>
    </>
  )
}

const todoReducer = (state, action)=> {
  switch (action.type){
    case 'add':
      return [
        ...state,
        {
          id: new Date().toLocaleString(),
          listText: action.payload,
          checked: false
        }
      ]
     case 'delete':
      return state.filter(item => item.id !== action.payload);

     default :
    return state  
  }
}

function App() {
  const [state, dispath] = useReducer(todoReducer,[])
  const [input, changeInput] = useState(null)
  console.log(state)
  console.log(input)
  return (
    <>
    <div className="App">
      <h1 > My todo</h1>
      <Form 
      onClick={()=> dispath({type:'add', payload: input})}
      onChange={(e)=>{
        const value = e.target.value
        changeInput(value)}}
        />
      <br/>
      <br/>
      <List state={state} dispath={dispath}/>
    </div>
    </>
    
  );
}

export default App;
