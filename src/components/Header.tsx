import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full px-6 py-4 bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <img 
            src={logo} 
            alt="AutoFlow Logo" 
            className="h-[100px] w-[50px] object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;