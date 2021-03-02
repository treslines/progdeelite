import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Profile() {
  return (
    <div className={styles.container} >
      <Head>
        <title>Downloads</title>
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

      <div class="container my-4 " >
      
         <div class="row text-center">
            <div class="col-md-6 mb-4">
            <p class="my-4" ><span class="font-weight-normal" style={{backgroundColor: '#FFffff', fontFamily: 'luckiestguy', fontSize: '46px'}}>DOWNLOADS</span></p>
            <p class="my-4" ><span class="font-weight-normal" style={{backgroundColor: '#FFffff', fontFamily: 'luckiestguy'}}>RICARDO FERREIRA</span><br></br>
            <Link href="https://tinyurl.com/tprodel" >
               <b style={{color: 'grey', cursor: 'pointer'}}>@progdeelite</b>
            </Link>
            
            </p>
               <Link href="https://tinyurl.com/tprodel" >
                  <img class="rounded-circle img-responsive" width="100" alt="100x100" src="/perfil.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/>
               </Link>
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
         
         <div class="container" style={{marginTop: '50px'}}>
            <div class="row">
               <div class="col-12 col-md-6 center">
                  <h6 class="text-muted text-center">GRATIS DOWNLOADS</h6> 
                  <ul class="list-group">
                     <li class="list-group-item">
                        <Link href="/docs/CV_modelo_para_enviar_para_empresas_en.docx" >
                           CV Modelo Europa - Para enviar direto para empresas!
                        </Link>
                     </li>
                     <li class="list-group-item">
                        <Link href="/docs/CV_modelo_para_iniciantes_em_ingles.docx" >
                           CV Modelo Iniciante - Para enviar direto para empresas!
                        </Link>
                     </li>
                     <li class="list-group-item">CV Modelo Headhunter - Coming soon! Stay tuned! ;)</li>
                  </ul>
               </div>
            </div>
         </div>
         
      </div>

    </div>
  )
}