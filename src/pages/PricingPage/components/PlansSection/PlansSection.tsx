import {PricingBlock} from "../PricingBlock/PricingBlock";
import {ReactComponent as IIcon} from "shared/assets/icons/I.svg";
import {PlanFeaturesBlock} from "../PlanFeaturesBlock/PlanFeaturesBlock";
import {FigmaPluginBlock} from "../FigmaPluginBlock/FigmaPluginBlock";
import {SectionItem} from "shared/ui/SectionItem/SectionItem";
import styles from './PlansSection.module.scss';

export function PlansSection() {
    return (
        <SectionItem>
            <PricingBlock/>
            <section className={styles.guide}>
                <p className={styles.guideLeft}>Your unused icons will be carry forwarded too. Fair right?</p>
                <p className={styles.guideRight}>All prices are in US $-dollars.</p>
            </section>
            <section className={styles.requestMore}>
                <div className={styles.requestMoreTop}>
                    <IIcon/>
                    <p>Can’t find the right icon? No worries, just place the request and we’ll add it in like no
                        time.</p>
                </div>
                <a href="/" className={styles.requestMoreBottom}>Request Icon</a>
            </section>
            <section className={styles.premiumInfo}>
                ALL PREMIUM PLANS INCLUDED
            </section>
            <PlanFeaturesBlock/>
            <FigmaPluginBlock/>
        </SectionItem>
    );
};