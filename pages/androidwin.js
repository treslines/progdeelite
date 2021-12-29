import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Shortcut from '../src/components/Shortcut'
import Title from '../src/components/Title'
import Header from '../src/components/Header'

export default function AndroidStudioWin() {
  return (
    <div className={styles.container} >
      <Header title="Android Studio Win" />
      
      <div class="container" >
         <div class="row text-center">
            <div class="col-md-12"> <Title size="46" name="ANDROID STUDIO - WINDOWS KEYMAP"/></div>
            <div class="col-md-12"><p style={{float:'left', fontWeight:'bold'}}>Most Used Shortcuts Acc. To <span style={{backgroundColor: '#FFEE00', fontFamily: 'luckiestguy'}}>PARETO'S RULE</span> of 20% {'>'} 80% using Windows Keymappings!</p></div>
         </div>
         <div class="row text-center">

            <div class="col-md-12"><Shortcut one="F4" desc="Jump To Source"/></div>

            <div class="col-md-12"><Shortcut one="Alt" two="J" desc="Select One-By-One"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="W" desc="Expand Selection"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="D" desc="Duplicate Line"/></div>
            <div class="col-md-12"><Shortcut one="Alt" two="F7" desc="Find Usage"/></div>
            <div class="col-md-12"><Shortcut one="Alt" two=">" desc="Navigate Forward"/></div>
            <div class="col-md-12"><Shortcut one="Alt" two="<" desc="Navigate Backward"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="J" desc="Insert Livetemplate"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="I" desc="Implement Methods"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="O" desc="Override Methods"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="F12" desc="Class Structure"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="H" desc="Class Hierarchy"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Q" desc="Doc Selected Class"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="E" desc="Recent Files"/></div>
            <div class="col-md-12"><Shortcut one="Shift" two="F10" desc="Run App"/></div>
            <div class="col-md-12"><Shortcut one="Shift" two="F9" desc="Run App Debug"/></div>
            <div class="col-md-12"><Shortcut one="Shift" two="F8" desc="Toggle Breakpoint"/></div>

            <div class="col-md-12"><Shortcut one="Shift" two="Alt" three="L(M)" desc="Multi-Selection L(M) = Left Mouse Key"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Shift" three="U" desc="Upper/Lower Case"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Shift" three="W" desc="Shring Selection"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Shift" three="J" desc="Join Selection"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Shift" three="F" desc="Find in File"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Alt" three="F" desc="Show Usages"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Alt" three="T" desc="Sorround With"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Shift" three="T" desc="Create Test"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Alt" three="V" desc="Extract Variable"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Alt" three="M" desc="Extract Method"/></div>
            <div class="col-md-12"><Shortcut one="Shift" two="Alt" three="Up" desc="Move Line Up"/></div>

         </div>
      </div>
    </div>
  )
}
