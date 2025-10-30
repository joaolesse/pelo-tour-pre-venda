import logo from "@/assets/guicheweb-logo-oficial.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between flex-wrap gap-2">
        <img 
          src={logo} 
          alt="GuichêWeb" 
          className="h-7 md:h-9"
        />
        <div className="text-xs md:text-sm text-white/80 text-center md:text-right">
          Pré-venda exclusiva – <span className="text-primary font-semibold">No Pelo Tour</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
