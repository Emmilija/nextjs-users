import styles from '@/styles/Users.module.css'
import Link from 'next/link'


//to tell how many pages it needs to create based on data
export const getStaticProps = async () => {
const response = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await response.json()


return {
    props: {users: data}
}
}
 



export default function Users({users}) {
    return (
        <div>
            <h1>Users</h1>

            {users.map(users => (
                <Link  href={'/users/' + users.id} className={styles.single} key={users.id}>
             
                    <h2>{users.name}</h2>
               
                </Link>
          
            )
                
                )}
        </div>
    )
} 