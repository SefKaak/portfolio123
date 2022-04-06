import styles from './Burger.module.css';
import burger from '../ressources/burger.png';


export default function Burger() {

    return <>
       

        <div>
        <img src={burger} alt="" className={styles.brg}  />   
        </div>
    </>

}