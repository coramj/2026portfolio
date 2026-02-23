import React, { useState, useEffect, useRef } from 'react';
import {
    Github, Mail, Phone, MapPin, Cpu, Wrench, Zap, Code2,
    Briefcase, GraduationCap, Terminal, X, Maximize2,
    Languages, Monitor, Printer, ArrowUp, MessageSquare,
    Instagram, AtSign, Copy, Check, Globe, Link
} from 'lucide-react';

// --- DATOS Y TRADUCCIONES ---
const translations = {
    es: {
        badge: "DISPONIBLE JUNIO 2026",
        subtitle: "Estudiante de Bachillerato Tecnológico.",
        focus1: "Hardware", focus2: "Sistemas", focus3: "y Reparaciones.",
        menu: { home: "Inicio", contact: "Contacto", print: "Imprimir CV", copy: "Copiar Enlace" },
        hw: { title: "Ingeniería de Hardware", sub1: "Montaje PC Custom", sub2: "Modding & Estética", sub3: "Diagnóstico Avanzado", sub4: "Optimización Térmica" },
        exp: { title: "Experiencia", role: "Camarero Desayunos" },
        stack: { title: "Conocimientos" },
        lang: { title: "Idiomas", es: "Español", ca: "Catalán", en: "Inglés", native: "NATIVO" },
        setup: { title: "Setup" },
        edu: { title: "Formación", curr: "ACTUALIDAD", deg1: "Bachillerato Tecnológico" },
        contact: { title: "Contacto" },
        loc: { title: "Ubicación", sub: "Menorca • Movilidad Propia" }
    },
    ca: {
        badge: "DISPONIBLE JUNY 2026",
        subtitle: "Estudiant de Batxillerat Tecnològic.",
        focus1: "Hardware", focus2: "Sistemes", focus3: "i Reparacions.",
        menu: { home: "Inici", contact: "Contacte", print: "Imprimir CV", copy: "Copiar Enllaç" },
        hw: { title: "Enginyeria de Hardware", sub1: "Muntatge PC Custom", sub2: "Modding & Estètica", sub3: "Diagnòstic Avançat", sub4: "Optimització Tèrmica" },
        exp: { title: "Experiència", role: "Cambrer Esmorzars" },
        stack: { title: "Coneixements" },
        lang: { title: "Idiomes", es: "Espanyol", ca: "Català", en: "Anglès", native: "NATIU" },
        setup: { title: "Setup" },
        edu: { title: "Formació", curr: "ACTUALITAT", deg1: "Batxillerat Tecnològic" },
        contact: { title: "Contacte" },
        loc: { title: "Ubicació", sub: "Menorca • Mobilitat Pròpia" }
    },
    en: {
        badge: "AVAILABLE JUNE 2026",
        subtitle: "Technological Baccalaureate Student.",
        focus1: "Hardware", focus2: "Systems", focus3: "and Repairs.",
        menu: { home: "Home", contact: "Contact", print: "Print CV", copy: "Copy Link" },
        hw: { title: "Hardware Engineering", sub1: "Custom PC Build", sub2: "Modding & Aesthetics", sub3: "Advanced Diagnostics", sub4: "Thermal Optimization" },
        exp: { title: "Experience", role: "Breakfast Waiter" },
        stack: { title: "Knowledge" },
        lang: { title: "Languages", es: "Spanish", ca: "Catalan", en: "English", native: "NATIVE" },
        setup: { title: "Setup" },
        edu: { title: "Education", curr: "PRESENT", deg1: "Tech Baccalaureate" },
        contact: { title: "Contact" },
        loc: { title: "Location", sub: "Menorca • Own Vehicle" }
    }
};

// =====================================================================
// COMPONENTE: InteractiveDotGrid (Fondo dinámico que sigue al ratón)
// =====================================================================
const InteractiveDotGrid = () => {
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202] overflow-hidden">
            {/* Puntos base tenues globales */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            {/* Puntos brillantes iluminados por el ratón usando CSS Mask */}
            <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                    backgroundImage: `radial-gradient(circle, #4f46e5 2px, transparent 2px)`,
                    backgroundSize: '24px 24px',
                    maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
                }}
            />

            {/* Luz ambiente suave de respaldo */}
            <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/10 blur-[120px] mix-blend-screen" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-emerald-900/10 blur-[120px] mix-blend-screen" />

            {/* Viñeta para oscurecer los bordes de la pantalla */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_100%)] opacity-80"></div>
        </div>
    );
};

// =====================================================================
// COMPONENTE: AsciiText (Efecto Decodificación Matrix)
// =====================================================================
const AsciiText = ({ text }) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = "!<>-_\\\\/[]{}—=+*^?#________";

    const scramble = () => {
        let currentIteration = 0;
        const interval = setInterval(() => {
            setDisplayText((prev) =>
                text.split("").map((char, index) => {
                    if (index < currentIteration) return text[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );
            if (currentIteration >= text.length) clearInterval(interval);
            currentIteration += 1 / 3; // Controla la velocidad de descifrado
        }, 30);
    };

    useEffect(() => { scramble(); }, [text]);

    return (
        <h1
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter cursor-crosshair font-mono relative z-10 drop-shadow-lg"
            onMouseEnter={scramble}
        >
            {displayText}
        </h1>
    );
};

// =====================================================================
// COMPONENTE: Bubble Menu Radial
// =====================================================================
const BubbleMenu = ({ actions }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) setIsOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="fixed top-6 left-6 z-50" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative z-20 w-14 h-14 rounded-full glass-panel flex items-center justify-center text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-90 ${isOpen ? 'bg-indigo-600 border-indigo-400 rotate-90' : 'hover:border-indigo-500/50'}`}
            >
                {isOpen ? <X size={24} /> : <Terminal size={24} />}
            </button>

            {actions.map((act, index) => {
                const angle = (Math.PI / 2) * (index / (actions.length - 1 || 1));
                const radius = 80;
                const x = isOpen ? Math.cos(angle) * radius : 0;
                const y = isOpen ? Math.sin(angle) * radius : 0;
                const delay = isOpen ? index * 50 : (actions.length - index) * 50;

                return (
                    <button
                        key={index}
                        onClick={() => { act.onClick(); setIsOpen(false); }}
                        style={{
                            transform: `translate(${x}px, ${y}px) scale(${isOpen ? 1 : 0})`,
                            opacity: isOpen ? 1 : 0,
                            transitionDelay: `${delay}ms`
                        }}
                        className="absolute top-1 left-1 z-10 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-500 cubic-bezier-spring hover:scale-110 shadow-xl"
                        title={act.label}
                    >
                        {act.icon}
                    </button>
                );
            })}
        </div>
    );
};


// =====================================================================
// APP PRINCIPAL
// =====================================================================
export default function App() {
    const [loaded, setLoaded] = useState(false);
    const [lang, setLang] = useState('es');
    const [selectedCard, setSelectedCard] = useState(null);

    const t = translations[lang];

    const bubbleActions = [
        { icon: <ArrowUp size={20} />, label: t.menu.home, onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        { icon: <MessageSquare size={20} />, label: t.menu.contact, onClick: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) },
        { icon: <Link size={20} />, label: t.menu.copy, onClick: () => { navigator.clipboard.writeText(window.location.href); alert("Enlace copiado!"); } },
        { icon: <Printer size={20} />, label: t.menu.print, onClick: () => window.print() },
    ];

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        if (selectedCard) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [selectedCard]);

    const handleEasterEgg = () => {
        const msgs = ["¡No me toques!", "Error 418: Soy una tetera 🫖", "Compilando...", "👾"];
        alert(`Sistema: ${msgs[Math.floor(Math.random() * msgs.length)]}`);
    };

    // --- DATOS DE LAS TARJETAS ---
    const cards = [
        {
            id: 'hardware', colSpan: 'lg:col-span-2', title: t.hw.title, icon: <Cpu size={24} />, color: 'indigo',
            summary: (
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-400 mt-2">
                    <ul className="space-y-2">
                        <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>{t.hw.sub1}</li>
                        <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>{t.hw.sub2}</li>
                    </ul>
                    <ul className="space-y-2">
                        <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>{t.hw.sub3}</li>
                        <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>{t.hw.sub4}</li>
                    </ul>
                </div>
            ),
            details: (
                <div className="grid gap-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <h4 className="text-indigo-400 font-bold mb-2 flex items-center gap-2"><Wrench size={16} /> Montaje a Medida</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Planificación y ensamblaje de equipos desde cero evitando cuellos de botella (bottlenecks). Gestión de flujo de aire para presión positiva y curvas de ventilación personalizadas en BIOS para un funcionamiento silencioso.
                        </p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <h4 className="text-indigo-400 font-bold mb-2 flex items-center gap-2"><Zap size={16} /> Mantenimiento</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Limpieza profunda de componentes, cambio de pasta térmica (Arctic/Noctua) y diagnóstico de fallos de hardware con herramientas como MemTest86.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'experience', colSpan: '', title: t.exp.title, icon: <Briefcase size={24} />, color: 'emerald',
            summary: (
                <div className="mt-auto pt-4">
                    <div className="text-white font-medium">Hotel Gemini <span className="text-xs text-slate-500 font-normal ml-1">2025</span></div>
                    <div className="text-sm text-emerald-400 mt-0.5">{t.exp.role}</div>
                </div>
            ),
            details: (
                <ul className="space-y-3">
                    <li className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-300 font-bold text-sm mb-4">
                        ROL: {t.exp.role.toUpperCase()} (Verano 2025)
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                        <Check size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">Atención directa a clientes internacionales (Inglés fluido).</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                        <Check size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">Resolución rápida de incidencias bajo presión en temporada alta.</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                        <Check size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">Gestión de stock, control de calidad y limpieza del área.</span>
                    </li>
                </ul>
            )
        },
        {
            id: 'stack', colSpan: '', title: t.stack.title, icon: <Code2 size={24} />, color: 'blue',
            summary: (
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    <Badge color="blue">HTML/CSS</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>Bash</Badge>
                    <Badge>Java/C++</Badge>
                </div>
            ),
            details: (
                <div className="space-y-6">
                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                        <h4 className="font-bold text-blue-300 mb-4 flex items-center gap-2">Desarrollo Web</h4>
                        <div className="space-y-4">
                            <SkillBar name="HTML5 & CSS3" level={80} />
                            <SkillBar name="JavaScript (ES6+)" level={65} />
                        </div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                        <h4 className="font-bold text-slate-300 mb-4">Sistemas & Software</h4>
                        <div className="space-y-4">
                            <SkillBar name="Bash (Scripting & Linux)" level={50} color="slate" />
                            <SkillBar name="Java / C++ (Básico)" level={30} color="slate" />
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'lang', colSpan: '', title: t.lang.title, icon: <Languages size={24} />, color: 'pink',
            summary: (
                <div className="space-y-2 mt-auto pt-4 text-sm text-slate-300">
                    <div className="flex justify-between items-center"><span>{t.lang.es}</span> <span className="text-pink-400 text-[10px] font-bold border border-pink-500/20 bg-pink-500/10 px-1.5 rounded">{t.lang.native}</span></div>
                    <div className="flex justify-between items-center"><span>{t.lang.ca}</span> <span className="text-pink-400 text-[10px] font-bold border border-pink-500/20 bg-pink-500/10 px-1.5 rounded">{t.lang.native}</span></div>
                    <div className="flex justify-between items-center"><span>{t.lang.en}</span> <span className="text-white text-[10px] font-bold bg-white/10 px-1.5 rounded border border-white/20">B2 / C1</span></div>
                </div>
            ),
            details: (
                <div className="space-y-4">
                    <div className="p-4 border border-pink-500/30 bg-pink-500/10 rounded-xl relative overflow-hidden">
                        <Globe size={80} className="absolute -right-4 -bottom-4 text-pink-500/20" />
                        <h4 className="text-pink-300 font-bold mb-2 flex items-center gap-2 relative z-10"><Globe size={18} /> Inglés (B2 / C1)</h4>
                        <p className="text-sm text-pink-100/80 leading-relaxed relative z-10">
                            Poseo el certificado B2, pero mi nivel real conversacional y de lectura técnica es fluido, cercano a C1. Total capacidad para trabajar en entornos internacionales o consumir documentación técnica nativa.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                            <span className="block font-bold text-white text-lg">Español</span>
                            <span className="text-xs text-slate-400 uppercase tracking-widest">{t.lang.native}</span>
                        </div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                            <span className="block font-bold text-white text-lg">Catalán</span>
                            <span className="text-xs text-slate-400 uppercase tracking-widest">{t.lang.native}</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'setup', colSpan: '', title: t.setup.title, icon: <Monitor size={24} />, color: 'cyan',
            summary: (
                <div className="p-3 bg-black/40 rounded-xl border border-white/5 mt-auto">
                    <div className="text-[10px] text-cyan-500 font-bold mb-1 tracking-widest">WORKSTATION</div>
                    <div className="text-sm text-white font-medium">i5 14600KF • RTX 5060</div>
                    <div className="text-[10px] text-slate-400 mt-1">32GB DDR5 RAM</div>
                </div>
            ),
            details: (
                <div className="bg-cyan-900/10 rounded-2xl border border-cyan-500/20 overflow-hidden">
                    <table className="w-full text-sm text-left text-slate-300">
                        <tbody>
                            <tr className="border-b border-white/5"><td className="py-4 pl-6 text-cyan-400 font-bold w-1/3"><Cpu size={16} className="inline mr-2" /> CPU</td><td className="py-4 pr-6 text-white font-mono">Intel Core i5 14600KF</td></tr>
                            <tr className="border-b border-white/5"><td className="py-4 pl-6 text-green-400 font-bold w-1/3"><Zap size={16} className="inline mr-2" /> GPU</td><td className="py-4 pr-6 text-white font-mono">NVIDIA RTX 5060</td></tr>
                            <tr className="border-b border-white/5"><td className="py-4 pl-6 text-pink-400 font-bold w-1/3"><Code2 size={16} className="inline mr-2" /> RAM</td><td className="py-4 pr-6 text-white font-mono">32GB DDR5 6000MHz</td></tr>
                            <tr><td className="py-4 pl-6 text-yellow-400 font-bold w-1/3"><Terminal size={16} className="inline mr-2" /> OS</td><td className="py-4 pr-6 text-white font-mono">Win 11 / Linux Mint</td></tr>
                        </tbody>
                    </table>
                </div>
            )
        },
        {
            id: 'edu', colSpan: 'lg:col-span-2', title: t.edu.title, icon: <GraduationCap size={24} />, color: 'purple',
            summary: (
                <div className="grid sm:grid-cols-2 gap-6 mt-auto pt-4">
                    <div className="relative pl-4 border-l-2 border-purple-500">
                        <div className="text-[10px] text-purple-400 font-bold mb-1">{t.edu.curr}</div>
                        <div className="font-bold text-white text-sm">{t.edu.deg1}</div>
                        <div className="text-xs text-slate-400 mt-0.5">IES Maria Àngels Cardona</div>
                    </div>
                    <div className="relative pl-4 border-l-2 border-slate-700">
                        <div className="text-[10px] text-slate-500 font-bold mb-1">2020 - 2024</div>
                        <div className="font-bold text-slate-300 text-sm">ESO</div>
                        <div className="text-xs text-slate-500 mt-0.5">IES Maria Àngels Cardona</div>
                    </div>
                </div>
            ),
            details: (
                <div className="relative pl-6 border-l-2 border-purple-500/50 space-y-8">
                    <div className="relative">
                        <div className="absolute -left-[31px] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-[#0a0a0a]"></div>
                        <h4 className="text-white font-bold text-lg">{t.edu.deg1}</h4>
                        <p className="text-purple-300 text-xs mb-2 font-mono">2024 - 2026 | IES Maria Àngels Cardona</p>
                        <p className="text-slate-300 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5 shadow-inner">
                            Especialización enfocada en la rama de ingeniería y tecnología. Asignaturas clave: Tecnología e Ingeniería, Física, Matemáticas y Dibujo Técnico.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[31px] top-0 w-4 h-4 bg-slate-600 rounded-full border-4 border-[#0a0a0a]"></div>
                        <h4 className="text-slate-300 font-bold text-lg">Educación Secundaria Obligatoria</h4>
                        <p className="text-slate-500 text-xs mb-2 font-mono">2020 - 2024 | IES Maria Àngels Cardona</p>
                        <p className="text-slate-400 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                            Graduado con mención en el itinerario de ciencias aplicadas.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'contact', colSpan: '', title: t.contact.title, icon: <AtSign size={24} />, color: 'teal',
            summary: (
                <div className="mt-auto space-y-2 pt-4">
                    <div className="text-sm text-slate-300 truncate">pau14mascaro@gmail.com</div>
                    <div className="flex items-center gap-2 text-xs text-pink-400"><Instagram size={14} /> @pb.mojz_</div>
                </div>
            ),
            details: (
                <div className="grid gap-3">
                    <a href="tel:683443335" className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition border border-white/5 hover:border-teal-500/30 group">
                        <div className="p-2 bg-teal-500/20 text-teal-400 rounded-lg group-hover:scale-110 transition-transform"><Phone size={20} /></div>
                        <span className="text-white font-medium tracking-wide">(+34) 683 443 335</span>
                    </a>
                    <a href="mailto:pau14mascaro@gmail.com" className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition border border-white/5 hover:border-teal-500/30 group">
                        <div className="p-2 bg-teal-500/20 text-teal-400 rounded-lg group-hover:scale-110 transition-transform"><Mail size={20} /></div>
                        <span className="text-white font-medium">pau14mascaro@gmail.com</span>
                    </a>
                    <a href="mailto:coramj@proton.me" className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition border border-white/5 hover:border-slate-500/30 group">
                        <div className="p-2 bg-slate-500/20 text-slate-400 rounded-lg group-hover:scale-110 transition-transform"><Mail size={20} /></div>
                        <span className="text-slate-300 font-medium">coramj@proton.me</span>
                    </a>
                    <a href="https://instagram.com/pb.mojz_" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-900/10 to-pink-900/10 hover:from-purple-900/20 hover:to-pink-900/20 rounded-xl transition border border-white/5 hover:border-pink-500/30 group">
                        <div className="p-2 bg-pink-500/20 text-pink-400 rounded-lg group-hover:scale-110 transition-transform"><Instagram size={20} /></div>
                        <span className="text-white font-medium">@pb.mojz_</span>
                    </a>
                </div>
            )
        },
        {
            id: 'location', colSpan: 'lg:col-span-3', title: t.loc.title, icon: <MapPin size={24} />, color: 'orange',
            summary: (
                <div className="mt-auto flex flex-col md:flex-row items-center gap-4 pt-4 text-center md:text-left">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20 text-orange-400">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <div className="font-bold text-white text-base">Son Carrió, Menorca</div>
                        <div className="text-[10px] text-orange-400 mt-1 uppercase tracking-widest">{t.loc.sub}</div>
                    </div>
                </div>
            ),
            details: (
                <div className="text-center p-6 border border-white/5 rounded-2xl bg-[#0a0a0a] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_100%)]"></div>
                    <div className="relative z-10">
                        <div className="inline-flex p-5 bg-orange-500/10 rounded-full text-orange-400 mb-4 border border-orange-500/20 relative">
                            <div className="absolute inset-0 border border-orange-400 rounded-full animate-ping opacity-50"></div>
                            <MapPin size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Son Carrió, Menorca</h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                            Disponibilidad total para desplazamiento a <strong>Ciutadella centro</strong> y polígonos industriales cercanos (POICI).
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs text-orange-300 font-bold tracking-widest">
                            🚗 VEHÍCULO PROPIO DISPONIBLE
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen relative text-slate-200 selection:bg-indigo-500/30 selection:text-white" id="top">

            {/* --- CSS INYECTADO (Puro y Seguro) --- */}
            <style dangerouslySetInnerHTML={{
                __html: `
        html { scrollbar-gutter: stable; scroll-behavior: smooth; }
        
        .glass-panel {
            background: rgba(15, 15, 15, 0.6);
            backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        
        .cubic-bezier-spring { transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .slide-up { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}} />

            {/* --- FONDO INTERACTIVO PUNTOS (DOT GRID) --- */}
            <InteractiveDotGrid />

            {/* --- EASTER EGG --- */}
            <div
                onClick={handleEasterEgg}
                className="fixed bottom-6 right-6 z-40 opacity-20 hover:opacity-100 transition-all cursor-pointer text-3xl hover:scale-125 duration-300 select-none"
                title="???"
            >👾</div>

            {/* --- COMPONENTES FIJOS --- */}
            <BubbleMenu actions={bubbleActions} />

            <div className="fixed top-6 right-6 z-50 glass-panel rounded-full p-1 flex shadow-xl">
                <div
                    className="absolute top-1 bottom-1 left-1 w-11 bg-indigo-600 rounded-full transition-transform duration-300 ease-out z-0"
                    style={{ transform: `translateX(${lang === 'es' ? 0 : lang === 'ca' ? 44 : 88}px)` }}
                />
                {['es', 'ca', 'en'].map((l) => (
                    <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`relative z-10 w-11 h-8 flex items-center justify-center rounded-full transition-opacity ${lang === l ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
                        aria-label={l}
                    >
                        <FlagIcon lang={l} />
                    </button>
                ))}
            </div>

            {/* --- CONTENIDO PRINCIPAL --- */}
            <main className={`relative z-10 max-w-6xl mx-auto p-6 pt-32 pb-24 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>

                <header className="mb-16 slide-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold tracking-widest mb-6 rounded-full backdrop-blur-md">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        {t.badge}
                    </div>

                    <AsciiText text="Pablo Mascaró" />

                    <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mb-8 leading-relaxed mt-4">
                        {t.subtitle}<br />
                        <span className="text-white font-medium border-b border-indigo-500/50 pb-0.5">{t.focus1}</span>,{' '}
                        <span className="text-white font-medium border-b border-emerald-500/50 pb-0.5">{t.focus2}</span>{' '}
                        {t.focus3}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="tel:683443335" className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transform duration-200">
                            <Phone size={18} /> (+34) 683 443 335
                        </a>
                        <a href="mailto:pau14mascaro@gmail.com" className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors flex items-center gap-2 hover:scale-105 transform duration-200">
                            <Mail size={18} /> Email
                        </a>
                    </div>
                </header>

                {/* --- GRID TARJETAS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 slide-up" style={{ animationDelay: '100ms' }}>

                    {cards.map(card => (
                        <div
                            key={card.id} id={card.id}
                            onClick={() => setSelectedCard(card)}
                            className={`glass-panel rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-white/[0.05] group hover:-translate-y-1 hover:border-${card.color}-500/30 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col relative overflow-hidden ${card.colSpan}`}
                        >
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500">
                                <Maximize2 size={18} />
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 bg-${card.color}-500/10 rounded-xl text-${card.color}-400 border border-${card.color}-500/20 group-hover:bg-${card.color}-500/20 transition-colors`}>
                                    {card.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-white">{card.title}</h2>
                            </div>

                            <div className="flex-1">
                                {card.summary}
                            </div>
                        </div>
                    ))}
                </div>

                <footer id="contact" className="text-center text-[10px] font-mono text-slate-600 mt-24 pt-8 border-t border-white/5">
                    SYSTEM ONLINE · CIUTADELLA DE MENORCA
                </footer>
            </main>

            {/* --- MODAL DE DETALLE DE TARJETA --- */}
            {selectedCard && (
                <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]" onClick={() => setSelectedCard(null)}>
                    <div
                        className="bg-[#0a0a0a] border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl slide-up"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-8">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${selectedCard.color}-500/20 text-${selectedCard.color}-400 border border-${selectedCard.color}-500/20`}>
                                        {React.cloneElement(selectedCard.icon, { size: 24 })}
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">{selectedCard.title}</h2>
                                </div>
                                <button onClick={() => setSelectedCard(null)} className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="text-slate-300 leading-relaxed text-sm">
                                {selectedCard.details}
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

// =====================================================================
// UTILS COMPONENTS
// =====================================================================

const Badge = ({ children, color = "default" }) => {
    const colors = {
        blue: "bg-blue-500/10 text-blue-300 border-blue-500/20",
        default: "bg-white/5 text-slate-300 border-white/10"
    };
    return (
        <span className={`px-2.5 py-1.5 rounded-md text-[10px] font-bold border tracking-widest uppercase ${colors[color] || colors.default}`}>
            {children}
        </span>
    );
};

const SkillBar = ({ name, level, color = "blue" }) => (
    <div>
        <div className="flex justify-between text-sm text-slate-300 mb-1.5 font-medium">
            <span>{name}</span>
        </div>
        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
            <div
                className={`h-full rounded-full transition-all duration-1000 ease-out bg-${color}-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
                style={{ width: `${level}%` }}
            ></div>
        </div>
    </div>
);

// Banderas SVG
const FlagIcon = ({ lang }) => {
    if (lang === 'es') return (
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" className="rounded-[2px] shadow-sm">
            <rect width="20" height="14" fill="#AA151B" /><rect y="3.5" width="20" height="7" fill="#F1BF00" />
        </svg>
    );
    if (lang === 'ca') return (
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" className="rounded-[2px] shadow-sm">
            <rect width="20" height="14" fill="#F1BF00" /><path d="M0 2H20M0 5H20M0 8H20M0 11H20" stroke="#AA151B" strokeWidth="2" />
        </svg>
    );
    return (
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" className="rounded-[2px] shadow-sm">
            <rect width="20" height="14" fill="#012169" /><path d="M0 0L20 14M20 0L0 14" stroke="white" strokeWidth="2" /><path d="M10 0V14M0 7H20" stroke="white" strokeWidth="3" /><path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="2" />
        </svg>
    );
};
