import {ReactNode} from "react";
import styles from './SectionItem.module.scss';

type Props = {
    children: ReactNode
};

export function SectionItem(props: Props) {
    const {children} = props;
    return (
        <section className={styles.root}>
            {children}
        </section>
    );
};