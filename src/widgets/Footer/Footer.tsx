import {LINKS_LEFT, LINKS_RIGHT} from "./links";
import {ReactComponent as LogoDark} from "shared/assets/icons/logo-white.svg";
import {ReactComponent as HeartIcon} from "shared/assets/icons/heart.svg";
import {ReactComponent as StripeLogo} from "shared/assets/icons/stripe-logo.svg";
import styles from './Footer.module.scss';

export function Footer() {
    return (
        <section className={styles.root}>
            <div className={styles.top}>
                <div className={styles.companyInfo}>
                    <LogoDark className={styles.logo}/>
                    <p>
                        OpenStroke.io icons library is designed for millions of designers, developers, and content
                        creators who care for attention to details. OpenStroke.io offering an quality 35,776 icons
                        collection across 68 categories and having 4 unique styles including brand logos, and emojis. We
                        are committed to expands our library.
                    </p>
                </div>
                <div className={styles.links}>
                    <ul className={styles.linksList}>{LINKS_LEFT.map(link => <li key={link}><a href="/">{link}</a>
                    </li>)}</ul>
                    <ul className={styles.linksList}>{LINKS_RIGHT.map(link => <li key={link}><a href="/">{link}</a>
                    </li>)}</ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <p className={styles.bottomLeft}>© Sketchish Designer, Llp.</p>
                <div className={styles.bottomRight}>
                    <p className={styles.bottomMadeWith}>
                        Made with {<HeartIcon/>} in India
                    </p>
                    <p className={styles.bottomStripe}>
                        Secure payment with {<StripeLogo/>}
                    </p>
                </div>
            </div>
        </section>
    );
};