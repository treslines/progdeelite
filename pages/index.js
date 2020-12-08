import { useState } from 'react'

function home(){
   return (
      <div>
         <h1>Home</h1>
         <AddContador />
      </div>
   )
}

function AddContador(){
   const [contador,setContador] = useState(1)

   function contar(){
      setContador(contador+1)
   }

   return (
      <div>
         <div>{contador}</div>
         <button onClick={contar}>Contar</button>
      </div>
   )
}


export default home