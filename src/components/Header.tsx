import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-start">
          <img 
            src={logo} 
            alt="AutoFlow Logo" 
            className="h-[150px] w-[100px] object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;