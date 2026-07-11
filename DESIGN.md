# Design System: Kinetic Precision - Billi Luxury Edition

## Brand & Style

O design system da **Billi** foi desenvolvido para representar uma agência digital B2B de alto padrão com especialidade em marcas e nichos de luxo (como Moda, Relojoaria, Náutica e Automotivos de Luxo). A personalidade da marca é sofisticada, vanguardista e meticulosamente precisa.

O estilo visual é o **Minimalismo Claro Premium** com viés de alta tecnologia e animações fluidas. Utiliza espaços em branco generosos para criar uma sensação de requinte e foco, empregando a paleta de ouro champanhe para realces e a biblioteca GSAP para transições fluidas.

## Colors

Esta versão do design system utiliza uma paleta de luxo de alto contraste, colocando o foco na clareza do conteúdo e na estrutura refinada.

- **Primary Background (Branco):** `#FFFFFF` - A cor base de todo o projeto, transmitindo clareza e modernidade.
- **On-Background (Dark Graphite):** `#131313` - Tom de grafite escuro usado para textos primários e elementos de alto contraste.
- **Secondary / Surface (Off-White & Light Gray):** `#FAFAFA` / `#F9F9F9` / `#F3F3F3` - Usados para blocos de depoimentos, seções alternadas e recipientes para criar profundidade sutil.
- **Outline / Borders:** `#D1D1D1` / `#EEEEEE` - Linhas finas de 1px que separam seções de forma minimalista.
- **Brand Gold (Dourado Champagne):** `#C5A880` - A cor de destaque premium usada em botões de realce, bordas de cards selecionados, ícones e destaques tipográficos.

## Typography

- **Syne** é usada para todos os títulos principais. Seu design geométrico e largo é enfatizado para criar blocos visuais marcantes.
- **Inter** fornece a contrapartida neutra e altamente legível para textos corridos.

## Motion, Animations & Libraries

As animações e interações enriquecidas com bibliotecas inteligentes são um pilar fundamental da experiência premium Billi:

1. **Carregamento Inicial (Entrance - GSAP):** Títulos principais, parágrafos e botões entram com transições coordenadas Y e opacidade.
2. **Efeito Parallax 3D (Interactive - GSAP):** Os mockups da Hero respondem ao movimento do mouse com uma rotação em perspectiva 3D (`rotationX`, `rotationY`).
3. **Scroll Horizontal de Serviços (GSAP ScrollTrigger):** A seção "Serviços de Elite" prende (pins) o scroll vertical e exibe seus cards horizontalmente, criando uma transição cinematográfica fluida.
4. **Carrossel de Cases de Sucesso (Swiper.js):** Os projetos de elite são exibidos em um controle deslizante suave com paginação ativa e suporte a gestos touch, facilitando a navegação mobile.
5. **Rede de Partículas Interativa (HTML5 Canvas):** A seção "Billi Lab" renderiza uma rede constelar de partículas douradas que interagem fisicamente e se conectam ao cursor do mouse.
6. **Simulador de Orçamentos e Escopo:** Um painel dinâmico e inteligente com lógica JS para calcular automaticamente o prazo de entrega aproximado e estimativa de investimento do projeto a ser contratado, integrando a seleção do usuário diretamente ao formulário de proposta corporativa.
