import {ReactNode, useState} from "react";

type ClassNames = {
    root: string,
    header: string,
    headerElement: (isSelected: boolean) => string,
    content: string,
}

type Tab = {
    tabName: ReactNode,
    content: ReactNode,
}

type Props = {
    tabs: Tab[],
    classNames?: Partial<ClassNames>
};

export function Tabs(props: Props) {
    const {tabs, classNames} = props;
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const handleTabChange = (tab: Tab) => {
        setSelectedTab(tab)
    }

    return (
        <section className={classNames?.root}>
            <div className={classNames?.header}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabChange(tab)}
                        type="button"
                        className={classNames?.headerElement?.(tab.tabName === selectedTab.tabName)}
                    >
                        {tab.tabName}
                    </button>
                ))}
            </div>
            <div className={classNames?.content}>
                {selectedTab.content}
            </div>
        </section>
    );
};