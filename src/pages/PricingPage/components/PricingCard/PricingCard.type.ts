import React, {ReactNode} from "react";

export type PricingCardType = {
    planName: ReactNode,
    pricePerIcon: ReactNode,
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    descriptionPoints: string[],
    totalPrice: ReactNode,
    variant: 'light' | 'dark',
    isSubscribed: boolean,
}