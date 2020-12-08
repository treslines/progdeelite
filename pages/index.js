import Link from 'next/link'

function home(){
   return (
      <div>
         <h1>Programador de Elite: Home</h1>
         <Link href="/sobre">
            <a>Go to Sobre</a>
         </Link>
      </div>
   )
}


export default home