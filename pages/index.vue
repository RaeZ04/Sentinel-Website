<template>
    <div class="bg-[#0f172a] scroll-smooth min-h-screen pt-16 md:pt-20">
        <main class="px-6 w-full flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] relative overflow-hidden">
            <div id="bgmain" class="bg-main-image absolute inset-0 opacity-80 z-0"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-[#0f172a]/30 to-[#0f172a]/95 z-10"></div>
            
            <section class="w-full flex flex-col items-center justify-center gap-12 relative z-20 max-w-4xl mx-auto">
                <div class="flex flex-col items-center">
                    <span class="bg-blue-500/20 text-blue-400 rounded-full px-4 py-1.5 text-sm font-medium mb-6">Secure. Simple. Open Source.</span>
                    <h1 id="title-home" class="block text-white text-5xl sm:text-6xl font-bold text-center leading-tight">
                        Sentinel <span class="text-blue-400">Password Manager</span>
                    </h1>
                </div>
                <h2 id="description-home" class="max-w-screen-md text-neutral-300 font-medium text-center text-lg">
                    Desktop Application for saving and managing accounts in a secure and encrypted way, ensuring your
                    data is protected and easily accessible.
                </h2>
                <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full max-w-md justify-center">
                    <a href="#gettingStarted"
                        class="bg-blue-500 py-4 px-8 rounded-lg text-white font-semibold transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 hover:translate-y-[-2px] text-center">
                        <i class="fas fa-rocket mr-2"></i> Get Started
                    </a>
                </div>
                <div class="mt-8 flex items-center gap-4 text-neutral-400">
                    <a href="https://github.com/RaeZ04/Sentinel" target="_blank" class="hover:text-white transition-colors">
                        <i class="fab fa-github text-xl"></i>
                    </a>
                    <div class="h-4 border-r border-neutral-700"></div>
                    <span class="flex items-center gap-1 text-sm">
                        <i class="fas fa-code-branch"></i> v1.0.2
                    </span>
                </div>
            </section>
            
            <!-- Flecha modificada: visible solo en tablets y pantallas más grandes -->
            <div class="absolute hidden sm:flex bottom-8 left-0 right-0 justify-center z-20 animate-bounce">
                <a href="#gettingStarted" class="text-white/70 hover:text-white">
                    <i class="fas fa-chevron-down"></i>
                </a>
            </div>
        </main>

        <section id="gettingStarted" class="min-h-screen w-full flex flex-col md:flex-row gap-8 justify-center pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
            <!-- Sidebar Navigation -->
            <nav class="flex flex-col w-full md:w-[25%] bg-[#10141e]/50 backdrop-blur-sm rounded-2xl p-6 h-fit mb-16 md:mb-0 md:sticky md:top-24">
                <h2 class="text-white font-bold text-2xl mb-6 flex items-center gap-3">
                    <i class="fas fa-rocket text-blue-400"></i>
                    <span>Getting Started</span>
                </h2>
                <div class="flex flex-col space-y-2">
                    <button @click="clickInstallation" 
                        class="text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3"
                        :class="installation ? 'bg-blue-500/20 text-blue-400 font-medium' : 'text-neutral-400 hover:bg-[#1c2533] hover:text-white'">
                        <i class="fas fa-download w-5"></i>
                        <span>Installation</span>
                    </button>
                    <button @click="clickDocumentation" 
                        class="text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3"
                        :class="documentation ? 'bg-blue-500/20 text-blue-400 font-medium' : 'text-neutral-400 hover:bg-[#1c2533] hover:text-white'">
                        <i class="fas fa-book w-5"></i>
                        <span>Documentation</span>
                    </button>
                </div>
            </nav>
        
            <!-- Content Area -->
            <div class="w-full md:w-[75%]">
                <!-- Separador visual solo para móvil -->
                <div class="md:hidden w-full h-px bg-slate-700/30 mb-6"></div>
                
                <!-- Installation Section -->
                <div v-if="installation" class="h-full flex flex-col">
                    <div class="flex items-center gap-3 mb-8">
                        <div class="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center">
                            <i class="fas fa-download"></i>
                        </div>
                        <h2 class="text-white font-bold text-2xl">Installation</h2>
                    </div>
                    
                    <!-- Installation Tabs -->
                    <div class="w-full mb-8">
                        <ul class="border-b border-slate-700 flex whitespace-nowrap overflow-x-auto hide-scrollbar gap-2">
                            <li>
                                <button @click="setActiveLink('windows')" 
                                    class="flex items-center gap-2 text-sm leading-6 font-medium pt-3 pb-2.5 px-4 border-b-2 transition-all duration-200 rounded-t-lg"
                                    :class="[
                                        activeLink === 'windows' 
                                        ? 'text-blue-400 border-blue-400 bg-[#10141e]' 
                                        : 'text-slate-400 border-transparent hover:text-slate-300 hover:border-slate-700'
                                    ]">
                                    <i class="fab fa-windows"></i>
                                    Windows
                                </button>
                            </li>
                            <li>
                                <button @click="setActiveLink('jar')" 
                                    class="flex items-center gap-2 text-sm leading-6 font-medium pt-3 pb-2.5 px-4 border-b-2 transition-all duration-200 rounded-t-lg"
                                    :class="[
                                        activeLink === 'jar' 
                                        ? 'text-blue-400 border-blue-400 bg-[#10141e]' 
                                        : 'text-slate-400 border-transparent hover:text-slate-300 hover:border-slate-700'
                                    ]">
                                    <i class="fab fa-java"></i>
                                    JAR File
                                </button>
                            </li>
                            <li>
                                <button @click="setActiveLink('git')" 
                                    class="flex items-center gap-2 text-sm leading-6 font-medium pt-3 pb-2.5 px-4 border-b-2 transition-all duration-200 rounded-t-lg"
                                    :class="[
                                        activeLink === 'git' 
                                        ? 'text-blue-400 border-blue-400 bg-[#10141e]' 
                                        : 'text-slate-400 border-transparent hover:text-slate-300 hover:border-slate-700'
                                    ]">
                                    <i class="fab fa-git-alt"></i>
                                    Source Code
                                </button>
                            </li>
                        </ul>
                    </div>
        
                    <!-- Windows Tab Content -->
                    <div v-if="activeLink === 'windows'" class="bg-[#10141e] p-6 rounded-xl text-white shadow-lg transform transition-all duration-300">
                        <div class="flex flex-col md:flex-row items-start gap-6">
                            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/10 mx-auto md:mx-0">
                                <i class="fab fa-windows text-3xl"></i>
                            </div>
                            <div class="flex-1 flex flex-col">
                                <div>
                                    <h3 class="text-xl font-bold mb-2 text-center md:text-left">Windows Installer</h3>
                                    <p class="text-neutral-400 mb-4 leading-relaxed">Download the Windows executable installer for the Sentinel Password Manager. 
                                    Compatible with Windows 10 and 11.</p>
                                    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-400 mb-4">
                                        <div class="flex items-center gap-1 bg-[#1c2029] px-3 py-1 rounded-full">
                                            <i class="fas fa-file"></i>
                                            <span>12.5 MB</span>
                                        </div>
                                        <div class="flex items-center gap-1 bg-[#1c2029] px-3 py-1 rounded-full">
                                            <i class="fas fa-code-branch"></i>
                                            <span>v1.0.2</span>
                                        </div>
                                        <div class="flex items-center gap-1 bg-[#1c2029] px-3 py-1 rounded-full">
                                            <i class="fas fa-check-circle text-green-500"></i>
                                            <span>Virus Scanned</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-4 flex justify-center md:justify-end">
                                    <a href="/apps/Sentinel.exe" download
                                        class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 py-3 px-6 rounded-lg font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:translate-y-[-2px]">
                                        <i class="fas fa-download"></i>
                                        Download for Windows
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- JAR Tab Content -->
                    <div v-if="activeLink === 'jar'" class="bg-[#10141e] p-6 rounded-xl text-white shadow-lg transform transition-all duration-300">
                        <div class="flex flex-col md:flex-row items-start gap-6">
                            <div class="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/10 mx-auto md:mx-0">
                                <i class="fab fa-java text-3xl"></i>
                            </div>
                            <div class="flex-1 flex flex-col">
                                <div>
                                    <h3 class="text-xl font-bold mb-2 text-center md:text-left">Java JAR Package</h3>
                                    <p class="text-neutral-400 mb-4 leading-relaxed">Download the cross-platform JAR file for the Sentinel Password Manager.
                                    Requires Java Runtime Environment (JRE) 11 or later.</p>
                                    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-400 mb-4">
                                        <div class="flex items-center gap-1 bg-[#1c2029] px-3 py-1 rounded-full">
                                            <i class="fas fa-file"></i>
                                            <span>8.3 MB</span>
                                        </div>
                                        <div class="flex items-center gap-1 bg-[#1c2029] px-3 py-1 rounded-full">
                                            <i class="fas fa-code-branch"></i>
                                            <span>v1.0.2</span>
                                        </div>
                                        <div class="flex items-center gap-1 bg-[#1c2029] px-3 py-1 rounded-full">
                                            <i class="fas fa-laptop"></i>
                                            <span>Cross-Platform</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-4 flex justify-center md:justify-end">
                                    <a href="/apps/Sentinel_Win64.jar" download
                                        class="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 py-3 px-6 rounded-lg font-medium shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:translate-y-[-2px]">
                                        <i class="fas fa-download"></i>
                                        Download JAR File
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <!-- Git Tab Content -->
                    <div v-if="activeLink === 'git'" class="bg-[#10141e] p-6 rounded-xl text-white shadow-lg transform transition-all duration-300">
                        <div class="flex flex-col md:flex-row items-start gap-6">
                            <div class="w-20 h-20 bg-gradient-to-br from-[#f34f29] to-[#d92b03] rounded-xl flex items-center justify-center shadow-lg shadow-[#f34f29]/10 mx-auto md:mx-0">
                                <i class="fab fa-git-alt text-3xl"></i>
                            </div>
                            <div class="flex-1 flex flex-col w-full">
                                <div>
                                    <h3 class="text-xl font-bold mb-2 text-center md:text-left">Clone Repository</h3>
                                    <p class="text-neutral-400 mb-4 leading-relaxed">Get the source code directly from our GitHub repository and build the application yourself.</p>
                                    
                                    <div class="mt-4 mb-4 w-full overflow-hidden">
                                        <div class="flex items-center justify-between mb-2">
                                            <h4 class="text-[#8c8c8c] text-sm flex items-center gap-2">
                                                <i class="fas fa-terminal"></i>
                                                <span>Terminal</span>
                                            </h4>
                                        </div>
                                        <div class="flex items-center justify-between bg-[#1c2029] rounded-xl px-3 sm:px-4 py-3 text-sm font-mono border border-[#2d3748]/50 terminal-container">
                                            <code class="overflow-x-auto whitespace-nowrap custom-scrollbar"><span class="text-[#fc64b4]">git clone</span> <span class="text-[#74d4fc]">https://github.com/RaeZ04/Sentinel.git</span></code>
                                            <button @click="copyToClipboard"
                                                class="ml-2 sm:ml-4 text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded transition-colors duration-200 flex-shrink-0 flex items-center">
                                                <i class="fas fa-copy"></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-400 mb-4">
                                        <div class="flex items-center gap-1 bg-[#1c2029] px-3 py-1 rounded-full">
                                            <i class="fas fa-code"></i>
                                            <span>Source Code</span>
                                        </div>
                                        <div class="flex items-center gap-1 bg-[#1c2029] px-3 py-1 rounded-full">
                                            <i class="fas fa-code-branch"></i>
                                            <span>v1.0.2</span>
                                        </div>
                                        <div class="flex items-center gap-1 bg-[#1c2029] px-3 py-1 rounded-full">
                                            <i class="fas fa-users"></i>
                                            <span>Open Source</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="mt-4 flex justify-center md:justify-end">
                                    <a href="https://github.com/RaeZ04/Sentinel" target="_blank"
                                        class="inline-flex items-center gap-2 bg-gradient-to-r from-[#333] to-[#444] transition-all duration-300 py-3 px-6 rounded-lg font-medium hover:translate-y-[-2px]">
                                        <i class="fab fa-github"></i>
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <!-- Documentation Section -->
                <div v-if="documentation" class="h-full flex flex-col">
                    <div class="flex items-center gap-3 mb-8">
                        <div class="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center">
                            <i class="fas fa-book"></i>
                        </div>
                        <h2 class="text-white font-bold text-2xl">Documentation</h2>
                    </div>
                    
                    <div class="bg-[#10141e] p-6 rounded-xl text-white shadow-lg">
                        <div class="flex flex-col gap-6">
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="fas fa-file-alt"></i>
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold mb-2">User Guide</h3>
                                    <p class="text-neutral-400 mb-2">Complete documentation on how to use the Sentinel Password Manager.</p>
                                    <NuxtLink to="/documentation" class="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                                        <span>Read the guide</span>
                                        <i class="fas fa-arrow-right text-xs"></i>
                                    </NuxtLink>
                                </div>
                            </div>
                            
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-purple-500/10 text-purple-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <i class="fas fa-question-circle"></i>
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold mb-2">FAQ</h3>
                                    <p class="text-neutral-400 mb-2">Find answers to the most frequently asked questions.</p>
                                    <a href="/documentation#faq" class="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                                        <span>View FAQ</span>
                                        <i class="fas fa-arrow-right text-xs"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            activeLink: 'windows', // Valor predeterminado para las tabs
            installation: true, 
            documentation: false, 
        };
    },
    mounted() {
        // Asegurarse de que las tabs de instalación tengan un valor seleccionado por defecto
        if (!this.activeLink) {
            this.setActiveLink('windows');
        }

        // Agregar manejo de desplazamiento
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        // Limpiar event listeners cuando el componente se desmonta
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // Lógica de scroll si es necesaria en el futuro
        },
        setActiveLink(link) {
            this.activeLink = link; 
        },
        clickInstallation() {
            this.installation = true;
            this.documentation = false;
            
            // Asegurarse de que haya una pestaña seleccionada
            if (!this.activeLink) {
                this.setActiveLink('windows');
            }
        },
        clickDocumentation() {
            this.installation = false;
            this.documentation = true;
        },
        copyToClipboard() {
            const command = "git clone https://github.com/RaeZ04/Sentinel.git";
            navigator.clipboard.writeText(command);
            // Opcionalmente se podría agregar un toast o notificación aquí
        },
    },
};
</script>

<style scoped>
.bg-main-image {
    background-image: url('~/assets/bg1.png');
    background-size: cover;
    background-position: center;
}

.text-hover2 {
    color: #a1a1aa;
    transition: color 0.3s;
}

.text-hover2:hover {
    color: white;
    font-weight: bold;
}

/* Scroll suave para la navegación por anclas */
html {
    scroll-behavior: smooth;
}

/* Ocultar la barra de desplazamiento pero permitir el scroll */
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Estilos para el contenedor del terminal */
.terminal-container {
    position: relative;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: #3b4252 #1c2029;
}

/* Estilos personalizados para la barra de desplazamiento */
.custom-scrollbar::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    display: block;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #1c2029;
    border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #3b4252;
    border-radius: 3px;
    transition: background 0.3s;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #4c566a;
}

/* Indicador sutil de desplazamiento para móviles */
.terminal-container::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 20px;
    background: linear-gradient(to right, transparent, rgba(28, 32, 41, 0.8));
    pointer-events: none;
    display: block;
    opacity: 0.8;
}

@media (min-width: 640px) {
    .terminal-container::after {
        display: none;
    }
}
</style>