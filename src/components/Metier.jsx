import styles from './Metier.module.css';
import metier from '../ressources/metier.png';


export default function Metier() {

    return <>
       

        <div>
        <img src={metier} alt="" className={styles.mtr}  />   
        </div>
    </>

}