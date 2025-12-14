const Navbar = () => {
    return (
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
        <a href="https://prebuiltui.com">
          <img
            className="h-9"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
            alt="Logo"
          />
        </a>
  
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button className="border rounded-full text-sm px-4 py-1">
            Logout
          </button>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  