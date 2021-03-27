import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Shortcut from '../src/components/Shortcut'
import Title from '../src/components/Title'
import Header from '../src/components/Header'

export default function Shortcuts() {
  return (
    <div className={styles.container} >
      <Header title="Shortcuts" />
      <div class="container" >
         <div class="row text-center">
            <div class="col-md-12">
               
               <div style={{float:'left'}}><p><span class="font-weight-normal" style={{backgroundColor: '#FFffff', fontFamily: 'luckiestguy', fontSize: '46px'}}>ANDROID STUDIO WINDOWS</span></p></div>
               
               <Shortcut one="Ctrl" two="Alt" three="L" desc="format code"/>
               <Shortcut one="Ctrl" two="Alt" three="S" desc="Open Settings"/>
               <Shortcut one="Ctrl" two="Alt" three="L" desc="format code"/>
               <Shortcut one="Ctrl" two="Alt" three="S" desc="Open Settings"/>
               <Shortcut one="Ctrl" two="Alt" three="L" desc="format code"/>
               <Shortcut one="Ctrl" two="Alt" three="S" desc="Open Settings"/>
               <Shortcut one="Ctrl" two="Alt" three="L" desc="format code"/>
               <Shortcut one="Ctrl" two="Alt" three="S" desc="Open Settings"/>
               <Shortcut one="Ctrl" two="Alt" three="L" desc="format code"/>
               <Shortcut one="Ctrl" two="Alt" three="S" desc="Open Settings"/>
               <Shortcut one="Ctrl" two="Alt" three="L" desc="format code"/>
               <Shortcut one="Ctrl" two="Alt" three="S" desc="Open Settings"/>
               <Shortcut one="Ctrl" two="Alt" three="L" desc="format code"/>
               <Shortcut one="Ctrl" two="Alt" three="S" desc="Open Settings"/>
               <Shortcut one="Ctrl" two="Alt" three="L" desc="format code"/>
               <Shortcut one="Ctrl" two="Alt" three="S" desc="Open Settings"/>
               <Shortcut one="Ctrl" two="Alt" three="L" desc="format code"/>
               <Shortcut one="Ctrl" two="Alt" three="S" desc="Open Settings"/>

            </div>
         </div>
      </div>
    </div>
  )
}
