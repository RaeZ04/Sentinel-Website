<template>
    <header class="flex flex-row justify-between px-4 sm:px-6 lg:px-12 h-16 md:h-20 fixed w-full header-blur z-50 transition-all duration-300">
        <div class="flex flex-row items-center gap-2 sm:gap-4">
            <NuxtLink to="/" class="flex items-center hover:opacity-90 transition-opacity">
                <img src="~/assets/sentinelPM.png" alt="Logo" class="h-8 md:h-10" />
            </NuxtLink>
            <NuxtLink to="/documentation#features" class="hidden sm:flex items-center text-xs md:text-sm text-[#37a9e2] bg-[#122d45]/80 rounded-full py-1 px-3 transition-all duration-300 hover:bg-[#183a58] hover:shadow-md hover:shadow-blue-900/20">
                <span class="flex items-center">
                    <i class="fas fa-puzzle-piece mr-2 text-blue-400"></i>
                    Browser extension
                </span>
                <i class="fas fa-chevron-right ml-2 text-xs"></i>
            </NuxtLink>
        </div>
        
        <div class="text-white flex items-center">
            <nav class="hidden sm:flex gap-5 md:gap-8 px-2 md:px-3">
                <NuxtLink class="nav-link relative text-sm md:text-base font-medium" to="/documentation">Documentation</NuxtLink>
                <a class="nav-link relative text-sm md:text-base font-medium" href="/#gettingStarted">Download</a>
            </nav>
            
            <div class="hidden sm:block h-6 w-px bg-slate-700 mx-4"></div>
            
            <div class="flex items-center gap-3">
                <a href="https://github.com/RaeZ04/Sentinel" target="_blank" class="group flex items-center justify-center h-9 w-9 rounded-full hover:bg-white/10 transition-all duration-300">
                    <i class="fab fa-github text-lg text-white/70 group-hover:text-white transition-colors"></i>
                </a>
                
                <button @click="toggleMobileMenu" class="sm:hidden flex items-center justify-center h-9 w-9 rounded-full hover:bg-white/10 transition-all duration-300">
                    <i :class="['fas', mobileMenuOpen ? 'fa-xmark' : 'fa-bars', 'text-white/90']"></i>
                </button>
            </div>
        </div>
    </header>
    
    <!-- Mobile Menu Overlay -->
    <div 
        class="fixed inset-0 bg-[#0f172a]/90 z-40 backdrop-blur-md transition-all duration-300"
        :class="mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
        @click="closeMobileMenuOnOverlayClick"
    >
        <!-- Botón de cierre explícito en la parte superior -->
        <button 
            @click="closeMobileMenu" 
            class="absolute top-6 right-6 text-white/80 hover:text-white transition-colors h-10 w-10 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-700/70"
        >
            <i class="fas fa-xmark text-xl"></i>
        </button>
        
        <div class="h-full flex flex-col pt-24 px-8" @click.stop>
            <nav class="flex flex-col gap-6 items-center">
                <NuxtLink class="text-white text-lg font-medium hover:text-blue-400 transition-colors" to="/documentation" @click="closeMobileMenu">Documentation</NuxtLink>
                <a class="text-white text-lg font-medium hover:text-blue-400 transition-colors" href="/#gettingStarted" @click="closeMobileMenu">Download</a>
                <a class="text-white text-lg font-medium hover:text-blue-400 transition-colors" href="https://github.com/RaeZ04/Sentinel" target="_blank" @click="closeMobileMenu">
                    <span class="flex items-center gap-2">
                        <i class="fab fa-github"></i> GitHub
                    </span>
                </a>
                <div class="mt-6 pt-6 border-t border-slate-700 w-full flex justify-center">
                    <NuxtLink to="/documentation#features" class="flex items-center px-4 py-2 bg-[#122d45] rounded-lg text-[#37a9e2] transition-all duration-300 hover:bg-[#183a58]" @click="closeMobileMenu">
                        <i class="fas fa-puzzle-piece mr-2"></i>
                        Browser Extension
                    </NuxtLink>
                </div>
            </nav>
            
            <!-- Botón explícito de cerrar en la parte inferior -->
            <div class="mt-10 pt-6 border-t border-slate-700 w-full flex justify-center">
                <button 
                    @click="closeMobileMenu" 
                    class="mt-4 bg-slate-800/50 hover:bg-slate-700/70 text-white/80 hover:text-white py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
                >
                    <i class="fas fa-times"></i>
                    Close Menu
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mobileMenuOpen: false
        }
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
            
            // Bloquear el scroll del body cuando el menú está abierto
            if (this.mobileMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        },
        closeMobileMenu() {
            this.mobileMenuOpen = false;
            document.body.style.overflow = '';
        },
        closeMobileMenuOnOverlayClick(event) {
            // Solo cerrar si se hace clic directamente en el overlay (no en su contenido)
            if (event.target === event.currentTarget) {
                this.closeMobileMenu();
            }
        }
    },
    beforeUnmount() {
        // Asegurarse de restaurar el scroll al desmontar el componente
        document.body.style.overflow = '';
    },
    mounted() {
        // Opcionalmente, añadir un listener para la tecla Escape para cerrar el menú
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.mobileMenuOpen) {
                this.closeMobileMenu();
            }
        });
    },
    beforeUnmount() {
        // Limpiar todos los event listeners al desmontar
        document.body.style.overflow = '';
        document.removeEventListener('keydown', this.escapeKeyHandler);
    }
}
</script>

<style scoped>
.header-blur {
  backdrop-filter: blur(12px);
  background-color: rgba(15, 23, 42, 0.85);
  border-bottom: 1px solid rgba(75, 85, 99, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.nav-link {
  position: relative;
  transition: color 0.3s;
  color: rgba(255, 255, 255, 0.8);
}

.nav-link:hover {
  color: #3b82f6;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #3b82f6;
  transition: width 0.3s ease;
  border-radius: 1px;
}

.nav-link:hover::after {
  width: 100%;
}

@media (max-width: 640px) {
  .header-blur {
    backdrop-filter: blur(8px);
    background-color: rgba(15, 23, 42, 0.9);
  }
}
</style>