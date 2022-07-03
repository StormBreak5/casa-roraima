import Image from 'next/image';
import styles from './styles.module.scss';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div>
                    <nav className={styles.links}>
                        <Link href='/About'>
                            <a>Sobre nós</a>
                        </Link>
                        <Link href='/Locations'>
                            <a>Localizações</a>
                        </Link>
                        <Link href='/Contact'>
                            <a>Contato</a>
                        </Link>
                        <Link href='#'>
                            <a>Trabalhe Conosco</a>
                        </Link>
                    </nav>
                </div>
                <div className={styles.logo}>
                    <Image
                        height={240}
                        width={282.97}
                        src='/images/isotipo-estilizado.png'
                        alt='Casa Roraima'
                    />
                </div>
                <div>
                    <div className={styles.social}>
                        <span>Redes Sociais</span>
                        <div className={styles.socialImages}>   
                            <a href='https://www.facebook.com/itzac.angelo/' target='_blank' rel='noreferrer' className={styles.imageWrapper}>
                                <FaFacebookSquare size={30} color='#F8FEFE'/>
                            </a>
                            <a href='https://www.instagram.com/this.itzac/' target='_blank' rel='noreferrer' className={styles.imageWrapper}>
                                <FaInstagram size={30} color='#F8FEFE' />
                            </a>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>Copyright © 2022 Casa Roraima - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}