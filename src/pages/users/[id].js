import styles from '@/styles/Users.module.css'

export const getStaticPaths = async () => {
const response = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await response.json()

const paths = data.map(users => {
    return {
        params: { id: users.id.toString() }
    }
})

return {
    paths,
    fallback: false
}
}
//for each page 
export const getStaticProps = async (context) => {
const id = context.params.id
const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
const data = await response.json()


return{
    props:{users: data}
}
}

const Details = ({users}) => {
    return(
        <div className={styles.photocontainer}>
            <h1>{users.name}</h1>
            <p className={styles.users}>Username: {users.username}</p>
            <p className={styles.users}>Email: {users.email}</p>
            <p className={styles.users}>Adress: {users.address.city}</p>
            <p className={styles.users}>Website: {users.website}</p>
         
        </div>
    )
}

export default Details;