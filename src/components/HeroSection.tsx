import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hugo-guilherme-hero.jpg";

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
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container max-w-2xl mx-auto animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Garanta seu acesso antecipado à pré-venda do show{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hugo & Guilherme
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-2">No Pelo Tour</p>
          <p className="text-lg text-white/70">
            Cadastre-se e seja o primeiro a receber o link de compra oficial.
          </p>
        </div>

        {!submitted ? (
          <form 
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl"
          >
            <div className="space-y-4">
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

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold py-6 text-lg rounded-xl animate-glow-pulse"
              >
                Quero participar da pré-venda
              </Button>
            </div>
          </form>
        ) : (
          <div className="bg-primary/10 backdrop-blur-md p-8 rounded-2xl border border-primary/30 text-center">
            <div className="text-6xl mb-4">🎟️</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Você está na lista VIP da pré-venda!
            </h2>
            <p className="text-white/80">
              Aguarde novidades no seu e-mail.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
