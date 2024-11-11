import './nav.css'
function Nav (){
    return (
        <>
            <nav>
                <span>CV Builder</span>
                <div className="themeToggleButtons">
                    <button>Light</button>
                    <button>Dark</button>
                </div>
            </nav>
        </>
    )
}
export default Nav