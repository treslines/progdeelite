import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Social from '../src/components/Social'
import Tiktok from '../src/components/Tiktok'
import Header from '../src/components/Header'

export default function Profile() {
  return (
    <div className={styles.container} >
      <Header title="Profile" />
      <div class="container my-4 " >
         <div class="row text-center">
            <Tiktok />
         </div>
         <Social />
      </div>
    </div>
  )
}