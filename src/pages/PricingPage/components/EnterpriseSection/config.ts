import {ReactComponent as ClocksIcon} from "shared/assets/icons/clocks.svg";
import {ReactComponent as SVGIcon} from "shared/assets/icons/svg-file.svg";
import {ReactComponent as PipetteIcon} from "shared/assets/icons/pipette.svg";
import {FeatureType} from "../Feature/Feature.type";
 
export const ENTERPRISE_FEATURES_BLOCK_CONFIG: FeatureType[] = [
    {
        title: 'UNLIMITED ICONS',
        description: 'Get set Go! Get in touch with our to get extended licence for your team or customers.',
        Icon: ClocksIcon
    },
    {
        title: 'HEAVY DISCOUNT',
        description: 'We have very exciting offer for very large teams. Contact our sales team, and we happy to help.',
        Icon: SVGIcon
    },
    {
        title: 'DEDICATED SUPPORT',
        description: 'We have dedicated resources for your team to manage your request on time.',
        Icon: PipetteIcon
    }
]