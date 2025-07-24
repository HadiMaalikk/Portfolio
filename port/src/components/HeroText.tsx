const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-80 md:text-left rouned-3xl bg-clip-text">
            {/*desktop view*/}
            <div className="flex-col hidden md:flex c-space">
                <div className="flex flex-col items-start">
                    <p className="text-5xl font-inter font-thin text-white">
                            Escape <span className="font-bold"> Reality,</span><br />
                            Embrace Infinity.
                    </p>
                </div>
            </div>
        </div>
  )
}

export default HeroText