import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import dynamic from 'next/dynamic';

const NoSSRMap = dynamic(() => import('./components/Map/index'), {
  ssr: false
})

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Casa Roraima Galeteria</title>
      </Head>

      <section className={styles.banner}>
        <div>
          <Image
            width={1366}
            height= {544}
            src='/images/banner.png'
            alt='banner'
          />
        </div>
      </section>

      <section className={styles.deliveryAndMenu}>
        <div className={styles.deliveryContainer}>
          <h2>Peça pelo nosso delivery</h2>
          <div>
            <a href='https://www.ifood.com.br' target='_blank' rel='noreferrer'>Peça já</a>
          </div>
        </div>
        <div className={styles.menuContainer}>
          <h2>Confira nosso cardápio</h2>
          <div>
            <a href='https://api.whatsapp.com/send?phone=5511951305890' target='_blank' rel='noreferrer'>Cardápio</a>
          </div>
        </div>
      </section>

      <section className={styles.locationContainer}>
        <div className={styles.mapText}>
          <h2>Venha nos conhecer</h2>
          <p>
            Um ótimo espaço para receber você e sua família!
          </p>
        </div>
        <div className={styles.map}>
          <NoSSRMap/>
        </div>
      </section>
    </div>
  )
}

export default Home
