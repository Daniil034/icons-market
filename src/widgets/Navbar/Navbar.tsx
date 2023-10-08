import {SearchButton} from "./components/SearchButton/SearchButton";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ReactComponent as LogoDark} from 'shared/assets/icons/logo-dark.svg';
import {RoutesPath} from "../../app/providers/router/config";
import styles from './Navbar.module.scss';

export function Navbar() {
    return (
        <div className={styles.root}>
            <div className={styles.left}>
                <SearchButton/>
                <AppLink to="/">Styles</AppLink>
            </div>
            <div className={styles.middle}>
                <LogoDark/>
            </div>
            <div className={styles.right}>
                <AppLink to={RoutesPath.pricing}>Pricing</AppLink>
                <AppLink to="/">Login</AppLink>
            </div>
        </div>
    );
};
