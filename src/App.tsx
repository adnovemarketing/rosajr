/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  History, 
  Brain, 
  Briefcase, 
  Building2, 
  Users, 
  MessageCircle, 
  Mail, 
  Share2 
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#f8f9fa]/90 backdrop-blur-md border-b border-[#041627]/5">
    <div className="flex items-center px-6 md:px-12 py-3 md:py-4 max-w-7xl mx-auto">
      <div className="flex-1 text-xl font-bold tracking-tighter text-[#041627] font-headline">
        Rosa Jr. Advogados
      </div>
      <div className="hidden md:flex items-center gap-10 font-headline tracking-tight text-sm">
        <a href="#home" className="text-[#775a19] font-semibold border-b-2 border-[#775a19] pb-1">Home</a>
        <a href="#sobre" className="text-[#44474c] hover:text-[#041627] transition-colors">O Escritório</a>
        <a href="#atuacao" className="text-[#44474c] hover:text-[#041627] transition-colors">Áreas de Atuação</a>
        <a href="#equipe" className="text-[#44474c] hover:text-[#041627] transition-colors">Equipe</a>
        <a href="#contato" className="text-[#44474c] hover:text-[#041627] transition-colors">Contato</a>
      </div>
      <div className="flex-1 flex justify-end">
        <button 
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#041627] text-white px-5 py-2 rounded-sm font-label text-[10px] font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Consultoria Estratégica
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center bg-[#041627] overflow-hidden pt-16">
    <div className="absolute inset-0 bg-gradient-to-br from-[#041627] to-[#1a2b3c] opacity-90"></div>
    <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 relative z-10 py-16">
      <div className="md:col-span-7 flex flex-col justify-center">
        <span className="text-[#775a19] tracking-[0.3em] uppercase text-xs font-bold mb-6 block font-label">
          Seis Décadas de Legado
        </span>
        <h1 className="text-white font-headline text-5xl md:text-7xl leading-tight mb-8 tracking-tighter">
          Seis décadas de excelência jurídica. Uma nova era de <span className="italic text-[#e9c176]">visão estratégica.</span>
        </h1>
        <div className="flex flex-wrap items-center gap-6">
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#775a19] text-white px-8 py-4 rounded-sm font-semibold hover:bg-[#5d4201] transition-colors font-label"
          >
            Consultoria Estratégica
          </button>
          <a href="#atuacao" className="text-white flex items-center gap-2 group">
            <span className="w-8 h-[1px] bg-[#775a19] group-hover:w-12 transition-all duration-300"></span>
            <span className="text-sm font-label uppercase tracking-widest">Nossas Áreas</span>
          </a>
        </div>
      </div>
      <div className="md:col-span-5 relative mt-12 md:mt-0">
        <div className="aspect-[4/5] bg-[#e1e3e4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
          <img 
            src="https://i.postimg.cc/DyGb711g/Advocacia.png" 
            alt="Founding Partners" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-[#775a19] p-8 rounded-sm text-white shadow-xl">
          <div className="text-4xl font-headline font-bold">60</div>
          <div className="text-xs uppercase tracking-[0.2em] font-label mt-1">Anos de Autoridade</div>
        </div>
      </div>
    </div>
  </section>
);

const AboutOffice = () => (
  <section id="sobre" className="py-24 bg-[#f3f4f5] scroll-mt-16">
    <div className="container mx-auto px-8 md:px-12">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#775a19]"></div>
          <div className="pl-12">
            <h2 className="text-[#041627] font-headline text-4xl mb-8">O Escritório</h2>
            <div className="space-y-6 text-[#44474c] leading-relaxed text-lg font-body">
              <p>
                O escritório Rosa Jr. Advogados, sucessor do escritório João Batista Rosa Advogados, atua há quase 60 anos na cidade de Pouso Alegre e em todo o Sul de Minas Gerais.
              </p>
              <p>
                Fundado pelo advogado Dr. João Batista Rosa, professor de direito constitucional de renome que exerceu também mandatos como prefeito de Pouso Alegre, Deputado Estadual e Deputado Federal por Minas Gerais, hoje tem em sua direção o advogado João Batista Rosa Junior.
              </p>
              <p>
                Com a experiência adquirida em mais de meio século de atuação, hoje oferecemos aos nossos clientes, atendimento personalizado, especializado e com visão estratégica de negócios.
              </p>
              <p>
                Para nós do Rosa Jr., atender o cliente de maneira especializada e personalizada significa entender suas necessidades, desenvolver e apresentar soluções inovadoras em todas as disciplinas do direito.
              </p>
              <p>
                O escritório tem como clientes empresas e famílias que buscam não só o sucesso em suas causas, mas também uma sólida assessoria consultiva e preventiva.
              </p>
              <p>
                O quadro de profissionais especialistas em cada área do direito, está pronto para trabalhar questões jurídicas de alta complexidade, com base nos entendimentos mais recentes dos tribunais.
              </p>
              <p>
                A modernidade do pensamento de nosso escritório multidisciplinar somada aos sólidos conhecimentos jurídicos de nossa equipe de especialistas, facilita a busca por soluções estratégicas que impactam positivamente nos negócios das empresas e de suas famílias.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#f8f9fa] overflow-hidden shadow-inner p-1 aspect-square md:aspect-auto md:h-full">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKGdap2FpjrVjZ-iukV6eVUbBY9fgK1SCgkWrrAcmsPwjAg0tAZLFHCBNGzHY3Lgwf_TjWusR9TAjF0TxfhTN85fRNw5P6UHNqxfbUv886SOXBI1cJZ0vCzr56FyDXbEgudxXcosB0UWpBKzCa2MwJBaufn-B2G5Mf07axFakPay23DG8TmxycLY_3ib9D1qgghuwiBE5ETOhUdgp1z3wYRFw0yuOEyk2Blw_PRtoVGIPxWamxs-1qM6PkrUxkvMGL-dOr927F9tDd" 
            alt="Law Library" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>
    </div>
  </section>
);

const StrategicPillars = () => {
  const pillars = [
    { icon: <History size={40} />, title: 'Tradição', desc: 'Seis décadas de jurisprudência e casos de sucesso que fundamentam cada decisão atual.' },
    { icon: <Brain size={40} />, title: 'Modernidade', desc: 'Agilidade processual e tecnologia aplicada à análise preditiva de riscos jurídicos.' },
    { icon: <Briefcase size={40} />, title: 'Visão de Negócios', desc: 'Entendemos o business para proteger o lucro e viabilizar o crescimento sustentável.' }
  ];

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-8 md:px-12 text-center mb-16">
        <span className="text-[#775a19] tracking-[0.4em] uppercase text-xs font-bold font-label">Pilares Estratégicos</span>
        <h2 className="text-[#041627] font-headline text-4xl mt-4">Nossa Essência</h2>
      </div>
      <div className="container mx-auto px-8 md:px-12 grid md:grid-cols-3 gap-8 md:gap-12">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="p-10 bg-[#f3f4f5] text-center hover:bg-[#041627] hover:text-white transition-all duration-500 group rounded-sm">
            <div className="text-[#775a19] mb-6 flex justify-center">{pillar.icon}</div>
            <h3 className="font-headline text-xl mb-4">{pillar.title}</h3>
            <p className="text-[#44474c] group-hover:text-[#b7c8de] text-sm leading-relaxed font-body transition-colors">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const PracticeAreas = () => (
  <section id="atuacao" className="py-24 bg-[#e1e3e4] scroll-mt-16">
    <div className="container mx-auto px-8 md:px-12">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#041627] p-12 md:p-16 text-white relative overflow-hidden rounded-sm">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Building2 size={120} />
          </div>
          <h3 className="font-headline text-3xl mb-10 relative z-10">Soluções para Empresas</h3>
          <ul className="space-y-6 relative z-10">
            {['Direito Tributário e Fiscal', 'Societário e Fusões (M&A)', 'Contratual Estratégico', 'Advocacia Preventiva'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 group">
                <span className="w-2 h-2 bg-[#775a19] rounded-sm"></span>
                <span className="text-lg font-light tracking-wide group-hover:text-[#775a19] transition-colors cursor-default font-body">{item}</span>
              </li>
            ))}
          </ul>
          <button className="mt-16 border border-white/30 px-6 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-[#041627] transition-all rounded-sm font-label relative z-10">
            Explorar Soluções Corporativas
          </button>
        </div>

        <div className="bg-white p-12 md:p-16 text-[#041627] relative overflow-hidden border-l-4 border-[#775a19] rounded-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Users size={120} />
          </div>
          <h3 className="font-headline text-3xl mb-10 relative z-10">Soluções para Famílias</h3>
          <ul className="space-y-6 relative z-10">
            {['Planejamento Sucessório', 'Gestão de Patrimônio', 'Divórcios de Alta Complexidade', 'Holdings Familiares'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 group">
                <span className="w-2 h-2 bg-[#775a19] rounded-sm"></span>
                <span className="text-lg font-light tracking-wide group-hover:text-[#775a19] transition-colors cursor-default font-body">{item}</span>
              </li>
            ))}
          </ul>
          <button className="mt-16 border border-[#041627] px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#041627] hover:text-white transition-all rounded-sm font-label relative z-10">
            Explorar Soluções Familiares
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Team = () => {
  const members = [
    {
      name: "João Batista Rosa Junior",
      role: "Sócio Administrador",
      specialty: "Área de família, sucessões e negócios",
      img: "https://i.postimg.cc/y8fYFdK6/01-joao-batista-rosa-jr-b.png"
    },
    {
      name: "Vitor Hugo Colino Vono",
      role: "Advogado Associado",
      specialty: "Direito do Trabalho",
      img: "https://i.postimg.cc/sgnDpXzg/02-vitor-hugo-colino-vono-b.png"
    },
    {
      name: "Anaisa Esteves",
      role: "Advogada Associada",
      specialty: "Direito Tributário",
      img: "https://i.postimg.cc/GmMhk2Rc/03-anaisa-esteves-b.png"
    }
  ];

  return (
    <section id="equipe" className="py-24 bg-[#f8f9fa] scroll-mt-16">
      <div className="container mx-auto px-8 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[2px] bg-[#775a19]"></div>
          <span className="font-label text-[#775a19] tracking-[0.2em] uppercase text-sm font-semibold">
            Equipe
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {members.map((member, idx) => (
            <div key={idx} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-[#e1e3e4] rounded-sm mb-6 shadow-lg">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="space-y-2">
                <span className="font-label text-[#775a19] text-xs tracking-widest uppercase block">{member.role}</span>
                <h3 className="font-headline text-2xl text-[#041627]">{member.name}</h3>
                <p className="text-[#44474c] font-body text-sm leading-relaxed">
                  {member.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contato" className="py-24 bg-[#041627] text-white scroll-mt-16">
    <div className="container mx-auto px-8 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
      <div>
        <h2 className="font-headline text-5xl mb-8 leading-tight">
          Pronto para elevar sua <span className="italic text-[#775a19]">segurança jurídica?</span>
        </h2>
        <p className="text-[#b7c8de] text-lg mb-12 max-w-md font-body font-light leading-relaxed">
          Inicie uma conversa confidencial com nossos especialistas para entender como podemos proteger e potencializar seu legado.
        </p>
        <a 
          href="https://wa.me/5535988617042?text=Ol%C3%A1%21%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20de%20voc%C3%AAs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-[#775a19] text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-[#5d4201] transition-all shadow-lg group font-label"
        >
          <MessageCircle size={20} />
          Falar com um Especialista
        </a>
      </div>
      
      <div className="bg-white p-10 md:p-14 rounded-sm shadow-2xl">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <h4 className="text-[#041627] font-headline text-2xl mb-8">Solicitar Contato</h4>
          
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#44474c] mb-2 font-label font-semibold">Nome Completo</label>
            <input type="text" className="input-minimal" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#44474c] mb-2 font-label font-semibold">E-mail</label>
              <input type="email" className="input-minimal" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#44474c] mb-2 font-label font-semibold">Telefone</label>
              <input type="tel" className="input-minimal" />
            </div>
          </div>
          
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#44474c] mb-2 font-label font-semibold">Área de Interesse</label>
            <select className="input-minimal appearance-none rounded-none">
              <option>Corporativo / Tributário</option>
              <option>Planejamento Sucessório</option>
              <option>Contencioso Estratégico</option>
              <option>Outros</option>
            </select>
          </div>
          
          <button className="w-full bg-[#041627] text-white py-4 rounded-sm font-bold tracking-widest uppercase hover:bg-[#191c1d] transition-all mt-8 font-label text-sm">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full px-8 md:px-12 py-16 bg-[#031627] text-white font-body">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="max-w-xs">
        <div className="text-xl font-headline text-white mb-6">Rosa Jr. Advogados</div>
        <p className="text-[#8192a7] text-sm leading-relaxed font-light">
          Referência em soluções jurídicas complexas desde 1964. Compromisso inabalável com o resultado e a ética.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-12 md:gap-24">
        <div>
          <h5 className="text-[#775a19] font-bold text-xs uppercase tracking-widest mb-6 font-label">Links</h5>
          <ul className="space-y-4 text-sm text-[#8192a7]">
            <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[#775a19] font-bold text-xs uppercase tracking-widest mb-6 font-label">Localização</h5>
          <p className="text-[#8192a7] text-sm leading-loose font-light">
            Rua das Palmeiras, 1200<br/>
            Centro, Pouso Alegre, MG<br/>
            CEP: 37550-000
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-start md:items-end w-full md:w-auto mt-8 md:mt-0">
        <div className="text-[0.65rem] uppercase tracking-[0.3em] text-[#4f6073] mb-2 font-label font-bold">Direitos Reservados</div>
        <p className="text-xs text-[#8192a7]">© 2024 Rosa Jr. Advogados.</p>
        <div className="flex gap-4 mt-6">
          <Share2 size={18} className="text-[#4f6073] hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/5535988617042?text=Ol%C3%A1%21%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20de%20voc%C3%AAs"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
    aria-label="Contato via WhatsApp"
  >
    <MessageCircle size={28} />
    <span className="absolute right-full mr-4 bg-white text-[#041627] px-4 py-2 rounded-sm text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none">
      Fale conosco no WhatsApp
    </span>
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] selection:bg-[#fed488] selection:text-[#041627]">
      <Navbar />
      <WhatsAppButton />
      <main>
        <Hero />
        <AboutOffice />
        <StrategicPillars />
        <PracticeAreas />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
