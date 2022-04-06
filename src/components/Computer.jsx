import styles from './Computer.module.css';
import computer from '../ressources/background.jpg';


export default function Computer() {

    return <>
       

        <div>
        <img src={computer} alt="" className={styles.cmp}  />   
        </div>
    </>

}