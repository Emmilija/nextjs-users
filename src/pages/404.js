import Link from "next/link"
import styles from '../styles/Home.module.css'
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () => {
const router = useRouter()

useEffect(() => {
setTimeout(() => {
// router.go(-1) going back on the page
router.push('/') //going back on homepage for 3s
}, 3000)
}, [])

    return(
        <div className={styles.notfound}>
            <h1>Oooops..</h1>
            <h2>The page cannot be found.</h2>
            <p>Go back to <Link href='/'>Homepage</Link></p>
        </div>
    )
}

export default NotFound;