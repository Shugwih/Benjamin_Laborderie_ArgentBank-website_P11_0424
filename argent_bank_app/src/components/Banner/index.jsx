import styles from './Banner.module.scss'

function Banner() {

    return (
        <div className={styles.hero}>
            <section className={styles['hero-content']}>
            <h2 className="sr-only">Promoted Content</h2>
            <p className={styles.subtitle}>No fees.</p>
            <p className={styles.subtitle}>No minimum deposit.</p>
            <p className={styles.subtitle}>High interest rates.</p>
            <p className={styles.text}>Open a savings account with Argent Bank today!</p>
            </section>
        </div>
  
    )
}

export default Banner