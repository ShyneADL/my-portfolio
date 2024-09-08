const StylishButton = () => {
  return (
    <div
      role="button"
      className={`bg-white text-black font-bold text-[1.4rem] text-center md:px-8 px-4 cursor-pointer md:py-3 py-2 rounded-[16px] transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]`}
    >
      View More Projects
    </div>
  );
};

export default StylishButton;
