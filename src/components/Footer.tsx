import logo from "@/assets/guicheweb-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img 
            src={logo} 
            alt="GuichêWeb" 
            className="h-7"
          />
          
          <p className="text-white/70 text-sm text-center">
            Ingressos oficiais de eventos em todo o Brasil
          </p>
          
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-white/60 hover:text-primary transition-colors">
              Termos de uso
            </a>
            <span className="text-white/30">|</span>
            <a href="#" className="text-white/60 hover:text-primary transition-colors">
              Política de privacidade
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
          © {currentYear} GuichêWeb. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
