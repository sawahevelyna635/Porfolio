import {Phone, Mail} from "lucide-react"


function Footer() {
    return(
        <footer>
       <div className="flex  bg-black h-[42vh] w-full text-white justify-between px-40 items-center">
        <div className="flex ">
        <Phone />
        <p>123-456-7890</p>
        <p>123-456-7890</p>
        </div>
        {/*  */}
        <div className="flex ">
        <Mail />
        <p>123-456-7890</p>
        <p>123-456-7890</p>
        </div>
        {/*  */}
        <div className="flex">
        <Mail />
        <p>123-456-7890</p>
        <p>123-456-7890</p>
        </div>
        </div>
       <div className="flex bg-white h-[10vh] justify-between px-40 items-center">
        <p>0888692491</p>
        <div>
            <ul className="flex gap-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
            </ul>
        </div>
       </div>
       </footer>
    )
}

export default Footer