import {SectionItem} from "shared/ui/SectionItem/SectionItem";
import styles from './TrustedBySection.module.scss'
import {ReactComponent as InvisionLogo} from "shared/assets/icons/invisionapp-logo.svg";
import {ReactComponent as MediumLogo} from "shared/assets/icons/medium-logo.svg";
import {ReactComponent as NotionLogo} from "shared/assets/icons/notion-logo.svg";
import {ReactComponent as SlackLogo} from "shared/assets/icons/slack-logo.svg";
import {ReactComponent as ZoomLogo} from "shared/assets/icons/zoom-logo.svg";
import {ReactComponent as AnydeskLogo} from "shared/assets/icons/anydesk-logo.svg";


const LOGOS = [
    InvisionLogo,
    MediumLogo,
    NotionLogo,
    SlackLogo,
    ZoomLogo,
    AnydeskLogo
]

export function TrustedBySection() {
    return (
        <SectionItem>
            <h4 className={styles.title}>Trusted by businesses and professionals</h4>
            <div className={styles.list}>
                {LOGOS.map(Logo => <Logo/>)}
            </div>
        </SectionItem>
    );
};