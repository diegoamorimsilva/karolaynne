import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <header>
        </header>
      </Head>

      <main className={styles.main}>
       <div className={styles.title}><img src="/01.gif"/></div>
      </main>
    </div>
  )
}
