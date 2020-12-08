import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home(){
   return (
      <div>
         <h1>Programador de Elite: Home</h1>
         <Link href="/sobre">
            <a>Go to Sobre</a>
         </Link>

         <div class="card" style={{width: 18 + 'rem'}}>
            <div class="card-body">
               <h5 class="card-title">Card title</h5>
               <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="card-link">Card link</a>
               <a href="#" class="card-link">Another link</a>
            </div>
         </div>

      </div>
   )
}


export default Home