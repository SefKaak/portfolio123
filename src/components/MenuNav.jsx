import styles from './MenuNav.module.css';
import {Work, Home, Mail} from "@material-ui/icons";
import {Link, NavLink} from 'react-router-dom';

export default function MenuNav() {
    return <div>

<a className={styles.name}>Seif Kaak</a>
   
  
            <div className={styles.itemContainer}>
            <Home className={styles.icon}/>
           <Link to="/" className={({isActive}) =>  isActive ? styles.actif : ''}> 
           Accueil
           </Link>
            </div>
            
            <div className={styles.itemContainer}>
            <Work className={styles.icon}/>
            <Link to="/projet1" className={({isActive}) =>  isActive ? styles.actif : ''}>
               Projet1
               </Link>
            
            </div>

            <div className={styles.itemContainer}>
            <Work className={styles.icon}/>
            <Link to="/projet2" className={({isActive}) =>  isActive ? styles.actif : ''}> 
            Projet2
            </Link>
            
            </div>

            <div className={styles.itemContainer}>
            <Mail className={styles.icon}/>
            <Link to="/contact" className={({isActive}) =>  isActive ? styles.actif : ''}> 
            Contact
            </Link>
            
            </div>
  
  </div>
}