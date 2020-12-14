import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
        <title>Prog. De Elite</title>
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>

      <div class="container my-4 " /* style={{backgroundColor: '#FFEE00'}} */>
         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <Link href="/_app" >
                  <img class="img-responsive" width="250"  alt="100x100" src="/logo_prog.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/>
               </Link>
            </div>
         </div>
         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <p class="my-4">VOU TE AJUDAR A CONSEGUIR UM <br></br><span class="font-weight-bold" style={{backgroundColor: ''}}>TOP JOB</span> E SATISFAÇÃO FINANCEIRA!</p>
               <Link href="https://www.youtube.com/channel/UCsEdUK6zNAA95aGlqoBOclQ" >
                  <img class="rounded-circle img-responsive" width="100" alt="100x100" src="/perfil.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/>
               </Link>
            </div>
         </div>
         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <Link href="https://www.youtube.com/channel/UCsEdUK6zNAA95aGlqoBOclQ" >
                  <img class="img-responsive" width="250"  alt="100x100" src="/banner_teaser.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/>
               </Link>
            </div>
         </div>
         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <Link href="https://www.youtube.com/channel/UCsEdUK6zNAA95aGlqoBOclQ" ><img class="img-responsive" width="200" alt="46x46" src="/youtube_icon.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
            </div>
         </div>
         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <div style={{position: 'relative', width: '100%', paddingBottom: '56.25%'}}>
                  <iframe allowfullscreen style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0',}}
                     src="https://www.youtube.com/embed/3Vp6i47MZys">
                  </iframe>
               </div>
            </div>
         </div>
         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <Link href="https://www.instagram.com/progdeelite/" ><img class="img-responsive" width="46" alt="46x46" src="/insta_icon.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://twitter.com/progdeelite" ><img class="img-responsive" width="46" alt="46x46" src="/twitter_icon.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://web.facebook.com/progdeelite" ><img class="img-responsive" width="46" alt="46x46" src="/face_icon.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               {/* <Link href="https://www.youtube.com/channel/UCsEdUK6zNAA95aGlqoBOclQ" ><img class="img-responsive" width="200" alt="46x46" src="/youtube_icon.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link> */}
            </div>
         </div>
      </div>

    </div>
  )
}