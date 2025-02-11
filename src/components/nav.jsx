import styles from  '../styles/nav.module.css'
function Nav (){
    return (
        <>
            <nav>
                <span>CV Builder</span>
                <div className={styles.themeToggleButtons}>
                    <button className={styles.slideUp}>Light</button>
                    <button className={styles.slideUp}>Dark</button>
                </div>
            </nav>
        </>
    )
}
export default Nav