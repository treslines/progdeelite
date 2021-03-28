import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Shortcut from '../src/components/Shortcut'
import Title from '../src/components/Title'
import Header from '../src/components/Header'

export default function AndroidStudio() {
  return (
    <div className={styles.container} >
      <Header title="Android Studio" />
      
      <div class="container" >
         <div class="row text-center">
            <div class="col-md-12"> <Title size="46" name="ANDROID STUDIO - WINDOWS"/></div>
            <div class="col-md-12"><p style={{float:'left', fontWeight:'bold'}}>Most Used Shortcuts Acc. To <span style={{backgroundColor: '#FFEE00', fontFamily: 'luckiestguy'}}>PARETO'S RULE</span> of 20% {'>'} 80% using Eclipse Keymappings!</p></div>
         </div>
         <div class="row text-center">
            <div class="col-md-12"><Shortcut one="Ctrl" two="Alt" three="L" desc="format code"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Alt" three="S" desc="Open Settings"/></div>
         </div>
      </div>
    </div>
  )
}
