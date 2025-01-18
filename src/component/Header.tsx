

function Header() {
    return(
        <header className="flex bg-black h-[12vh] w-full text-white justify-between px-10">
            <div className="flex w-[40%] justify-between items-center font-bold text-[2rem]">
              <a href="#">Eve</a>
            </div>
            <nav className="flex w-[30%] justify-between">
                <ul className="flex w-full justify-between items-center gap-4 font-semibold">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header