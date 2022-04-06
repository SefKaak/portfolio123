import styles from './Header.module.css';
import MenuNav from './MenuNav';


export default function Header() {
    return <header>

        <div className={styles.header}>
            
        <MenuNav />

          </div>

    </header>
}