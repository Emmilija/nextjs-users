import Link from "next/link";
import styles from  '@/styles/Users.module.css'


//to tell how many pages it needs to create based on data
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();

  return {
    props: { photo: data },
  };
};


//taking the photo from the data like a prop
export default function Photos({ photo }) {
  return (
    <div>
      <h1>Photos</h1>

      {photo.map(photo => (
        <Link href={"/photos/" + photo.id} className={styles.single} key={photo.id}>
          <h2>{photo.url}</h2>
        </Link>
      ))}
    </div>
  );
};
