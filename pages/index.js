import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Karolaynne Gondim</title>
        <meta name="Karolaynne Gondim">Psicologa Karolaynne Gondim</meta>
        <link rel="icon" href="/02.png"/>
        <header>
        </header>
      </Head>

      <main className={styles.main}>
       <div className={styles.title}><img src="/01.gif"/></div>
      </main>
    </div>
  )
}
