import Link from "next/link"
import styles from '@/styles/About.module.css'
import Image from "next/image"

export default function About() {
    return (
        <>
            <div className={styles.about}>
                <div className={styles.about2}>
                    <h1>Sobre o Projeto</h1>
                    <p>Esse projeto foi desenvolvido com o intuito de aplicar os conhecimentos React, Next e Javascript. Para que esse projeto fosse viável e acessível, utilizei <Link href="https://pokeapi.co/" target="_blank">PokeAPI</Link>, dessa forma ela contém dados como um backend, simplificando o projeto. Mas se é um fã de Pokemon, se sinta à vontade para relembrar dos seus preferidos e saber mais informações.</p>
                </div>
                <Image src="/images/charizard.png" width={300} height={200} alt="Charizard" />
            </div>

        </>
    )
}