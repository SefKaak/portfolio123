import styles from './PageContact.module.css';

export default function PageContact() {
    return <>
      <div>
        <div className={styles.container}>
     <form>
         <div className={styles.row}>
             <div>
                 <label>Nom</label>
             </div>
             <div>
                 <input type="text"  />
             </div>

         </div>
         <div className={styles.row}>
         <div>
                 <label>Courriel</label>
             </div>
         <div>
                 <input type="email"  />
             </div>

         </div>
         <div className={styles.row}>
         <div>
                 <label>Message</label>
             </div>
         <div>
                 <input className={styles.message} type="message"  />
             </div>

         </div>
         <div className={styles.row}>
         
         <div>
                 <input className={styles.bouton} type="submit"  />
             </div>

         </div>
         
     </form>
        
    
  
          </div>

      </div>
      </>
  }


