import React, { useState } from 'react'
import Home from './components/Home'

const App = () => {
  const [color, setcolor] = useState("olive")
  return (
    <div className=' w-full h-screen duration-200' 
    style={{backgroundColor:color}}
    >
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className=' flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2  rounded-lg' 
        style={{backgroundColor:"color"}}>
          <button 
          onClick={()=>setcolor("red")}
          className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor:"Red"}}>Red</button>
          <button onClick={()=>setcolor("blue")}className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor:"Blue"}}>Blue</button>
          <button onClick={()=>setcolor("green")}className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor:"Green"}}>Green</button>
          <button onClick={()=>setcolor("yellow")}  className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>setcolor("pink")} className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor:"Pink"}}>Pink</button>
          <button onClick={()=>setcolor("white")} className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor:"White"}}>white</button>
          <button onClick={()=>setcolor("orange")} className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor:"Orange"}}>Orange</button>
          <button onClick={()=>setcolor("olive")} className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor:"Olive"}}>Olive</button>
        </div>
      </div>
      <Home/>
    </div>
    
  )
}

export default App