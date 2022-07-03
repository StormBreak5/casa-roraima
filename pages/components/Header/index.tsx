import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return(
        <div className={styles.headerContainer}>
            <Link href='/'>
                <a>
                    <Image 
                        height={64}
                        width={162.17}
                        src="/images/logo-principal.png" 
                        alt="Casa Roraima" 
                    />
                </a>
            </Link>
            
            <nav className={styles.teste}>
                <Link href='/About' >
                    <a>Sobre nós</a>
                </Link>
                <Link href='/Locations'>
                    <a>Localizações</a>
                </Link>
                <Link href='/Contact'>
                    <a>Contato</a>
                </Link>
            </nav>
        </div>
    )
}