import BlogImage from "../assets/Web Design.jfif"

function Blog() {
    return(
        <section className="h-[130vh] w-full  px-40">
            <div className="flex flex-col gap-4 justify-center items-center">
           <h4 className="font-bold text-[1.2rem]">Latest Updates</h4> 
           <h2 className="text-[3rem] font-bold">My Blog</h2>
           <p className="text-center text-[1.2rem]">We offer high quality products for competitive prices.
             Our main goal is customer satisfaction</p>
             </div>
             {/*  */}
             <div className="mt-9">
             <div className="flex gap-9 items-center">
                <img className="h-[40vh] w-[30%] rounded" src={BlogImage} alt="BlogImage" />
                <div className="flex flex-col gap-2">
                <h3 className="text-[1.2rem]">Web Design</h3>
                <h2 className="text-[1.4rem] font-bold">How to create a simple portfolio website</h2>
                <h4>August 20, 2022</h4>
                </div>
                <button className="rounded border border-black px-6 py-2">Full Story</button>
                </div>
             </div>
             {/*  */}
             <div className="flex  gap-9 items-center">
                <img className="h-[40vh] w-[30%] rounded mt-8" src={BlogImage} alt="BlogImage" />
                <div className="flex flex-col gap-2">
                <h3 className="text-[1.2rem]">Web Design</h3>
                <h2 className="text-[1.4rem] font-bold">How to create a simple portfolio website</h2>
                <h4>August 20, 2022</h4>
             </div>
             <button className="rounded border border-black px-6 py-2">Full Story</button>
           </div>
        </section>
    )
}

export default Blog