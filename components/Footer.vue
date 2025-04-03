<template>
  <footer class="bg-[#0f172a] border-t border-slate-800/50 pt-12 pb-6 mt-auto">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        <!-- Logo and Description -->
        <div class="col-span-1 lg:col-span-1">
          <div class="flex flex-col">
            <NuxtLink to="/" class="flex items-center hover:opacity-90 transition-opacity mb-4">
              <img src="~/assets/sentinelPM.png" alt="Sentinel Logo" class="h-8" />
            </NuxtLink>
            <p class="text-neutral-400 text-sm mb-4">
              Secure password management for everyone. Open-source and privacy-focused.
            </p>
            <div class="flex space-x-4 mt-2">
              <a href="https://github.com/RaeZ04/Sentinel" target="_blank" class="text-neutral-400 hover:text-white transition-colors">
                <i class="fab fa-github text-lg"></i>
              </a>
              <a href="#" class="text-neutral-400 hover:text-white transition-colors">
                <i class="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" class="text-neutral-400 hover:text-white transition-colors">
                <i class="fas fa-envelope text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-span-1 lg:col-span-1">
          <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-neutral-400 hover:text-blue-400 transition-colors text-sm">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/documentation" class="text-neutral-400 hover:text-blue-400 transition-colors text-sm">Documentation</NuxtLink>
            </li>
            <li>
              <a href="/#gettingStarted" class="text-neutral-400 hover:text-blue-400 transition-colors text-sm">Download</a>
            </li>
            <li>
              <NuxtLink to="/documentation#faq" class="text-neutral-400 hover:text-blue-400 transition-colors text-sm">FAQ</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="col-span-1 lg:col-span-1">
          <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/documentation#features" class="text-neutral-400 hover:text-blue-400 transition-colors text-sm">Browser Extension</NuxtLink>
            </li>
            <li>
              <a href="https://github.com/RaeZ04/Sentinel" target="_blank" class="text-neutral-400 hover:text-blue-400 transition-colors text-sm">GitHub Repository</a>
            </li>
            <li>
              <a href="https://github.com/RaeZ04/Sentinel/issues" target="_blank" class="text-neutral-400 hover:text-blue-400 transition-colors text-sm">Report an Issue</a>
            </li>
            <li>
              <NuxtLink to="/documentation#contact" class="text-neutral-400 hover:text-blue-400 transition-colors text-sm">Contact Support</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="col-span-1 lg:col-span-1">
          <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Stay Updated</h3>
          <p class="text-neutral-400 text-sm mb-3">Subscribe for updates and new features</p>
          <div class="flex">
            <input type="email" placeholder="Enter your email" class="bg-[#1c2333] text-sm rounded-l-lg px-3 py-2 w-full text-white border border-slate-700 focus:outline-none focus:border-blue-500 transition-colors" />
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-lg transition-colors">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-slate-800/50 my-6"></div>

      <!-- Bottom Footer -->
      <div class="flex flex-col md:flex-row justify-between items-center text-sm">
        <p class="text-neutral-500 mb-4 md:mb-0">
          &copy; {{ new Date().getFullYear() }} Sentinel Password Manager. All rights reserved.
        </p>
        <div class="flex space-x-6">
          <a href="#" class="text-neutral-500 hover:text-neutral-400 transition-colors">Privacy Policy</a>
          <a href="#" class="text-neutral-500 hover:text-neutral-400 transition-colors">Terms of Service</a>
          <a href="#" class="text-neutral-500 hover:text-neutral-400 transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional script needed for basic functionality
</script>

<style scoped>
/* Any additional styles can be added here if needed */
</style>