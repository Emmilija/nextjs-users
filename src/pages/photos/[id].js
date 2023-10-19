import styles from '@/styles/Home.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()

    const paths = data.map(photos => {
        return{
            params: {id: photos.id.toString()}
        }
    })
    
    return{
        paths,
        fallback: false
    }
}

//for each page
export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/photos' + id)
    const data = await res.json()


return{
    props: { photo: data}
}
}

const Detail = ({photo}) => {
    return(
        <div className={styles.description}>
            <p>{photo.title}</p>
            <img src={photo.url} alt={photo.title} />        
            </div>
    )
}

export default Detail;