import {ComponentProps, ReactNode} from "react";
import classNames from "classnames";
import styles from './Button.module.scss';

type Props = {
    className?: string,
    variant: 'white' | 'yellow',
    children: ReactNode
} & ComponentProps<'button'>;

export function Button(props: Props) {
    const {className, variant, disabled, children, ...restProps} = props
    return (
        <button
            className={classNames(styles.root, styles[variant], {[styles.disabled]: disabled}, className)} {...restProps}>
            {children}
        </button>
    );
};