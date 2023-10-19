import Layout from '@/components/Layout'
import '../styles/Home.module.css'

export default function App({ Component, pageProps }) {
  return (
    <main>
<Layout>
   <Component {...pageProps} />
</Layout>
   </main>
  )

}
