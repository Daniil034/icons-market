import React from "react";
import {FeatureType} from "./Feature.type";
import classNames from "classnames";
import styles from './Feature.module.scss';

type Props = FeatureType & { className?: string };

export function Feature(props: Props) {
    const {description, title, Icon, className} = props;

    return (
        <div className={classNames(styles.root, className)}>
            <Icon/>
            <div className={styles.bottom}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};