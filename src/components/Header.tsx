import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full px-8 py-6 backdrop-glass z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto">
        <img 
          src={logo} 
          alt="AutoFlow" 
          className="h-12 animate-glow"
        />
      </div>
    </header>
  );
};

export default Header;