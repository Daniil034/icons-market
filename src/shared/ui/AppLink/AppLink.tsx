import {Link} from "react-router-dom";
import classNames from "classnames";
import styles from './AppLink.module.scss';
import {ComponentProps, ReactNode} from "react";

type Props = {
    className?: string,
    children: ReactNode
} & ComponentProps<typeof Link>;

export function AppLink(props: Props) {
    const {to, className, children, ...restProps} = props;
    return (
        <Link to={to} className={classNames(className, styles.Link)} {...restProps}>
            {children}
        </Link>
    );
};