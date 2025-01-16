import AboutImage from "../assets/About.jfif";
import Signature from "../assets/about-me-signature.png";

function About() {
    return(
      <section className="h-[100vh] w-full flex justify-between items-center gap-10 px-10">
        <div className="w-[40%] h-[80%]">
          <img className=" h-[100%] w-[90%]" src={AboutImage} alt="Image" />
        </div>
        <div className="flex flex-col gap-4 w-[50%]">
         <h2 className="text-[2rem] font-bold">About Me</h2>
        <p className="text-[1.1rem] font-light">Given let waters air sea had you'll, may seed abundantly fish. Were, you'll earth forth winged above brought. 
        Own darkness they're him can't fourth sea place have.</p>
        <p className="text-[1.1rem] font-light">So the above May stars cattle fruitful face shall. Tree it, winged. 
        Every signs male firmament us. Morning him.</p>
        <img className="h-[20%] w-[40%]" src={Signature} alt="Image" />
        </div>
      </section>
    )
}

export default About
