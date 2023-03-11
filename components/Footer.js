import styles from '@/styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>

                <p>
                    <span>PokeNext</span> &copy; 2023
                </p>

                <p>
                    Desenvolvido por <Link href="https://www.linkedin.com/in/fernando-souza-499579149/" target="_blank"><span>Fernando Souza</span></Link>
                </p>

            </footer>
        </>
    )
}