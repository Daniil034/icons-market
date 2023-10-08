import figmaPluginImg from 'shared/assets/img/figma-plugin.png'
import {ReactComponent as FigmaIcon} from 'shared/assets/icons/figma.svg'
import styles from './FigmaPluginBlock.module.scss'
import {Button} from "../../../../shared/ui/Button/Button";

export function FigmaPluginBlock() {
    return (
        <section className={styles.root}>
            <img src={figmaPluginImg} alt="Figma plugin"/>
            <div className={styles.bottom}>
                <FigmaIcon className={styles.figmaIcon}/>
                <div className={styles.bottomtext}>
                    <h3 className={styles.bottomtextTitle}>
                        Let’s connect to Figma
                    </h3>
                    <p className={styles.bottomtextDescription}>
                        Yah! We know you love Figma so we’re coming up
                        with the Figma plugin!
                    </p>
                </div>
                <Button variant="yellow">
                    Try Figma Plugin
                </Button>
            </div>
        </section>
    );
};