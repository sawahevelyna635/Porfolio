import { Phone, Mail } from "lucide-react"

function Contact() {
    return (
        <section className="h-[100vh] w-full">
            {/* This is the first div in this sec that contain h4 & h2 */}
            <div className="flex flex-col items-center ">
                <h4>Get in touch</h4>
                <h2 className="text-[2.3rem] font-bold ">Connect with me with Confidence</h2>
            </div>
            {/*This is the second div in this section that contain the para & calls*/}
            <div className="flex  justify-between px-24 mt-8 ">
                <div className="w-[40%] flex flex-col gap-8 ">
                    <p className="text-[1.2rem] font-light">
                        Please fill out the form on this section to contact with me.
                        Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
                    </p>
                    <div className="flex gap-4 text-[1.2rem] items-center">
                        <Phone size={50} />
                        <div>
                        <p>Call</p>
                        <p>0888692491</p>
                        </div>
                    </div>
                    <div className="flex gap-4 text-[1.2rem] items-center">
                        <Mail size={50}/>
                        <div>
                        <p>Mail</p>
                        <p>sawahevelyna635@gmail.com</p>
                        </div>
                    </div>
                </div>
                {/*This is the third div that contain the form */}
                <div className="w-[50%]">
                    <form className="flex flex-col gap-4">
                        <input className="bg-gray-200 px-8 py-5 rounded-md" type="text" placeholder="Your Name" />
                        <input className="bg-gray-200 px-8 py-5 rounded-md" type="text" placeholder="Your Email" />
                        <input className="bg-gray-200 px-8 py-5 rounded-md" type="text" placeholder="Your Subject" />
                        <textarea className="bg-gray-200 px-8 py-5 rounded-md" placeholder="Your Message" />
                        <button className="bg-gray-200 px-8 py-5 rounded-md text-blue-500 w-[15rem]">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )


}

export default Contact