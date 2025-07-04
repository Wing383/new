import { useState } from "react";
import styles from "./ToggleHeader.module.css";

const ToggleHeader = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={styles.wrapper}>
            {/*@fix7:確かに翼の方法「{isOpen && <div className={styles.content}>{children}</div>}」
            でも全然うまくいくわ。アニメーションない場合は最初に書いてくれた書き方で全然いいと思うわ。
            ただここに枠が上に移動したり下に降りたりするモーションとかつくとそのモーション通りにいかないから
            モーションがつく場合どういう感じにコードを書けばいいのか？という修正版をここでは書いておく。
            */}
            {/*ーーーーーーーーーーーー↓モーションついた場合↓ーーーーーーーーーーーー*/}
            {/*@fix7:className=の値を開いている際と閉じている際で変更させる
            (※ここで二つ以上の CSS クラスを動的に結合。「※アニメーション付ける際は
            (普通のスタイルシートコード+アニメーションのスタイルシートコード)の組み合わせで実装させることが多いいらしい」
            
            「閉じている際のスタイル or 開いている際のスタイル & アニメーションのモーションのスタイル」*/}
            <div className={`${styles.content} ${isOpen ? styles.open : styles.closed}`}>
                {children}
            </div>
            {/*ーーーーーーーーーーーー↑モーションついた場合↑ーーーーーーーーーーーー*/}

            <button className={styles.togglebutton} onClick={toggle}>
                {isOpen ? "閉じる ▲" : "開く ▼"}
            </button>
        </div>
    );
};

export default ToggleHeader;
