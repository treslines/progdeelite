import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

function Sobre(){
   return (
      <div class="container my-4" style={{backgroundColor: '#FFEE00'}}>
         <div class="row text-center">
            <div class="col-md-6 mb-4">
            <Link href="/" >
               <img class="img-responsive" width="250"  alt="100x100" src="/logo.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/>
               </Link>
            </div>
         </div>
         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <img class="rounded-circle img-responsive" width="100" alt="100x100" src="/perfil.png" data-holder-rendered="true" />
               <p class="my-4">VOU TE AJUDAR A CONSEGUIR UM <span class="font-weight-bold" style={{backgroundColor: 'yellow'}}>TOP JOB</span> E SATISFAÇÃO FINANCEIRA!</p>
            </div>
         </div>

         <div>
            <Link href="/">
               <a>Go to Home</a>
            </Link>
         </div>

      </div>

   )
}


export default Sobre