import {PricingCardType} from "../PricingCard/PricingCard.type";
import {ReactComponent as IconBasic} from "shared/assets/icons/pricing-icon-basic.svg";
import {ReactComponent as IconAdvance} from "shared/assets/icons/pricing-icon-advance.svg";
import {ReactComponent as IconPro} from "shared/assets/icons/pricing-icon-pro.svg";

export const PRICING_BLOCK_CONFIG: Omit<PricingCardType, 'isSubscribed'>[] = [
    {
        planName: 'Basic',
        pricePerIcon: 'png+limited svg',
        Icon: IconBasic,
        descriptionPoints: [
            '15 pro icons included animated',
            'Access to free emojis',
            'Attribution required',
            'Ads'
        ],
        totalPrice: 'FREE FOREVER',
        variant: "light"
    },
    {
        planName: 'ADVANCE',
        pricePerIcon: '0.07¢ per icon',
        Icon: IconAdvance,
        descriptionPoints: [
            '100 pro + animated svg icons /mo.',
            'Access to pro emojis',
            'Royalty—free assets',
            'No ads'
        ],
        totalPrice: '$14.5',
        variant: "dark"
    },
    {
        planName: 'PRO',
        pricePerIcon: '0.095¢ per icon',
        Icon: IconPro,
        descriptionPoints: [
            '50 pro icons + animated svg /mo.',
            'Access to pro emojis',
            'Royalty—free assets',
            'No ads'
        ],
        totalPrice: '$9.5',
        variant: "light"
    }
]