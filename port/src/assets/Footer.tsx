const Footer = () => {
  return (
    <footer
      className="text-[10px] tracking-[-0.06em] font-inter mx-auto w-[75vw] h-[10vw] bg-black border-[0.5px] border-white relative rounded-t-xl p-6
      before:absolute before:inset-0 before:rounded-t-xl before:blur-xl before:bg-white before:opacity-20 before:-z-10 transition-all duration-1000 ease-in-out">

      <div className="text-white items-center flex h-full">
            <div className="flex flex-col font-medium">
                <p className="text-[15px]">+91 7994494704</p>
                <p className="text-[15px]">hadimaliyakkal2@gmail.com</p>
            </div>
            <div className="flex items-center justify-center w-full">
                <p className="font-thin">designed by <span className="font-medium">Hadi Maliyakkal</span></p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;