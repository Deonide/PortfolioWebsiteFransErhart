const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 footerColors bg-black py-4 flex justify-center items-center border-t border-[#27272a] z-50">
      <div className="w-full max-w-5xl flex flex-row justify-between items-center gap-3 px-4">
        <div className="px-4 py-2 bg-black border border-[#27272a] rounded-full flex items-center justify-center">
          <span className="tracking-tighter font-extralight text-sm sm:text-lg">
            © Frans Erhart

          </span>
        </div>
        <a
          href="mailto:franserhart12@gmail.com"
          className="px-4 py-2 bg-black border border-[#27272a] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-800"
        >
          <span className="tracking-tighter font-extralight text-sm sm:text-lg">
            franserhart12@gmail.com
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;