
import styles from "./styles.module.scss";

const Header = () => (
    <header className={styles["header"]}>
        <div className={styles["header__title"]}>
            Project made to show that files can be stored in a distributed file system(IPFS) & their hashes in the blockchain with some basic metadata.
        </div>
    </header>
);

export default Header;
