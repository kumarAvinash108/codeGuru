import styles from './Shimmer.module.css';
function Shimmer(){
    return(
        <div className="h-[40vh] w-full py-4" style={{scrollbarWidth:'none'}}>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
        </div>
    )
}
export default Shimmer;