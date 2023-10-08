import {FeatureType} from "../Feature/Feature.type";
import {ReactComponent as ClocksIcon} from "shared/assets/icons/clocks.svg";
import {ReactComponent as SVGIcon} from "shared/assets/icons/svg-file.svg";
import {ReactComponent as PipetteIcon} from "shared/assets/icons/pipette.svg";
import {ReactComponent as FigmaIcon} from "shared/assets/icons/figma.svg";
import {ReactComponent as BucketIcon} from "shared/assets/icons/bucket.svg";
import {ReactComponent as CalendarIcon} from "shared/assets/icons/calendar.svg";
import {ReactComponent as PenIcon} from "shared/assets/icons/pen.svg";
import {ReactComponent as ScaleIcon} from "shared/assets/icons/scale.svg";
import {ReactComponent as PointerIcon} from "shared/assets/icons/pointer.svg";

export const PLAN_FEATURES_BLOCK_CONFIG: FeatureType[] = [
    {
        title: 'ANIMATED SVG',
        description: 'Make your design more meaningful interactive using animated svg.',
        Icon: ClocksIcon
    },
    {
        title: 'ALL FORMATS',
        description: 'Export in all formats, .svg, animated .svg, png, and pdf.',
        Icon: SVGIcon
    },
    {
        title: 'COLOR EDITOR',
        description: 'Match our icons with your brand by recoloring quickly.',
        Icon: PipetteIcon
    },
    {
        title: 'FIGMA PLUGIN',
        description: 'Simply drag & drop assets onto your Figma or Figjam canvas.',
        Icon: FigmaIcon
    },
    {
        title: 'ADD TO BUCKET',
        description: 'Save your favorite icon to bucket for systemic use.',
        Icon: BucketIcon
    },
    {
        title: 'WEEKLY UPDATES',
        description: 'We do expand & improve library that includes new style, improved version.',
        Icon: CalendarIcon
    },
    {
        title: 'VECTOR EDIT',
        description: 'Customize in our app and in your vector design apps easily.',
        Icon: PenIcon
    },
    {
        title: 'SCALE TO ANY SIZE',
        description: 'Scale in pixel-perfect detail to any size that you want.',
        Icon: ScaleIcon
    },
    {
        title: 'REQUEST ICON',
        description: 'Can’t find something in our library? We might make it for you. Promise!',
        Icon: PointerIcon
    }
]