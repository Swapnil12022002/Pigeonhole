import EthereumLogo from "images/ethereum-logo.png";
import IPFSLogo from "images/ipfs-logo.png";
import ReactLogo from "images/react-logo.png";
import TruffleLogo from "images/truffle-logo.png";
import FPLogo from "images/fp-logo.png";
import styles from "./styles.module.scss";

const Footer = () => (
    <footer className={styles["footer"]}>
     <div className={styles["footer__subtitle"]}>Technologies which have been used in this Project: Solidity, IPFS, Truffle, React(UI)</div>
    <div className={styles["footer__images"]}>
    <img src={EthereumLogo} alt="Ethereum logo" />
    <img src={IPFSLogo} alt="IPFS logo" />
    <img src={TruffleLogo} alt="Truffle logo" />
    <img src={ReactLogo} alt="React logo" />
</div>
<img src={FPLogo} alt="FP logo" />
        <span>Made by Team PigeonHole ©️ 2022</span>
        
</footer>
);


export default Footer;
