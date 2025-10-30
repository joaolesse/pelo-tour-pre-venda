import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hugo-guilherme-novo.png";

const HeroSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e e-mail.",
        variant: "destructive",
      });
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    setSubmitted(true);
    toast({
      title: "🎟️ Você está na lista VIP da pré-venda!",
      description: "Aguarde novidades no seu e-mail.",
    });
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    return value;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-8 md:pb-12 px-4 bg-black">
      <div className="container max-w-7xl mx-auto animate-fade-in px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Coluna Esquerda - Formulário */}
          <div className="order-2 lg:order-1">
            <div className="mb-6 md:mb-8">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-3 md:mb-4 leading-tight tracking-tight">
                Garanta seu acesso antecipado à pré-venda do show{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Hugo & Guilherme
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-2 font-display font-bold">No Pelo Tour</p>
              <p className="text-sm md:text-base lg:text-lg text-white/70 font-sans">
                Cadastre-se e seja o primeiro a receber o link de compra oficial.
              </p>
            </div>

            {!submitted ? (
              <form 
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-md p-4 md:p-8 rounded-2xl border border-white/20 shadow-2xl"
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">
                        Nome completo *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-display font-bold py-5 md:py-6 text-base md:text-lg rounded-xl animate-glow-pulse shadow-lg"
                  >
                    Quero participar da pré-venda
                  </Button>
                </div>
              </form>
            ) : (
              <div className="bg-primary/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-primary/30 text-center space-y-4 md:space-y-6">
                <div className="text-5xl md:text-6xl mb-4">🎟️</div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Você está na lista VIP da pré-venda!
                </h2>
                <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6">
                  Aguarde novidades no seu e-mail.
                </p>
                
                <div className="pt-4 border-t border-white/20">
                  <p className="text-base md:text-lg text-white/90 font-semibold mb-3 md:mb-4">
                    📱 Entre no grupo exclusivo do WhatsApp
                  </p>
                  <p className="text-xs md:text-sm text-white/70 mb-3 md:mb-4">
                    Receba em primeira mão todas as informações sobre a pré-venda!
                  </p>
                  <Button
                    onClick={() => window.open('https://chat.whatsapp.com/seu-link-do-grupo', '_blank')}
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-5 md:py-6 px-6 md:px-8 text-base md:text-lg rounded-xl transition-all w-full md:w-auto"
                  >
                    <svg 
                      className="w-6 h-6 mr-2" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Entrar no grupo VIP
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Coluna Direita - Imagem */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden">
              <img 
                src={heroImage} 
                alt="Hugo & Guilherme - No Pelo Tour" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
