import logo from "@/assets/logo.png";
import headerText from "@/assets/header-text.png";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-start gap-6">
          <img 
            src={logo} 
            alt="AutoFlow Logo" 
            className="h-[300px] w-[200px] object-cover"
          />
          <img 
            src={headerText} 
            alt="Agentes IA Especializados" 
            className="h-auto w-auto max-h-[120px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;