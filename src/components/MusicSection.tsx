import { Music2, Youtube } from "lucide-react";

const MusicSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-secondary/20">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Music2 className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre no clima do <span className="text-primary">No Pelo Tour</span>
          </h2>
          <p className="text-lg text-white/70">
            Ouça agora os maiores sucessos de Hugo & Guilherme enquanto garante sua vaga na pré-venda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Spotify Player */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1DB954] rounded-full flex items-center justify-center">
                <Music2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold">Ouça no Spotify</span>
            </div>
            <iframe 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/artist/0uRkUKxvD5BjGAgHhFSX3X?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          {/* YouTube Player */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#FF0000] rounded-full flex items-center justify-center">
                <Youtube className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold">Assista no YouTube</span>
            </div>
            <iframe 
              width="100%" 
              height="320" 
              src="https://www.youtube.com/embed/videoseries?list=PLgPpF7C1MSz4zDVu2iXmpV4NfL1zNjQn_" 
              title="Hugo & Guilherme" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ borderRadius: '12px' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
