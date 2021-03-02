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
        <link
            rel="preload"
            href="/fonts/Anton-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/LuckiestGuy-Regular.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>

      <div class="container my-4 " /* style={{backgroundColor: '#FFEE00'}} */>
         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <Link href="/" >
                  <img class="img-responsive" width="250"  alt="100x100" src="/logo_prog.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/>
               </Link>
            </div>
         </div>

         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <Link href="https://tinyurl.com/tprodel" >
                  <img class="img-responsive" width="250"  alt="100x100" src="/banner_teaser.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/>
               </Link>
            </div>
         </div>

         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <p class="my-4" >VOU TE AJUDAR A<br></br> CONSEGUIR UM <span style={{backgroundColor: '#FFEE00', fontFamily: 'luckiestguy'}}>TOP JOB</span>!<br></br><br></br><span style={{fontFamily: 'luckiestguy'}}>ME SEGUE PARA:</span><br></br>OPORTUNIDADES DE EMPREGO,<br></br>
               TECNOLOGIA, MACETES & TRUQUES!</p>
               <Link href="/profile" >
                  <img class="rounded-circle img-responsive" width="100" alt="100x100" src="/perfil.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/>
               </Link>
            </div>
         </div>
         

         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <p class="my-4" style={{}}>
                  VOCÊ É DA <span class="font-weight-normal" style={{backgroundColor: '', fontFamily: 'luckiestguy'}}>
                  ÁREA DE  TI?</span><br></br>
                  EU QUERO TE CONHECER!<br></br>
                  <span class="font-weight-normal" style={{backgroundColor: '#FFEE00', fontFamily: 'luckiestguy'}}>
                  COMO TE ENCONTRO?</span><br></br>
               </p>
               <img class="img-responsive" width="25"  alt="50x50" src="/site_arrow_down.png" data-holder-rendered="true"/>
            </div>
         </div>

         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <Link href="https://tinyurl.com/tprodel" ><img class="img-responsive" width="46" alt="46x46" src="/site_tiktok.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://tinyurl.com/iprodel" ><img class="img-responsive" width="46" alt="46x46" src="/site_insta.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://tinyurl.com/rprodel" ><img class="img-responsive" width="46" alt="46x46" src="/site_twitter.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://tinyurl.com/fprodel" ><img class="img-responsive" width="46" alt="46x46" src="/site_facebook.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://tinyurl.com/yprodel" ><img class="img-responsive" width="46" alt="46x46" src="/site_youtube.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
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
            <div class="col-md-6 mb-4" >
               <div style={{position: 'relative', width: '100%', paddingBottom: '56.25%'}}>
                  <iframe allowfullscreen style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0',}}
                     src="https://www.youtube.com/embed/c3wy-9rHECs">
                  </iframe>
               </div>
            </div>
         </div>

         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <div style={{position: 'relative', width: '100%', paddingBottom: '56.25%'}}>
                  <iframe allowfullscreen style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0',}}
                     src="https://www.youtube.com/embed/7sLZc7SCS3M">
                  </iframe>
               </div>
            </div>
         </div>

         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <Link href="https://tinyurl.com/tprodel" ><img class="img-responsive" width="46" alt="46x46" src="/site_tiktok.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://tinyurl.com/iprodel" ><img class="img-responsive" width="46" alt="46x46" src="/site_insta.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://tinyurl.com/rprodel" ><img class="img-responsive" width="46" alt="46x46" src="/site_twitter.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://tinyurl.com/fprodel" ><img class="img-responsive" width="46" alt="46x46" src="/site_facebook.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://tinyurl.com/yprodel" ><img class="img-responsive" width="46" alt="46x46" src="/site_youtube.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
            </div>
         </div>
      </div>

    </div>
  )
}