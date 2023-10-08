import styles from './Intro.module.scss';

export function Intro() {
    return (
        <div className={styles.root}>
            <h2 className={styles.title}>Pricing</h2>
            <p className={styles.text}>Access pro icons @ as low as 0.07 cent each</p>
        </div>
    );
};