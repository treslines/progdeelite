import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Social from '../src/components/Social'
import Downloads from '../src/components/Download'
import Header from '../src/components/Header'
import Ricardo from '../src/components/Ricardo'
import Picture from "../src/components/Picture"
import Like from "../src/components/Like"

export default function Profile() {
  return (
    <div className={styles.container} >
      <Header title="Downloads" />
      <div class="container my-4 " >
         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <Ricardo />
               <Picture destination="tprodel" />
               <Like />
            </div>
         </div>
         <Social />
         <Downloads />
      </div>
    </div>
  )
}