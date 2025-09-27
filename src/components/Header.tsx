import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full px-8 py-6 backdrop-glass z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 shadow-lg backdrop-blur-sm">
          <img 
            src={logo} 
            alt="AutoFlow" 
            className="h-16 w-auto animate-glow hover-scale transition-all duration-300 drop-shadow-[0_0_20px_rgba(147,51,234,0.5)]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;