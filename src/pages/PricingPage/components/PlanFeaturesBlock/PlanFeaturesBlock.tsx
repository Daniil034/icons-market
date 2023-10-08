import {PLAN_FEATURES_BLOCK_CONFIG} from "./config";
import {Feature} from "../Feature/Feature";
import styles from './PlanFeaturesBlock.module.scss';

export function PlanFeaturesBlock() {
    return (
        <section className={styles.root}>
            {PLAN_FEATURES_BLOCK_CONFIG.map(feature => (
                <Feature
                    Icon={feature.Icon}
                    title={feature.title}
                    description={feature.description}
                    className={styles.feature}
                />
            ))}
        </section>
    );
};