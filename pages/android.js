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
            <div class="col-md-12"> <Title size="46" name="ANDROID STUDIO - WINDOWS - ECLIPSE KEYMAP"/></div>
            <div class="col-md-12"><p style={{float:'left', fontWeight:'bold'}}>Most Used Shortcuts Acc. To <span style={{backgroundColor: '#FFEE00', fontFamily: 'luckiestguy'}}>PARETO'S RULE</span> of 20% {'>'} 80% using Eclipse Keymappings!</p></div>
         </div>
         <div class="row text-center">
            <div class="col-md-12"><Shortcut one="F1" desc="Open Online Help"/></div>
            <div class="col-md-12"><Shortcut one="F2" desc="Show Commentar"/></div>
            <div class="col-md-12"><Shortcut one="F3" desc="Find Usages In Place"/></div>
            <div class="col-md-12"><Shortcut one="F4" desc="Class Hierarchy"/></div>
            <div class="col-md-12"><Shortcut one="Alt" two="7" desc="Class Outline (Structure)"/></div>
            <div class="col-md-12"><Shortcut one="Alt" two="Left" desc="Navigate Back"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="F" desc="Find And Replace"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="E" desc="Show Recent Files"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="L" desc="Go To Line"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="G" desc="Find Usages"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="H" desc="Find in Path"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="D" desc="Delete Line"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Tab" desc="Switch Tabs"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Alt" three="L" desc="Format Code"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Alt" three="S" desc="Open Settings"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Shift" three="W" desc="Close All Tabs"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Shift" three="P" desc="Find Method Scope"/></div>
            <div class="col-md-12"><Shortcut one="Shift" two="Alt" three="R" desc="Rename Function/Variable"/></div>
            <div class="col-md-12"><Shortcut one="Shift" two="Alt" three="C" desc="Change Method Signatur"/></div>
            <div class="col-md-12"><Shortcut one="Shift" two="Alt" three="Z" desc="Surround With"/></div>
            <div class="col-md-12"><Shortcut one="Shift" two="Alt" three="L" desc="Extract Variable"/></div>
            <div class="col-md-12"><Shortcut one="Shift" two="Alt" three="M" desc="Extract Method"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Alt" three="Left" desc="Switch Tabs"/></div>
            <div class="col-md-12"><Shortcut one="Shift" two="Alt" three="B" desc="Toggle Break Point"/></div>
            <div class="col-md-12"><Shortcut one="Shift" two="Alt" three="X/D" desc="Run App/Run App Debug"/></div>
            <div class="col-md-12"><Shortcut one="Shift" two="Alt" three="F8" desc="View Break Points"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Alt" three="Down" desc="Duplicate Line"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Shift" three="Alt" desc="+ Mouse = Bulk Selection"/></div>
         </div>
      </div>
    </div>
  )
}
