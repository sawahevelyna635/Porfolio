  


function Experience() {
    return (
     <section className="h-[100vh] w-full flex flex-col px-10">
        <div className="flex flex-col items-center gap-4">
        <h2 className="text-[3rem] font-semibold">My Resume</h2>
        <h4 className="text-[1.5rem] font-bold"><span className="text-red-500">Experience</span> |  Education</h4>
        </div>
        <div className="flex justify-evenly items-center gap-4 px-8 mt-10">
      {/* Designer Card */}

      <div className="border border-black p-6">
        <h2 className="text-[1.5rem] font-semibold">Designer</h2>
        <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded">2022 - Present</button>
        <p className="text-[1.1rem] font-light">Given let waters air sea had you'll, may seed abundantly fish. Were, you'll earth forth winged above brought. 
        Own darkness they're him can't fourth sea place have.</p>
      </div>

      {/* Web Developer Card */}

      <div className="border border-black p-6">
        <h2 className="text-[1.5rem] font-semibold">Web Developer</h2>
        <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded">2022 - Present</button>
        <p className="text-[1.1rem] font-light">Given let waters air sea had you'll, may seed abundantly fish. Were, you'll earth forth winged above brought. 
        Own darkness they're him can't fourth sea place have.</p>
      </div>

      {/* Consultant Card */}
      <div className="border border-black p-6">
        <h2 className="text-[1.5rem] font-semibold">Consultant</h2>
        <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded">2022 - Present</button>
        <p className="text-[1.1rem] font-light">Given let waters air sea had you'll, may seed abundantly fish. Were, you'll earth forth winged above brought. 
        Own darkness they're him can't fourth sea place have.</p>
      </div>
        </div>
     </section>
    )   
}

export default Experience