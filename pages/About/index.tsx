import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from './styles.module.scss';

const About: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Sobre nós | Casa Roraima</title>
            </Head>
            
            <section>
                <div className={styles.logoWrapper}>
                    <Image
                        height={164.17}
                        width={312.5}
                        src='/images/logo-sem-isotipo.png'
                        alt="Casa Roraima"
                    />
                </div>  
                
                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <h1>Sobre nós</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum sem quis eros lobortis, quis eleifend dolor eleifend. Praesent volutpat placerat ipsum, at maximus lectus pellentesque eget. Vestibulum malesuada dictum mi in tristique. Pellentesque ut vestibulum odio, in tempor dolor. Sed ultricies bibendum pellentesque. Suspendisse et ipsum pulvinar, rutrum velit non, finibus magna. Aenean in ligula urna. Suspendisse ac finibus justo. Sed ac tincidunt nulla. Curabitur sed ipsum in augue pulvinar congue nec a tellus. Donec accumsan congue sem, suscipit finibus justo imperdiet sit amet. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br /><br/>

                        In nunc enim, dapibus quis mattis consectetur, malesuada non erat. Fusce ut dolor erat. Aliquam vestibulum risus arcu, tempor cursus nibh porttitor vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur quis massa vitae augue imperdiet aliquet nec et quam. In eu augue ac erat vehicula pellentesque. Nam cursus sodales massa ut vulputate. Sed at ligula et justo commodo pretium.</p>
                    </div>
                    <div className={styles.imagesContainer}>
                        <div className={styles.imageWrapper}>
                            <Image
                                height={317.81}
                                width={565}
                                src='/images/pictures/fachada-noite.png'
                                alt="Fachada"
                            />
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image
                                height={282.5}
                                width={565}
                                src='/images/pictures/interior.png'
                                alt="Fachada"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;