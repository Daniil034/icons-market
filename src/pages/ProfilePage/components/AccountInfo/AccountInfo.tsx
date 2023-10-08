import {useAppSelector} from "shared/lib/reduxHooks";
import {selectUserData} from "entities/user";
import styles from './AccountInfo.module.scss';

export function AccountInfo() {
    const userData = useAppSelector(selectUserData);
    return (
        <section className={styles.root}>
            <h2>HELLO <br/>
                
            </h2>
        </section>
    );
};