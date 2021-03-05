import styles from '../styles/Home.module.css'
import Logo from '../src/components/Logo'
import Video from '../src/components/Video'
import Social from '../src/components/Social'
import Action from '../src/components/Action'
import Follow from '../src/components/Follow'
import Headline from '../src/components/Headline'
import Header from '../src/components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div className={styles.container} >
      <Header title="Prog. De Elite"/>
      <div class="container my-4 " /* style={{backgroundColor: '#FFEE00'}} */> 
         <Logo />
         <Headline />
         <Follow />
         <Action />
         <Social />
         <Video id="3Vp6i47MZys" />
         <Video id="c3wy-9rHECs" />
         <Video id="7sLZc7SCS3M" />
         <Video id="-gBKLz3sAnY" />
         <Video id="sA39yl3ZZM0" />
         <Video id="85Yl1V1RbpY" />
         <Video id="1fVBePDbfUc" />
         <Video id="LdW3Nv8Ww7M" />
         <Video id="iSypMtDIG0k" />
         <Social />
      </div>
    </div>
  )
}