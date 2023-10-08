import {ReactComponent as SearchIcon} from 'shared/assets/icons/search-icon.svg'
import {AppLink} from "shared/ui/AppLink/AppLink";
import styles from './SearchButton.module.scss'

export function SearchButton() {
    return (
        <AppLink to="/" className={styles.root}>
            <SearchIcon/>
            <span>Icons</span>
        </AppLink>
    );
};