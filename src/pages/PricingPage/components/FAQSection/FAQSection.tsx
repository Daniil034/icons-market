import {SectionItem} from "shared/ui/SectionItem/SectionItem";
import styles from './FAQSection.module.scss';
import {Button} from "../../../../shared/ui/Button/Button";

export function FAQSection() {
    return (
        <SectionItem>
            <h3 className={styles.title}>
                Frequently Asked Questions
            </h3>
            <ul>
                <li className={styles.item}>
                    <h5 className={styles.itemQuestion}>Do you have a trial version before subscribe?</h5>
                    <p className={styles.itemAnswer}>
                        Yup, We are giving away many free and open-source icons to let you try and have a taste of of
                        premium assets, simply sign up for a free trial to experience most emotional charged assets.
                    </p>
                </li>
                <li className={styles.item}>
                    <h5 className={styles.itemQuestion}>Does my monthly icons limit carry forwarded?</h5>
                    <p className={styles.itemAnswer}>
                        Definitely, You monthly remaining icons balance will be carry forwarded even plan expired. You
                        can use anytime your remaining balance within a 1 year from your last subscription date.
                    </p>
                </li>
                <li className={styles.item}>
                    <h5 className={styles.itemQuestion}>Why don’t you have a unlimited icons plan?</h5>
                    <p className={styles.itemAnswer}>
                        We do have unlimited icon use plan for enterprise only. You can set your monthly limit for your
                        team and can subscribe under our enterprise plan. We do have a dedicated support team for you
                        too.
                    </p>
                </li>
                <li className={styles.item}>
                    <h5 className={styles.itemQuestion}>How do you accept our icon request?</h5>
                    <p className={styles.itemAnswer}>
                        After you submit icon request, we do make sure the requested icon doesn’t exists in our library,
                        if not then we drop a icon request to our pipeline, and our best effort to upload within 24-48
                        hours.
                    </p>
                </li>
                <li className={styles.item}>
                    <h5 className={styles.itemQuestion}>What is minimum seats required for the enterprise plan?</h5>
                    <p className={styles.itemAnswer}>
                        Our enterprise plan start with minimum of 5 users and we give away heavy discount to enterprise
                        tier. Please contact our sales team team to get the best offer today!
                    </p>
                </li>
                <li className={styles.item}>
                    <h5 className={styles.itemQuestion}>What are the accepted payment methods?</h5>
                    <p className={styles.itemAnswer}>
                        We are accepting payment vis Stripe. Once payment is made successfully, enjoy our premium icons
                        library or download the icon that you need.
                    </p>
                </li>
                <li className={styles.item}>
                    <h5 className={styles.itemQuestion}>Can I cancel my subscription and ask for a refund of my
                        purchase?</h5>
                    <p className={styles.itemAnswer}>
                        We want you to be happy. So, if you are not completely satisfied with our offered product, we
                        offer a 7-day refund guarantee. You can get the full refund within 7 days from the purchase
                        date. You didn’t get to use the service, that is, you haven’t downloaded any icon.
                    </p>
                </li>
                <li className={styles.item}>
                    <h5 className={styles.itemQuestion}>Your questions not listed above?</h5>
                    <p className={styles.itemAnswer}>
                        If you didn't find the answer to your question
                    </p>
                    <Button variant="white" className={styles.itemButton}>
                        Send a Message
                    </Button>
                </li>
            </ul>
        </SectionItem>
    );
};