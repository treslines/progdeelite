import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

function Sobre(){
   return (
      <div class="container my-4 " style={{backgroundColor: '#FFEE00'}}>
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
               
               <p class="my-4">VOU TE AJUDAR A CONSEGUIR UM <br></br><span class="font-weight-bold" style={{backgroundColor: ''}}>TOP JOB</span> E SATISFAÇÃO FINANCEIRA!</p>
            </div>
         </div>
         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <Link href="https://www.instagram.com/progdeelite/" ><img class="img-responsive" width="46" alt="46x46" src="/insta_icon.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://twitter.com/progdeelite" ><img class="img-responsive" width="46" alt="46x46" src="/twitter_icon.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://web.facebook.com/progdeelite" ><img class="img-responsive" width="46" alt="46x46" src="/face_icon.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://www.youtube.com/channel/UCsEdUK6zNAA95aGlqoBOclQ" ><img class="img-responsive" width="56" alt="46x46" src="/youtube_icon.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
            </div>
         </div>
      </div>

   )
}


export default Sobre