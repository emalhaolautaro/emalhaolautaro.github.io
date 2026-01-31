import { motion } from 'framer-motion';

/**
 * Home - Minimalist "Under Construction" Portfolio
 * Clean Glassmorphism aesthetic inspired by premium UI mockups
 */
const Home: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center justify-center">

            {/* ═══════════ 3D SPHERES BACKGROUND ═══════════ */}

            {/* Large sphere - bottom left */}
            <div
                className="absolute bottom-[-15%] left-[-10%] w-[45vw] h-[45vw] max-w-[400px] max-h-[400px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 30% 30%, #3a3a3a 0%, #1a1a1a 40%, #0d0d0d 100%)',
                    boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.8), inset 10px 10px 30px rgba(60,60,60,0.2)'
                }}
            />

            {/* Medium sphere - top right */}
            <div
                className="absolute top-[5%] right-[-5%] w-[30vw] h-[30vw] max-w-[280px] max-h-[280px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 25% 25%, #4a4a4a 0%, #222 40%, #0f0f0f 100%)',
                    boxShadow: 'inset -15px -15px 40px rgba(0,0,0,0.8), inset 8px 8px 20px rgba(80,80,80,0.15)'
                }}
            />

            {/* Small sphere - right side */}
            <div
                className="absolute top-[35%] right-[8%] w-[15vw] h-[15vw] max-w-[140px] max-h-[140px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 30% 30%, #555 0%, #2a2a2a 50%, #111 100%)',
                    boxShadow: 'inset -10px -10px 25px rgba(0,0,0,0.7), inset 5px 5px 15px rgba(100,100,100,0.1)'
                }}
            />

            {/* ═══════════ CONTENIDO DE LA TARJETA ═══════════ */}
            <div className="flex flex-col h-full justify-between">

                {/* Parte Superior: Identidad */}
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="text-4xl font-bold tracking-tighter text-white leading-[0.9] mb-4"
                    >
                        LAUTARO<br />
                        <span className="text-white/90">EMALHAO</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase"
                    >
                        Software Engineer // Systems Architect
                    </motion.p>
                </div>

                {/* Parte Inferior: Status y Mensaje */}
                <div className="mt-16 space-y-6">
                    {/* Status dots con el pulso que queríamos */}
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] shadow-[0_0_8px_#00ff41] animate-pulse" />
                    </div>

                    <div className="space-y-1">
                        <p className="text-white/30 text-[11px] font-medium tracking-wide">
                            Portfolio en construcción
                        </p>
                        <p className="text-[9px] font-mono text-white/10 uppercase tracking-widest">
                            v0.1.0 · initializing kur-os systems
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
