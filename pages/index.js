import Link from 'next/link'
import styles from '@/styles/home.module.css'
import  Navbar  from  '../components/Navbar'
import ArtworksFrame from '@/components/ArtworksFrame'


const Home = () => {
  return (
    <>
    <title>Beyza B. Art Portfolio</title>
    <div className={styles.main}>
     <Navbar/>
     <div className={styles.mainContent}>
     <ArtworksFrame/>
     </div>
    </div>
    </>
  )
}
export default Home;