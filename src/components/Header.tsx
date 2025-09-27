import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full px-8 py-6 backdrop-glass z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-primary/50 shadow-2xl">
          <img 
            src={logo} 
            alt="AutoFlow" 
            className="h-20 w-auto animate-glow hover-scale transition-all duration-300 drop-shadow-[0_0_30px_rgba(147,51,234,0.8)] filter brightness-125 contrast-125"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;