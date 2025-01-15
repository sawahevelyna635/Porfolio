import HeroImage from "../assets/hero.jpg"


function Hero() {
    return(
        <div className="flex bg-white h-[88vh] w-full text-white justify-between px-10 bg-cover bg-center bg-no-repeat" 
        style={{backgroundImage: `url(${HeroImage})`}}>
            <div className="flex flex-col w-[40%] justify-center  h-[100%]  text-black">
            <h4 className="font-bold text-[1.2rem]">Hi</h4>
            <h2 className="font-semibold text-[1.6rem]">I am Evelyna B. Sawah</h2>
            <h1 className="text-[3rem] font-bold">Creative Graphic and Web Designer</h1>
            <button className="bg-black w-[10rem] h-[2.5rem] text-white">See More</button>
            </div>
            </div>
    )
}

export default Hero