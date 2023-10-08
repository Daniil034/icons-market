import {Intro} from "./components/Intro/Intro";
import {PlansSection} from "./components/PlansSection/PlansSection";
import {EnterpriseSection} from "./components/EnterpriseSection/EnterpriseSection";
import {FAQSection} from "./components/FAQSection/FAQSection";
import {TrustedBySection} from "./components/TrustedBySection/TrustedBySection";

export function PricingPage() {
    return (
        <div>
            <Intro/>
            <PlansSection/>
            <EnterpriseSection/>
            <FAQSection/>
            <TrustedBySection/>
        </div>
    );
};