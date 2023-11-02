import Image from "next/image";
import TarmacLogoWithName from "../../public/tarmac-logo-with-name.svg"
import styles from '@/styles/Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Image src={TarmacLogoWithName} alt="Tarmac Logo" height={30} width={100} marginLeft={'10%'}/>
            <p style={{ marginLeft: '1%'}}>Document Center</p>
        </header>
    )
}

export default Header;