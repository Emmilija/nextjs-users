import styles from '@/styles/Users.module.css'
import Link from 'next/link'



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
        fallback: true
    }
}

//for each page dynamic routes
export const getStaticProps = async ({params}) => {
    const id = params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/' + id)
    const data = await res.json()


return{
    props: { photo: data},
};
};

const Detail = ({photo}) => {
    if (!photo || !photo.title) {
      
        return <div>Error: Photo not found.</div>;
      }
    return(
        <div className={styles.photocontainer}>
                    <p  className={styles.button}>
<Link href={'/photos'}>Go Back</Link>
            </p>
            <h1>{photo.title}</h1>
            <img className={styles.photo} src={photo.url} alt={photo.title} />        
            </div>
         
    );
};

export default Detail;