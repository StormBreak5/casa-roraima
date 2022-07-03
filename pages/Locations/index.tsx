import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from './styles.module.scss';

const NoSSRMap = dynamic(() => import('../components/Map/index'), {
    ssr: false
})

const Location: NextPage = () => {
    return (
        <section className={styles.container}>
            <Head>
                <title>Localizações | Casa Roraima</title>
            </Head>

            <div className={styles.banner}>
                <h1>Localizações</h1>
            </div>
            <div className={styles.locationContent}>
            <div className={styles.mapText}>
                <h2>Boa Vista</h2>
                <p>
                    Avenida aleatória com boa localização, 999 <br />
                    Bairro badalado
                </p>
            </div>
            <div className={styles.map}>
                <NoSSRMap/>
            </div>
            </div>
        </section>
    )
}

export default Location;