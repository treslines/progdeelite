import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Shortcut from '../src/components/Shortcut'
import Title from '../src/components/Title'
import Header from '../src/components/Header'

export default function Vscode() {
  return (
    <div className={styles.container} >
      <Header title="VS Code" />
      
      <div class="container" >
         <div class="row text-center">
            <div class="col-md-12"> <Title size="46" name="VISUAL STUDIO CODE - WINDOWS"/></div>
            <div class="col-md-12"><p style={{float:'left', fontWeight:'bold'}}>Most Used Shortcuts Acc. To <span style={{backgroundColor: '#FFEE00', fontFamily: 'luckiestguy'}}>PARETO'S RULE</span> of 20% {'>'} 80%</p></div>
         </div>
         <div class="row text-center">
            <div class="col-md-12"><Shortcut one="F2"desc="Rename File"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Mouse" desc="Jump Into File"/></div>
            <div class="col-md-12"><Shortcut one="Alt" two="Left" desc="Jump Back From File"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="P" desc="Go To File"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="G" desc="Go To Line"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="D" desc="Bulk Selection"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="H"  desc="Search Replace"/></div>
            <div class="col-md-12"><Shortcut one="Alt" two="Up"  desc="Move Line Up or Down"/></div>
            <div class="col-md-12"><Shortcut one="Shift" two="Alt" three="A" desc="Block Comment"/></div>
            <div class="col-md-12"><Shortcut one="Ctrl" two="Shift" three="F" desc="Search File"/></div>
            <div class="col-md-12"><Shortcut one="Shift" two="Alt" three="Up" desc="Duplicate Line"/></div>
         </div>
      </div>
    </div>
  )
}
