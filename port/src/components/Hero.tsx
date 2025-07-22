import Navbar from "../assets/Navbar";

const Hero = () => {
    return(
        <div>
        <section >
        <Navbar/>
        <div className=" text-white flex items-center justify-center text-[60px] font-inter gap-x-[200px]">
        <div className="leading-none ml-24 flex flex-col items-center mt-[150px]">
        <div>
        <h1 className="font-medium"><span className="font-extralight">Escape </span>
                reality,</h1>
        <h1 className="font-medium"><span className="font-extralight">Embrace</span> infinity.</h1>
        </div>
        <img src="public/sign.png" alt="sign" className="mt-[-40px] mix-blend-screen"/>
        </div>
        <div>
        <img src="public/escape.jpg" alt="escape key" className="w-[632px] h-auto mix-blend-screen animate-float"  />
        </div>
        </div>
        </section>

        <section>
            <div className="mt-[125px] flex justify-center font-inter">
                <h1 className="text-white text-[81px] z-9999 absolute top-[1409px] tracking-[-0.06em]"><span className="font-thin">iam</span> 
                    <span className="font-bold"> Hadi Maliyakkal.</span>

                </h1>
                <img src="public/cristiano.png" alt="hadi" className="w-[435px] h-auto"/>
                <img src="public/bottomleftglass.png" alt="glass" className="z-9999 absolute top-[1350px] left-[538px] mix-blend-screen w-[290px] h-auto"/>

            </div>
        </section>
        </div>
    )
}

export default Hero;