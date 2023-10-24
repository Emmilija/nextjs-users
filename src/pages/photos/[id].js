import styles from '@/styles/Users.module.css'

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

//for each page dynamic routes
export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/' + id)
    const data = await res.json()


return{
    props: { photo: data}
};
};

const Detail = ({photo}) => {
    return(
        <div className={styles.photocontainer}>
            <h1>{photo.title}</h1>
            <img src={photo.url} alt={photo.title} />        
            </div>
         
    );
};

export default Detail;