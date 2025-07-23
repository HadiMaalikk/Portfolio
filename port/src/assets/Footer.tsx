const Footer = () => {
  return (
    <footer
      className="text-[10px] tracking-[-0.06em] font-inter mx-auto w-[75vw] h-[10vw] bg-black border-[0.5px] border-white relative rounded-t-xl p-6
      before:absolute before:inset-0 before:rounded-t-xl before:blur-xl before:bg-white before:opacity-20 before:-z-10">

      <div className="text-white items-center flex h-full">
        <div className="flex flex-col font-medium">
            <h1 className="text-[15px]">+91 7994494704</h1>
            <p className="text-[15px]">hadimaliyakkal2@gmail.com</p>
        </div>
            <h1 className="font-thin">designed by <span className="font-medium">Hadi Maliyakkal</span></h1></div>
    </footer>
  );
};

export default Footer;