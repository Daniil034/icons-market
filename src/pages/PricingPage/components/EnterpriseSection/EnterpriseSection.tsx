import styles from './EnterpriseSection.module.scss';
import {ENTERPRISE_FEATURES_BLOCK_CONFIG} from "./config";
import {Feature} from "../Feature/Feature";
import {Button} from "shared/ui/Button/Button";
import {SectionItem} from "shared/ui/SectionItem/SectionItem";

export function EnterpriseSection() {
    return (
        <SectionItem>
            <div className={styles.header}>
                <h3 className={styles.headerTop}>OpenStroke for Enterprise</h3>
                <p className={styles.headerBottom}>Running out of icon limit each month, Go unlimited</p>
            </div>
            <div className={styles.featuresBlock}>
                {ENTERPRISE_FEATURES_BLOCK_CONFIG.map(feature => (
                    <Feature
                        className={styles.feature}
                        Icon={feature.Icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
            <Button variant="yellow" className={styles.button} type="button">
                Contact Sales
            </Button>
        </SectionItem>
    );
};