import {PricingCardType} from "../PricingCard/PricingCard.type";
import {useMemo} from "react";
import {PRICING_BLOCK_CONFIG} from "./config";
import {PricingCard} from "../PricingCard/PricingCard";
import styles from './PricingBlock.module.scss'
import {Tabs} from "../../../../shared/ui/Tabs/Tabs";

export function PricingBlock() {
    const pricingCardItems: PricingCardType[] = useMemo(() => {
        // CHANGE isSubscribed VALUE TO THE VALUE FROM YOUR STATE MANAGER
        return PRICING_BLOCK_CONFIG.map(config => ({...config, isSubscribed: false}))
    }, [])

    const tabs = useMemo(() => [
        {
            tabName: 'Monthly',
            content: pricingCardItems.map((pricingCardItem, index) => (
                <PricingCard
                    key={index}
                    planName={pricingCardItem.planName}
                    pricePerIcon={pricingCardItem.pricePerIcon}
                    Icon={pricingCardItem.Icon}
                    descriptionPoints={pricingCardItem.descriptionPoints}
                    totalPrice={pricingCardItem.totalPrice}
                    variant={pricingCardItem.variant}
                    isSubscribed={pricingCardItem.isSubscribed}
                />
            ))
        },
        {
            tabName: 'Annually',
            content: 'To be added'
        }
    ], [pricingCardItems])

    return (
        <Tabs tabs={tabs} classNames={{
            header: styles.tabsHeader,
            headerElement: (isSelected) => isSelected ? styles.tabsHeaderElementActive : styles.tabsHeaderElement,
            content: styles.tabsContent
        }}/>
    );
};