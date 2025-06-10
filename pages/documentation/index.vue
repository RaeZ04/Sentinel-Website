<template>
  <div class="bg-slate-900 min-h-screen pt-16 md:pt-20 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-900"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
    
    <!-- Animated background patterns -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute top-3/4 left-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 4s;"></div>
    </div>
    
    <!-- Dot pattern overlay -->
    <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle, #334155 1px, transparent 1px); background-size: 30px 30px;"></div>
    
    <!-- Hero Section -->
    <section class="px-4 sm:px-6 w-full flex flex-col items-center py-12 md:py-20 relative z-10">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/80 z-0"></div>
      <div class="w-full max-w-4xl mx-auto relative z-10">
        <div class="flex flex-col items-center text-center mb-8 md:mb-10">
          <span class="bg-blue-500/20 text-blue-400 rounded-full px-4 py-1.5 text-sm font-medium mb-3 md:mb-4">Documentation</span>
          <h1 class="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Sentinel <span class="text-blue-400">Documentation</span>
          </h1>
          <p class="text-neutral-300 max-w-2xl text-base md:text-lg px-2">
            Everything you need to know about using Sentinel Password Manager effectively and securely.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="px-4 sm:px-6 pb-16 md:pb-20">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8">        <!-- Sidebar - Mobile: Horizontal Menu, Desktop: Vertical Menu -->
        <aside class="w-full lg:w-64 lg:flex-shrink-0 mb-8 lg:mb-0">
          <!-- Mobile Horizontal Menu -->
          <div class="lg:hidden w-full overflow-x-auto pb-2 hide-scrollbar">
            <div class="flex space-x-3 min-w-max">
              <a 
                v-for="(item, index) in navItems" 
                :key="index"
                :href="`#${item.id}`"
                class="bg-slate-800/50 backdrop-blur-sm border border-slate-700/40 rounded-lg px-4 py-2 whitespace-nowrap text-sm transition-all duration-200 text-neutral-400 hover:bg-slate-700/60 hover:text-white hover:border-slate-600/60"
              >
                {{ item.title }}
              </a>
            </div>
          </div>
          
          <!-- Desktop Vertical Menu -->
          <div class="hidden lg:block bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 sticky top-24 shadow-2xl">
            <h2 class="text-white font-bold text-xl mb-4">Contents</h2>            <nav class="space-y-1">
              <a 
                v-for="(item, index) in navItems" 
                :key="index"
                :href="`#${item.id}`"
                class="block py-2 px-3 rounded-lg transition-all duration-200 text-neutral-400 hover:bg-slate-700/50 hover:text-white border border-transparent hover:border-slate-600/30"
              >
                {{ item.title }}
              </a>
            </nav>
          </div>
        </aside>

        <!-- Content -->
        <div class="flex-1">          <!-- Introduction -->
          <section id="introduction" class="mb-12 md:mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-4 md:mb-6 bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-3 md:p-4 rounded-xl shadow-lg">
              <div class="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center">
                <i class="fas fa-book text-sm md:text-base"></i>
              </div>
              <h2 class="text-white font-bold text-xl md:text-2xl">Introduction</h2>
            </div>

            <div class="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-4 md:p-6 rounded-xl text-white shadow-2xl mb-6">
              <p class="text-neutral-300 text-sm md:text-base mb-4">
                Sentinel is a password manager that stores your passwords in an encrypted file. It's designed to be portable and simple to use, 
                while maintaining high security standards to protect your sensitive information.
              </p>
              
              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 bg-blue-500/10 p-3 md:p-4 rounded-lg border border-blue-500/20">
                <div class="text-blue-400 text-xl md:text-2xl">
                  <i class="fas fa-info-circle"></i>
                </div>
                <p class="text-neutral-300 text-sm">
                  <strong class="text-blue-400">Version:</strong> This documentation applies to Sentinel Password Manager v1.0.2 and newer.
                </p>
              </div>
            </div>            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 p-4 md:p-5 rounded-xl hover:shadow-lg hover:bg-slate-800/60 transition-all duration-300">
                <div class="flex items-center mb-2 md:mb-3 text-blue-400">
                  <i class="fas fa-shield-alt mr-2"></i>
                  <h3 class="font-bold text-white text-base md:text-lg">Security First</h3>
                </div>
                <p class="text-neutral-400 text-xs md:text-sm">
                  Sentinel uses encryption to ensure your data remains secure at all times.
                </p>
              </div>

              <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 p-4 md:p-5 rounded-xl hover:shadow-lg hover:bg-slate-800/60 transition-all duration-300">
                <div class="flex items-center mb-2 md:mb-3 text-green-400">
                  <i class="fas fa-file-alt mr-2"></i>
                  <h3 class="font-bold text-white text-base md:text-lg">Portable Application</h3>
                </div>
                <p class="text-neutral-400 text-xs md:text-sm">
                  No installation required - simply download and run the executable file.
                </p>
              </div>

              <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 p-4 md:p-5 rounded-xl hover:shadow-lg hover:bg-slate-800/60 transition-all duration-300">
                <div class="flex items-center mb-2 md:mb-3 text-purple-400">
                  <i class="fas fa-folder mr-2"></i>
                  <h3 class="font-bold text-white text-base md:text-lg">Organized by Categories</h3>
                </div>
                <p class="text-neutral-400 text-xs md:text-sm">
                  Create different classes to organize your accounts by platform or service.
                </p>
              </div>

              <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 p-4 md:p-5 rounded-xl hover:shadow-lg hover:bg-slate-800/60 transition-all duration-300">
                <div class="flex items-center mb-2 md:mb-3 text-yellow-400">
                  <i class="fas fa-lock mr-2"></i>
                  <h3 class="font-bold text-white text-base md:text-lg">Easy Access</h3>
                </div>
                <p class="text-neutral-400 text-xs md:text-sm">
                  View, add, and update your passwords with a simple and intuitive interface.
                </p>
              </div>
            </div>
          </section>          <!-- Getting Started -->
          <section id="getting-started" class="mb-12 md:mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-4 md:mb-6 bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-3 md:p-4 rounded-xl shadow-lg">
              <div class="w-8 h-8 md:w-10 md:h-10 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center">
                <i class="fas fa-rocket text-sm md:text-base"></i>
              </div>
              <h2 class="text-white font-bold text-xl md:text-2xl">Getting Started</h2>
            </div>

            <div class="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-4 md:p-6 rounded-xl text-white shadow-2xl mb-6">
              <h3 class="text-lg md:text-xl font-bold mb-4">System Requirements</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6">
                <div class="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 p-3 md:p-4 rounded-lg">
                  <h4 class="font-bold mb-2 text-blue-400 text-sm md:text-base">Windows</h4>
                  <ul class="text-neutral-300 text-xs md:text-sm space-y-1.5 md:space-y-2">
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-400 mt-0.5 mr-2"></i>
                      <span>Windows 7 or newer</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-400 mt-0.5 mr-2"></i>
                      <span>2GB RAM</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-400 mt-0.5 mr-2"></i>
                      <span>50MB free disk space</span>
                    </li>
                  </ul>
                </div>                <div class="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 p-3 md:p-4 rounded-lg">
                  <h4 class="font-bold mb-2 text-red-400 text-sm md:text-base">Java (Cross-platform)</h4>
                  <ul class="text-neutral-300 text-xs md:text-sm space-y-1.5 md:space-y-2">
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-400 mt-0.5 mr-2"></i>
                      <span>Java Runtime Environment 8+</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-400 mt-0.5 mr-2"></i>
                      <span>2GB RAM</span>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-400 mt-0.5 mr-2"></i>
                      <span>50MB free disk space</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 class="text-lg md:text-xl font-bold mb-4">Download & Setup</h3>
              
              <div class="space-y-4 md:space-y-6">
                <div class="flex items-start gap-3 md:gap-4">
                  <div class="w-6 h-6 md:w-8 md:h-8 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs md:text-sm">
                    1
                  </div>
                  <div>
                    <h4 class="font-bold mb-1 md:mb-2 text-sm md:text-base">Download the Application</h4>
                    <p class="text-neutral-300 text-xs md:text-sm mb-2 md:mb-3">
                      Go to the <a href="https://github.com/RaeZ04/Sentinel/releases" target="_blank" class="text-blue-400 hover:underline">Releases page</a> and download the executable for your operating system.
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-3 md:gap-4">
                  <div class="w-6 h-6 md:w-8 md:h-8 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs md:text-sm">
                    2
                  </div>
                  <div>
                    <h4 class="font-bold mb-1 md:mb-2 text-sm md:text-base">Run the Application</h4>
                    <p class="text-neutral-300 text-xs md:text-sm mb-2 md:mb-3">
                      The application is portable. Simply run the executable file - no installation needed.
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-3 md:gap-4">
                  <div class="w-6 h-6 md:w-8 md:h-8 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs md:text-sm">
                    3
                  </div>
                  <div>
                    <h4 class="font-bold mb-1 md:mb-2 text-sm md:text-base">Start Managing Your Passwords</h4>
                    <p class="text-neutral-300 text-xs md:text-sm mb-2 md:mb-3">
                      Begin by creating classes and adding your accounts. See the "How to Use" section below for more details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>          <!-- How To Use -->
          <section id="how-to-use" class="mb-12 md:mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-4 md:mb-6 bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-3 md:p-4 rounded-xl shadow-lg">
              <div class="w-8 h-8 md:w-10 md:h-10 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center">
                <i class="fas fa-book-open text-sm md:text-base"></i>
              </div>
              <h2 class="text-white font-bold text-xl md:text-2xl">How To Use</h2>
            </div>

            <div class="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-4 md:p-6 rounded-xl text-white shadow-2xl mb-6">
              <h3 class="text-lg md:text-xl font-bold mb-3 md:mb-4">Creating Classes</h3>
              
              <div class="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-6 md:mb-8">
                <div class="w-full md:w-2/3 order-2 md:order-1">
                  <p class="text-neutral-300 text-xs md:text-sm mb-3 md:mb-4">
                    A class is a platform or service for which you want to store accounts. To get started, click on the folder icon to add a class.
                  </p>
                  <ol class="text-neutral-300 text-xs md:text-sm space-y-2 md:space-y-3 list-decimal pl-4 md:pl-5">
                    <li>
                      Click on the folder icon in the application
                    </li>
                    <li>
                      Enter the name of the platform/service (e.g., "Gmail", "Facebook", "Bank")
                    </li>
                    <li>
                      The new class will appear in the class selection dropdown
                    </li>
                  </ol>
                </div>                <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-1/3 md:h-auto bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 p-3 rounded-lg flex items-center justify-center order-1 md:order-2 flex-shrink-0">
                  <div class="bg-slate-800/50 rounded-lg p-4 flex justify-center items-center w-full h-full">
                    <i class="fas fa-folder text-3xl md:text-4xl text-blue-400"></i>
                  </div>
                </div>
              </div>

              <h3 class="text-lg md:text-xl font-bold mb-3 md:mb-4">Adding Accounts</h3>
              
              <div class="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-6 md:mb-8">
                <div class="w-full md:w-2/3 order-2 md:order-1">
                  <p class="text-neutral-300 text-xs md:text-sm mb-3 md:mb-4">
                    Once you have created a class, you can add accounts with their usernames and passwords.
                  </p>
                  <ol class="text-neutral-300 text-xs md:text-sm space-y-2 md:space-y-3 list-decimal pl-4 md:pl-5">
                    <li>
                      Click on the plus icon in the top right
                    </li>
                    <li>
                      Select the class in which you want to add the account
                    </li>
                    <li>
                      Fill in the username and password fields
                    </li>
                    <li>
                      Click save to store the account
                    </li>
                  </ol>
                  <div class="bg-yellow-500/10 p-2 md:p-3 rounded-lg border border-yellow-500/30 mt-3 md:mt-4">
                    <p class="text-yellow-400 text-xs md:text-sm flex items-start">
                      <i class="fas fa-exclamation-triangle mr-2 mt-0.5 flex-shrink-0"></i>
                      <span><strong>Important:</strong> Do not write usernames and passwords entirely in uppercase due to the program's structure.</span>
                    </p>
                  </div>
                </div>                <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-1/3 md:h-auto bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 p-3 rounded-lg flex items-center justify-center order-1 md:order-2 flex-shrink-0">
                  <div class="bg-slate-800/50 rounded-lg p-4 flex justify-center items-center w-full h-full">
                    <i class="fas fa-plus-circle text-3xl md:text-4xl text-green-400"></i>
                  </div>
                </div>
              </div>

              <h3 class="text-lg md:text-xl font-bold mb-3 md:mb-4">Viewing Accounts</h3>
              
              <div class="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-6 md:mb-8">
                <div class="w-full md:w-2/3 order-2 md:order-1">
                  <p class="text-neutral-300 text-xs md:text-sm mb-3 md:mb-4">
                    To view the saved accounts and passwords for a specific class:
                  </p>
                  <ol class="text-neutral-300 text-xs md:text-sm space-y-2 md:space-y-3 list-decimal pl-4 md:pl-5">
                    <li>
                      Select the class/platform from the dropdown menu
                    </li>
                    <li>
                      Click the "Show" button
                    </li>
                    <li>
                      The accounts and passwords for that class will appear in the box below
                    </li>
                  </ol>
                </div>                <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-1/3 md:h-auto bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 p-3 rounded-lg flex items-center justify-center order-1 md:order-2 flex-shrink-0">
                  <div class="bg-slate-800/50 rounded-lg p-4 flex justify-center items-center w-full h-full">
                    <i class="fas fa-eye text-3xl md:text-4xl text-blue-400"></i>
                  </div>
                </div>
              </div>

              <h3 class="text-lg md:text-xl font-bold mb-3 md:mb-4">Updating Passwords</h3>
              
              <div class="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div class="w-full md:w-2/3 order-2 md:order-1">
                  <p class="text-neutral-300 text-xs md:text-sm mb-3 md:mb-4">
                    To update the password for an existing account:
                  </p>
                  <ol class="text-neutral-300 text-xs md:text-sm space-y-2 md:space-y-3 list-decimal pl-4 md:pl-5">
                    <li>
                      Click the update button (located between the "Show Passwords" and "Create Class" buttons)
                    </li>
                    <li>
                      In the first dropdown, select the class of the account you want to update
                    </li>
                    <li>
                      In the second dropdown, select the account to update
                    </li>
                    <li>
                      Fill in the username and new password fields
                    </li>
                    <li>
                      Save the changes
                    </li>
                  </ol>
                </div>                <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-1/3 md:h-auto bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 p-3 rounded-lg flex items-center justify-center order-1 md:order-2 flex-shrink-0">
                  <div class="bg-slate-800/50 rounded-lg p-4 flex justify-center items-center w-full h-full">
                    <i class="fas fa-sync-alt text-3xl md:text-4xl text-yellow-400"></i>
                  </div>
                </div>
              </div>
            </div>
          </section>          <!-- Upcoming Features -->
          <section id="upcoming-features" class="mb-12 md:mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-4 md:mb-6 bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-3 md:p-4 rounded-xl shadow-lg">
              <div class="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center">
                <i class="fas fa-lightbulb text-sm md:text-base"></i>
              </div>
              <h2 class="text-white font-bold text-xl md:text-2xl">Upcoming Features</h2>
            </div>

            <div class="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-4 md:p-6 rounded-xl text-white shadow-2xl">
              <p class="text-neutral-300 text-xs md:text-sm mb-4 md:mb-6">
                We're continuously working to improve Sentinel Password Manager. Here are some features planned for future versions:
              </p>              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div class="bg-slate-700/40 backdrop-blur-sm border border-slate-600/30 p-3 md:p-4 rounded-lg flex items-start hover:bg-slate-700/60 transition-all duration-300">
                  <div class="w-6 h-6 md:w-8 md:h-8 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                    <i class="fas fa-random text-xs md:text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-white mb-1 text-sm md:text-base">Automatic Password Generation</h4>
                    <p class="text-neutral-400 text-xs md:text-sm">Generate secure, random passwords with customizable options.</p>
                  </div>
                </div>                <div class="bg-slate-700/40 backdrop-blur-sm border border-slate-600/30 p-3 md:p-4 rounded-lg flex items-start hover:bg-slate-700/60 transition-all duration-300">
                  <div class="w-6 h-6 md:w-8 md:h-8 bg-red-500/20 text-red-400 rounded-lg flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                    <i class="fas fa-trash-alt text-xs md:text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-white mb-1 text-sm md:text-base">Delete Classes and Accounts</h4>
                    <p class="text-neutral-400 text-xs md:text-sm">Remove classes and accounts that are no longer needed.</p>
                  </div>
                </div>

                <div class="bg-slate-700/40 backdrop-blur-sm border border-slate-600/30 p-3 md:p-4 rounded-lg flex items-start hover:bg-slate-700/60 transition-all duration-300">
                  <div class="w-6 h-6 md:w-8 md:h-8 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                    <i class="fas fa-user-shield text-xs md:text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-white mb-1 text-sm md:text-base">Custom Master Password</h4>
                    <p class="text-neutral-400 text-xs md:text-sm">Choose your own master password for enhanced security.</p>
                  </div>
                </div>

                <div class="bg-slate-700/40 backdrop-blur-sm border border-slate-600/30 p-3 md:p-4 rounded-lg flex items-start hover:bg-slate-700/60 transition-all duration-300">
                  <div class="w-6 h-6 md:w-8 md:h-8 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                    <i class="fas fa-paint-brush text-xs md:text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-white mb-1 text-sm md:text-base">Application Branding</h4>
                    <p class="text-neutral-400 text-xs md:text-sm">Add logotype within the application for better visual identity.</p>
                  </div>
                </div>

                <div class="bg-slate-700/40 backdrop-blur-sm border border-slate-600/30 p-3 md:p-4 rounded-lg flex items-start hover:bg-slate-700/60 transition-all duration-300">
                  <div class="w-6 h-6 md:w-8 md:h-8 bg-yellow-500/20 text-yellow-400 rounded-lg flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                    <i class="fas fa-question-circle text-xs md:text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-white mb-1 text-sm md:text-base">Help Documentation</h4>
                    <p class="text-neutral-400 text-xs md:text-sm">Add link to documentation and help page within the application.</p>
                  </div>
                </div>

                <div class="bg-slate-700/40 backdrop-blur-sm border border-slate-600/30 p-3 md:p-4 rounded-lg flex items-start hover:bg-slate-700/60 transition-all duration-300">
                  <div class="w-6 h-6 md:w-8 md:h-8 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                    <i class="fas fa-search text-xs md:text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-white mb-1 text-sm md:text-base">Improved Search Method</h4>
                    <p class="text-neutral-400 text-xs md:text-sm">Enhance searching to avoid errors in accounts and classes.</p>
                  </div>
                </div>

                <div class="bg-slate-700/40 backdrop-blur-sm border border-slate-600/30 p-3 md:p-4 rounded-lg flex items-start hover:bg-slate-700/60 transition-all duration-300">
                  <div class="w-6 h-6 md:w-8 md:h-8 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                    <i class="fas fa-sign-in-alt text-xs md:text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-white mb-1 text-sm md:text-base">New Login Method</h4>
                    <p class="text-neutral-400 text-xs md:text-sm">Improved method for starting a session in the application.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>          <!-- FAQ -->
          <section id="faq" class="mb-12 md:mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-4 md:mb-6 bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-3 md:p-4 rounded-xl shadow-lg">
              <div class="w-8 h-8 md:w-10 md:h-10 bg-yellow-500/20 text-yellow-400 rounded-lg flex items-center justify-center">
                <i class="fas fa-question-circle text-sm md:text-base"></i>
              </div>
              <h2 class="text-white font-bold text-xl md:text-2xl">Frequently Asked Questions</h2>
            </div>

            <div class="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-4 md:p-6 rounded-xl text-white shadow-2xl">
              <div class="space-y-4 md:space-y-6">
                <div class="border-b border-slate-700 pb-3 md:pb-4">
                  <h3 class="font-bold text-base md:text-lg mb-1 md:mb-2">Is Sentinel safe to use?</h3>
                  <p class="text-neutral-300 text-xs md:text-sm">
                    Yes, Sentinel encrypts your password data to keep it secure. The password file is protected and can only be accessed through the application.
                  </p>
                </div>

                <div class="border-b border-slate-700 pb-3 md:pb-4">
                  <h3 class="font-bold text-base md:text-lg mb-1 md:mb-2">Do I need to install anything?</h3>
                  <p class="text-neutral-300 text-xs md:text-sm">
                    No, Sentinel is a portable application. You can download the executable file and run it directly without installation.
                  </p>
                </div>

                <div class="border-b border-slate-700 pb-3 md:pb-4">
                  <h3 class="font-bold text-base md:text-lg mb-1 md:mb-2">Can I delete accounts or classes?</h3>
                  <p class="text-neutral-300 text-xs md:text-sm">
                    This feature is coming in a future update. Currently, you can update accounts but not delete them.
                  </p>
                </div>

                <div class="border-b border-slate-700 pb-3 md:pb-4">
                  <h3 class="font-bold text-base md:text-lg mb-1 md:mb-2">Is Sentinel free to use?</h3>
                  <p class="text-neutral-300 text-xs md:text-sm">
                    Yes, Sentinel is free and open-source software. You can use it without any limitations.
                  </p>
                </div>

                <div>
                  <h3 class="font-bold text-base md:text-lg mb-1 md:mb-2">How can I contribute to Sentinel?</h3>
                  <p class="text-neutral-300 text-xs md:text-sm">
                    Sentinel is an open-source project. You can contribute by submitting pull requests, reporting bugs, or suggesting features on our 
                    <a href="https://github.com/RaeZ04/Sentinel" target="_blank" class="text-blue-400 hover:underline">GitHub repository</a>.
                  </p>
                </div>
              </div>
            </div>
          </section>          <!-- Contact -->
          <section id="contact" class="scroll-mt-20">
            <div class="flex items-center gap-3 mb-4 md:mb-6 bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-3 md:p-4 rounded-xl shadow-lg">
              <div class="w-8 h-8 md:w-10 md:h-10 bg-red-500/20 text-red-400 rounded-lg flex items-center justify-center">
                <i class="fas fa-envelope text-sm md:text-base"></i>
              </div>
              <h2 class="text-white font-bold text-xl md:text-2xl">Contact & Support</h2>
            </div>

            <div class="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-4 md:p-6 rounded-xl text-white shadow-2xl">
              <p class="text-neutral-300 text-xs md:text-sm mb-4 md:mb-6">
                Need help or have questions about Sentinel? We're here to help. Choose the appropriate channel below.
              </p>              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                <div class="bg-slate-700/40 backdrop-blur-sm border border-slate-600/30 p-4 md:p-5 rounded-xl transition-all duration-300 hover:bg-slate-700/60">
                  <div class="flex items-center mb-3 md:mb-4">
                    <div class="w-8 h-8 md:w-10 md:h-10 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center mr-3">
                      <i class="fas fa-envelope text-sm md:text-base"></i>
                    </div>
                    <h3 class="font-bold text-sm md:text-base">Email Support</h3>
                  </div>
                  <p class="text-neutral-400 text-xs md:text-sm mb-2 md:mb-3">
                    Send us an email with your questions or feedback.
                  </p>
                  <a href="mailto:sentinelmanager@gmail.com" class="text-blue-400 text-xs md:text-sm flex items-center mt-auto hover:underline">
                    sentinelmanager@gmail.com
                  </a>
                </div>

                <div class="bg-slate-700/40 backdrop-blur-sm border border-slate-600/30 p-4 md:p-5 rounded-xl transition-all duration-300 hover:bg-slate-700/60">
                  <div class="flex items-center mb-3 md:mb-4">
                    <div class="w-8 h-8 md:w-10 md:h-10 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center mr-3">
                      <i class="fas fa-phone-alt text-sm md:text-base"></i>
                    </div>
                    <h3 class="font-bold text-sm md:text-base">Phone Support</h3>
                  </div>
                  <p class="text-neutral-400 text-xs md:text-sm mb-2 md:mb-3">
                    Call us for direct assistance with Sentinel.
                  </p>
                  <a href="tel:+34651582200" class="text-blue-400 text-xs md:text-sm flex items-center mt-auto hover:underline">
                    +34 651 582 200
                  </a>
                </div>
              </div>

              <div class="bg-slate-700/40 backdrop-blur-sm border border-slate-600/30 p-4 md:p-5 rounded-xl flex flex-col transition-all duration-300 hover:bg-slate-700/60">
                <div class="flex items-center mb-3 md:mb-4">
                  <div class="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mr-3">
                    <i class="fab fa-github text-sm md:text-base"></i>
                  </div>
                  <h3 class="font-bold text-sm md:text-base">GitHub Repository</h3>
                </div>
                <p class="text-neutral-400 text-xs md:text-sm mb-2 md:mb-3">
                  Visit our GitHub repository to report issues, suggest features, or contribute to the project.
                </p>
                <a href="https://github.com/RaeZ04/Sentinel" target="_blank" class="text-blue-400 text-xs md:text-sm flex items-center hover:underline">
                  github.com/RaeZ04/Sentinel
                  <i class="fas fa-external-link-alt ml-1.5 text-[10px] md:text-xs"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const navItems = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'how-to-use', title: 'How To Use' },
  { id: 'upcoming-features', title: 'Upcoming Features' },
  { id: 'faq', title: 'FAQ' },
  { id: 'contact', title: 'Contact & Support' }
];

// Función para desplazarse a la sección correspondiente al cargar la página
onMounted(() => {
  // Esperamos a que el DOM se actualice completamente
  nextTick(() => {
    // Verificamos si hay un hash en la URL
    if (route.hash) {
      // Quitamos el # del inicio del hash
      const targetId = route.hash.substring(1);
      
      // Buscamos el elemento con ese ID
      const element = document.getElementById(targetId);
      
      // Si existe el elemento, nos desplazamos a él
      if (element) {
        // Agregamos un pequeño retraso para asegurar que todo esté renderizado
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  });
});

// Función para desplazarse a secciones específicas cuando se hace clic en los enlaces internos
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style>
.header-blur {
  backdrop-filter: blur(12px);
  background-color: rgba(15, 23, 42, 0.85);
  border-bottom: 1px solid rgba(75, 85, 99, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Para scroll-smooth en toda la página */
html {
  scroll-behavior: smooth;
}

/* Ocultar la barra de desplazamiento pero mantener la funcionalidad de desplazamiento */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Añade margen superior al scroll a anclas para compensar el header fijo */
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}

/* Animaciones personalizadas para los elementos de fondo */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(1deg); }
  66% { transform: translateY(10px) rotate(-1deg); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.05); }
}

/* Efectos de glassmorphism mejorados */
.backdrop-blur-xl {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* Animaciones para las tarjetas */
.hover\:shadow-lg:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Efectos de brillo sutil en hover */
.hover\:bg-slate-700\/60:hover {
  position: relative;
  background-color: rgba(51, 65, 85, 0.6);
}

.hover\:bg-slate-700\/60:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent);
  border-radius: inherit;
  opacity: 0;
  animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {
  0% { opacity: 0; transform: translateX(-100%); }
  50% { opacity: 1; transform: translateX(0%); }
  100% { opacity: 0; transform: translateX(100%); }
}

/* Mejoras para mobile */
@media (max-width: 768px) {
  .scroll-mt-20 {
    scroll-margin-top: 4rem;
  }
  
  .backdrop-blur-xl {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
}

/* Efectos de profundidad para las secciones */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Animación sutil para los elementos de fondo */
.animate-pulse {
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>