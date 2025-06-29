import { useState } from "react";
import styles from "./ToggleHeader.module.css";

const ToggleHeader = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            {isOpen && <div className={styles.content}>{children}</div>}
            <button className={styles.toggleButton} onClick={toggle}>
                {isOpen ? "閉じる ▲" : "開く ▼"}
            </button>
        </div>
    );
};

export default ToggleHeader;
