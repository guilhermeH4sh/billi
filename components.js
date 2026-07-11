// Injeta estilos globais para acessibilidade e comportamento do menu mobile
const style = document.createElement('style');
style.textContent = `
  /* Anel de foco customizado para todos os elementos interativos */
  a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible, summary:focus-visible {
    outline: none !important;
    box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #C5A880 !important;
  }
  
  /* Estilos do Link de Pular Conteúdo */
  .skip-link {
    position: absolute;
    top: -100px;
    left: 24px;
    background: #131313;
    color: #FFFFFF;
    padding: 12px 24px;
    z-index: 100;
    transition: top 0.3s;
    font-weight: bold;
    border: 2px solid #C5A880;
    border-radius: 9999px;
  }
  .skip-link:focus-visible {
    top: 24px;
  }
`;
document.head.appendChild(style);

// Componente Navbar Customizado
class BilliNavbar extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active-page') || '';
    
    // Função auxiliar para definir classes de links ativos vs normais
    const getLinkClass = (page) => {
      return active === page 
        ? 'text-sm font-bold text-brand-gold-dark focus-visible:rounded' 
        : 'text-sm font-medium hover:text-brand-gold transition-colors text-on-surface-variant focus-visible:rounded';
    };

    this.innerHTML = `
      <nav class="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div class="flex items-center gap-3" id="logo-container">
            <!-- Billi Custom SVG Logo -->
            <svg viewBox="0 0 100 100" class="w-8 h-8 text-dark-graphite" fill="currentColor" fill-rule="evenodd" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 21 A 35 35 0 1 1 49.9 21 Z M 30 56 A 20 20 0 0 0 70 56 C 70 46 65 42 50 48 C 35 42 30 46 30 56 Z" />
              <circle cx="70" cy="22" r="9" class="text-brand-gold" fill="#C5A880" />
            </svg>
            ${active === 'index' 
              ? `<span class="font-headline-md text-xl tracking-tighter uppercase font-extrabold text-dark-graphite">Billi</span>` 
              : `<a href="index.html" class="font-headline-md text-xl tracking-tighter uppercase font-extrabold text-dark-graphite hover:text-brand-gold-dark transition-colors focus-visible:rounded">Billi</a>`
            }
          </div>
          
          <!-- Menu Desktop -->
          <div class="hidden md:flex gap-10 items-center">
            <a class="${getLinkClass('manifesto')}" href="manifesto.html">Manifesto</a>
            <a class="${getLinkClass('cases')}" href="cases.html">Cases</a>
            <a class="${getLinkClass('services')}" href="services.html">Serviços</a>
            <a class="${getLinkClass('lab')}" href="lab.html">Lab</a>
            <a class="${getLinkClass('faq')}" href="faq.html">FAQ</a>
          </div>
          
          <!-- Botão Menu Mobile (Hamburguer) -->
          <button id="mobile-menu-btn" class="flex md:hidden items-center justify-center p-2 text-dark-graphite hover:text-brand-gold-dark transition-colors focus-visible:rounded-full" aria-label="Abrir menu de navegação" aria-expanded="false">
            <span class="material-symbols-outlined text-3xl">menu</span>
          </button>
          
          <div class="hidden md:block">
            <a href="index.html#cta" class="bg-dark-graphite text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 hover:bg-brand-gold hover:text-dark-graphite transition-all inline-block text-center focus-visible:rounded-full">
              Iniciar Projeto
            </a>
          </div>
        </div>
      </nav>
      
      <!-- Drawer Menu Mobile overlay -->
      <div id="mobile-drawer" class="fixed inset-0 z-40 bg-dark-graphite/60 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300 flex justify-end" role="dialog" aria-modal="true" aria-label="Menu de navegação">
        <div id="mobile-drawer-content" class="w-4/5 max-w-sm bg-white h-full shadow-2xl p-8 flex flex-col justify-between transform translate-x-full transition-transform duration-300">
          <div>
            <div class="flex items-center justify-between mb-12">
              <div class="flex items-center gap-3">
                <svg viewBox="0 0 100 100" class="w-8 h-8 text-dark-graphite" fill="currentColor" fill-rule="evenodd" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 50 21 A 35 35 0 1 1 49.9 21 Z M 30 56 A 20 20 0 0 0 70 56 C 70 46 65 42 50 48 C 35 42 30 46 30 56 Z" />
                  <circle cx="70" cy="22" r="9" class="text-brand-gold" fill="#C5A880" />
                </svg>
                <span class="font-headline-md text-xl tracking-tighter uppercase font-extrabold text-dark-graphite">Billi</span>
              </div>
              <button id="mobile-menu-close-btn" class="p-2 text-dark-graphite hover:text-brand-gold-dark transition-colors focus-visible:rounded-full" aria-label="Fechar menu de navegação">
                <span class="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>
            
            <nav class="flex flex-col gap-6 text-lg font-bold">
              <a class="${getLinkClass('manifesto')}" href="manifesto.html">Manifesto</a>
              <a class="${getLinkClass('cases')}" href="cases.html">Cases</a>
              <a class="${getLinkClass('services')}" href="services.html">Serviços</a>
              <a class="${getLinkClass('lab')}" href="lab.html">Lab</a>
              <a class="${getLinkClass('faq')}" href="faq.html">FAQ</a>
            </nav>
          </div>
          
          <div class="mt-auto">
            <a href="index.html#cta" id="mobile-drawer-cta" class="w-full bg-dark-graphite text-white py-4 rounded-full font-bold hover:bg-brand-gold hover:text-dark-graphite transition-all block text-center uppercase tracking-wider text-sm focus-visible:rounded-full">
              Iniciar Projeto
            </a>
          </div>
        </div>
      </div>
    `;
    
    // Configuração dos ouvintes de eventos para o menu mobile
    const menuBtn = this.querySelector('#mobile-menu-btn');
    const closeBtn = this.querySelector('#mobile-menu-close-btn');
    const drawer = this.querySelector('#mobile-drawer');
    const drawerContent = this.querySelector('#mobile-drawer-content');
    const links = this.querySelectorAll('#mobile-drawer nav a, #mobile-drawer-cta');
    
    const openMenu = () => {
      drawer.classList.remove('pointer-events-none');
      drawer.classList.add('opacity-100');
      drawerContent.classList.remove('translate-x-full');
      menuBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeBtn.focus(), 100);
    };
    
    const closeMenu = () => {
      drawer.classList.add('pointer-events-none');
      drawer.classList.remove('opacity-100');
      drawerContent.classList.add('translate-x-full');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      menuBtn.focus();
    };
    
    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    
    // Fechar ao clicar fora (no overlay)
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        closeMenu();
      }
    });
    
    // Tecla Esc para fechar
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !drawer.classList.contains('pointer-events-none')) {
        closeMenu();
      }
    });
    
    // Fechar ao clicar em qualquer link
    links.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
    
    // Focus Trap (Captura de Foco) no menu mobile
    drawer.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const focusable = Array.from(drawer.querySelectorAll('button, a'));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        
        if (e.shiftKey) { // Shift + Tab
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else { // Tab
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    });
  }
}
customElements.define('billi-navbar', BilliNavbar);

// Componente Footer Customizado
class BilliFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-surface-container-lowest border-t border-outline-variant pt-20 pb-10">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div class="col-span-1 md:col-span-1">
            <div class="flex items-center gap-3 mb-6">
              <svg viewBox="0 0 100 100" class="w-8 h-8 text-dark-graphite" fill="currentColor" fill-rule="evenodd" xmlns="http://www.w3.org/2000/svg">
                <path d="M 50 21 A 35 35 0 1 1 49.9 21 Z M 30 56 A 20 20 0 0 0 70 56 C 70 46 65 42 50 48 C 35 42 30 46 30 56 Z" />
                <circle cx="70" cy="22" r="9" class="text-brand-gold" fill="#C5A880" />
              </svg>
              <span class="font-headline-md text-xl tracking-tighter uppercase font-extrabold text-dark-graphite">Billi</span>
            </div>
            <p class="text-sm text-on-surface-variant leading-relaxed">Redefinindo os limites do design B2B através da sofisticação e precisão estratégica.</p>
          </div>
          <div>
            <h4 class="font-bold text-dark-graphite mb-6 uppercase text-xs tracking-widest text-[10px]">Navegação</h4>
            <ul class="space-y-4 text-sm text-on-surface-variant font-medium">
              <li><a class="hover:text-brand-gold-dark transition-colors focus-visible:rounded" href="manifesto.html">Manifesto</a></li>
              <li><a class="hover:text-brand-gold-dark transition-colors focus-visible:rounded" href="cases.html">Cases</a></li>
              <li><a class="hover:text-brand-gold-dark transition-colors focus-visible:rounded" href="services.html">Serviços</a></li>
              <li><a class="hover:text-brand-gold-dark transition-colors focus-visible:rounded" href="lab.html">Lab</a></li>
              <li><a class="hover:text-brand-gold-dark transition-colors focus-visible:rounded" href="faq.html">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-dark-graphite mb-6 uppercase text-xs tracking-widest text-[10px]">Serviços</h4>
            <ul class="space-y-4 text-sm text-on-surface-variant font-medium">
              <li><a class="hover:text-brand-gold-dark transition-colors focus-visible:rounded" href="services.html">Web Design</a></li>
              <li><a class="hover:text-brand-gold-dark transition-colors focus-visible:rounded" href="services.html">Landing Pages</a></li>
              <li><a class="hover:text-brand-gold-dark transition-colors focus-visible:rounded" href="services.html">UI/UX Strategy</a></li>
              <li><a class="hover:text-brand-gold-dark transition-colors focus-visible:rounded" href="services.html">Branding</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-dark-graphite mb-6 uppercase text-xs tracking-widest text-[10px]">Contato</h4>
            <ul class="space-y-4 text-sm text-on-surface-variant font-medium">
              <li><a class="hover:text-brand-gold-dark transition-colors focus-visible:rounded" href="mailto:hello@billi.com">hello@billi.com</a></li>
              <li><a class="hover:text-brand-gold-dark transition-colors focus-visible:rounded" href="tel:+5511999999999">+55 (11) 99999-9999</a></li>
              <li class="text-muted-gray">São Paulo, BR</li>
            </ul>
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 pt-10 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
          <p class="text-xs text-muted-gray">© 2026 Billi. Todos os direitos reservados.</p>
          <div class="flex gap-6">
            <a class="text-muted-gray hover:text-brand-gold-dark transition-colors focus-visible:rounded-full" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><span class="material-symbols-outlined">share</span></a>
            <a class="text-muted-gray hover:text-brand-gold-dark transition-colors focus-visible:rounded-full" href="https://billi.com" target="_blank" rel="noopener noreferrer" aria-label="Website"><span class="material-symbols-outlined">public</span></a>
            <a class="text-muted-gray hover:text-brand-gold-dark transition-colors focus-visible:rounded-full" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><span class="material-symbols-outlined">link</span></a>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('billi-footer', BilliFooter);
