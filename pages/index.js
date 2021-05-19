import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>clarin ∩</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.Preview} src="/img/ClarinPreview.png" alt="Clarin Preview" />

        <h3>COMING SOON</h3>

        <img className={styles.spark} src="/img/Spark.svg" alt="Spark" />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://allandavid.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/img/AllanDav1d.svg" alt="AllanDav1d Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
