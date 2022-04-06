import styles from './Image.module.css';
import image1 from '../ressources/image1.jpeg';



export default function Image() {

    return <>
        <div>
        <img src={image1} alt="" className={styles.img}  />   
        </div>

        
    </>

}