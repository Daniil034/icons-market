import classNames from "classnames";
import {PricingCardType} from "./PricingCard.type";
import {Button} from "shared/ui/Button/Button";
import {ReactComponent as IconTick} from "shared/assets/icons/icon-tick.svg";
import styles from './PricingCard.module.scss';

type Props = PricingCardType & { className?: string }

export function PricingCard(props: Props) {
    const {
        className,
        Icon,
        descriptionPoints,
        planName,
        pricePerIcon,
        totalPrice,
        variant,
        isSubscribed
    } = props;

    return (
        <div className={classNames(styles.root, styles[variant], className)}>
            <div className={styles.header}>
                <div>
                    <p className={styles.planName}>
                        {planName}
                    </p>
                    <p className={styles.pricePerIcon}>
                        {pricePerIcon}
                    </p>
                </div>
                <div>
                    <Icon/>
                </div>
            </div>
            <div className={styles.body}>
                <ul className={styles.list}>
                    {descriptionPoints.map((descriptionPoint, index) => (
                        <li key={index} className={styles.listItem}>{descriptionPoint}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.totalPrice}>
                {totalPrice}
            </div>
            <Button
                variant={variant === 'light' ? 'white' : 'yellow'}
                className={styles.button}
                type="button"
                disabled={isSubscribed}
            >
                {isSubscribed ? <IconTick/> : 'Subscribe'}
            </Button>
        </div>
    );
};