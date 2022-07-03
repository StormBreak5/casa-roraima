import { NextPage } from "next";
import Head from "next/head";
import styles from './styles.module.scss';
import {ImWhatsapp} from 'react-icons/im';
import {BsTelephone} from 'react-icons/bs'

const Contact: NextPage = () => {
    return (
        <section className={styles.container}>
            <Head>
                <title>Contato | Casa Roraima</title>
            </Head>

            <div className={styles.banner}>
                <h1>Contato</h1>
            </div>
            <div className={styles.contactContent}>
                <h2>Unidade Boa Vista</h2>
                <div className={styles.contactInfo}>
                    <span>
                        <BsTelephone color='#A08D72'/> (XX) XXXXX-XXXX
                    </span>
                    <span>
                        <ImWhatsapp color='#A08D72'/> (XX) XXXXX-XXXX
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Contact;