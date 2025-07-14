import clsx from "clsx";
import styles from "./Tabs.module.css";

const Tabs = ({ tabs, currentTab, onChange, className }) => {
  const handleTabClick = (tab) => (event) => {
    event.preventDefault();
    onChange(tab);
  };

  return (
    <nav className={clsx(styles.wrapper, className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={clsx(styles.tab, {
            [styles.active]: tab === currentTab,
          })}
          onClick={handleTabClick(tab)}
          role="tab"
          aria-selected={tab === currentTab}
          aria-controls={`${tab}-panel`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Tabs;