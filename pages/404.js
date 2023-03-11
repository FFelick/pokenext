import Image from "next/image"

import styles from "@/styles/Home.module.css"

export default function Notfound() {
    return (
        <>
            <div className={styles.p404}>
                <Image src="/images/pika_duv.png"
                    width={400}
                    height={400}
                    alt="Pikachu" />
                <p>Ops... estamos perdidos!</p>
                <h1>404</h1>
            </div>
        </>
    )
}