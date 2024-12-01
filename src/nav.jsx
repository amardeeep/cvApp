import './nav.css'
function Nav (){
    return (
        <>
            <nav>
                <span>CV Builder</span>
                <div className="themeToggleButtons">
                    <button className='slide-up'>Light</button>
                    <button className='slide-up'>Dark</button>
                </div>
            </nav>
        </>
    )
}
export default Nav