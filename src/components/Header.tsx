const Header = () => {
  return (
    <header className="fixed top-0 w-full px-8 py-6 backdrop-glass z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-primary/50 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary animate-glow">
            AutoFlow
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;