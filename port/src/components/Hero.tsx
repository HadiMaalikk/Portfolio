import Navbar from "../assets/Navbar";
import Bento from "../assets/Bento";

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
        <img src="public/escape.jpg" alt="escape key" className="w-[632px] h-auto mix-blend-screen animate-float1"  />
        </div>
        </div>
        </section>

        <section>
            <div className="mt-[123px] flex justify-center font-inter">
                <h1 className="text-white text-[81px] z-[50] absolute top-[1409px] tracking-[-0.06em]"><span className="font-thin">iam</span> 
                    <span className="font-bold"> Hadi Maliyakkal.</span>
                </h1>
                <img src="public/cristiano.png" alt="hadi" className="z-[10] w-[435px] h-auto relative"/>
                <img src="public/bottomright.jpg" alt="glass" className="animate-float1 opacity-70 rotate-[0deg] z-[999] absolute top-[1385px] left-[838px] mix-blend-screen w-[201px] h-auto"/>
                <img src="public/bottomleftglass.jpg" alt="glass" className="animate-float1 opacity-70 rotate-[0deg] z-[999] absolute top-[1410px] left-[590px] mix-blend-screen w-[201px] h-auto"/>
                <img src="public/bottomleftglass.jpg" alt="glass" className="animate-float2 opacity-70 rotate-[100deg] z-[999] absolute top-[1020px] left-[965px] mix-blend-screen w-[201px] h-auto"/>
                <img src="public/certiglass.jpg" alt="glass" className="animate-float1 opacity-70 z-[999] absolute top-[1298px] left-[405px] mix-blend-screen w-[201px] h-auto"/>
                <img src="public/hobbyglass.jpg" alt="glass" className="animate-float2 opacity-70 rotate-[90deg] z-0 absolute top-[1258px] left-[1070px] mix-blend-screen w-[201px] h-auto"/>
                <img src="public/aboveportglass.jpg" alt="glass" className="animate-float1 opacity-70 rotate-[-40deg] z-[999] absolute top-[780px] left-[825px] mix-blend-screen w-[201px] h-auto"/>
                <img src="public/hobbyglass.jpg" alt="glass" className="animate-float2 opacity-70 rotate-[-90deg] z-0 absolute top-[950px] left-[380px] mix-blend-screen w-[201px] h-auto"/>
            
                <Bento to="/hobbies" title="hobbies." className="z-0 absolute top-[850px] left-[490px] px-2 py-10 text-[#CACACA] text-[40px] flex justify-center items-center border border-white/30 bg-[#5050501A] backdrop-blur rounded-[20px] w-[200px] h-[200px] font-inter font-medium"/>
                <Bento to="/resume" title="resume." className="z-[99] absolute top-[1095px] left-[338px] px-2 py-10 text-[#CACACA] text-[53px] flex justify-center items-center border border-white/30 bg-[#5050501A] backdrop-blur rounded-[20px] w-[274px] h-[274px] font-inter font-medium"/>
                <Bento to="/portfolio" title="portfolio." className="z-[99] absolute top-[927px] left-[856px] px-2 py-10 text-[#CACACA] text-[40px] flex justify-center items-center border border-white/30 bg-[#5050501A] backdrop-blur rounded-[20px] w-[200px] h-[200px] font-inter font-medium"/>
                <Bento to="/certificate" title="certificates." className="z-0 absolute top-[1220px] left-[960px] px-2 py-10 text-[#CACACA] text-[33px] flex justify-center items-center border border-white/30 bg-[#5050501A] backdrop-blur rounded-[20px] w-[200px] h-[200px] font-inter font-medium"/>
            </div>
        </section>


        <section>
        <div className="flex justify-center tracking-[-0.06em]">
        <div className="flex flex-col items-start text-white font-inter mt-[150px]">
            <h1 className="text-[40px]"><span className="font-thin">about</span> 
                    <span className="font-bold"> me.</span>
            </h1>
            <p className="text-justify w-[600px] text-[20px] text-[#CACACA]"> 
                A 21-year old dude who needs to get his sh-t together. Also knows how to print “hello world”. Alright, Let’s get real. I am a Designer and Full Stack Developer proficient in design tools like Figma, Photoshop & Illustrator allowing me to create user-friendly and visually engaging interfaces. In addition to that i have experience with React.js, HTML/CSS, Python, JavaScript, C, C++ & Java. Apart from these, I am deeply interested in Generative AI & Automation. I am actively exploring the field and learning new things everyday thereby sharpening my skills.
            </p>
            <img src="public/infinity.jpg" alt="inf" className="mt-[250px] grayscale " />
            
            </div>
            
            </div>
            <h1 className="flex justify-center text-white tracking-[-0.06em] font-inter text-[35px]">
                <span className="font-bold"> Infinity </span> <span className="font-thin">can be anything - all it takes is the courage to </span><span className="font-bold">leap.</span>
            </h1>
        </section>
        </div>
    )
}

export default Hero;