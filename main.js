(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ================= i18n ================= */
  const T = {
    pt: {
      'nav.menu': 'Cardápio', 'nav.awards': 'Prêmios', 'nav.events': 'Eventos', 'nav.visit': 'Visite',
      'hero.title': 'O Clássico do Centro', 'hero.sticker1': '2º melhor', 'hero.sticker2': 'hambúrguer do mundo', 'hero.scroll': 'Role',
      'tick': 'O CLÁSSICO DO CENTRO ✦ VILA BUARQUE ✦ SÃO PAULO ✦ DESDE 2013 ✦ 2º MELHOR HAMBÚRGUER DO MUNDO ✦ MELHOR HAMBÚRGUER DO BRASIL 26/27 ✦ ',
      'mao.tag': 'Na mão', 'mao.t1': 'Do centro', 'mao.t2': 'pro mundo.',
      'mao.lead': 'Desde 2013 na mesma esquina da Vila Buarque. Hoje o Holy está nos rankings dos melhores do planeta, mas o jeito de comer continua o mesmo: com as duas mãos.',
      'pony.t1': 'Melhor hambúrguer', 'pony.t2': 'do mundo.',
      'pony.lead': 'O Pony Line: burger de 200g dry aged 65 dias, cheddar inglês e melaço de bacon no pão brioche. Somente no ponto da casa.',
      'pony.s1': 'Blend', 'pony.s2': 'Dias dry aged',
      'menu.title': 'Cardápio', 'menu.starters': 'Entradas', 'menu.desserts': 'Sobremesas',
      'menu.note': 'Acompanham fritas · Todos os pães são feitos pela nossa equipe da Casa do Padeiro · Utilizamos gordura de bacon e pimenta preta moída no preparo dos nossos burgers',
      'menu.drinks': 'Também tem soft drinks, cervejas (incluindo a Holy IPA) e coquetéis autorais.',
      'menu.pdf': 'Cardápio completo (PDF)',
      'rec.tag': 'Fita da casa', 'rec.lead': 'O que rola na chapa, no salão e na estrada. Troque de canal.',
      'rec.c1': 'O primeiro smash dry aged do Brasil', 'rec.c2': 'Gorgonzola, cogumelos defumados, alho negro',
      'rec.c3t': 'Balcão', 'rec.c3': 'Da chapa pra mesa, no centro', 'rec.c4': '3º colocado no mundial', 'rec.c5': 'Uma noite na casa',
      'aw.tag': 'Prateleira', 'aw.title': 'Prêmios', 'aw.s1': 'melhor do mundo', 'aw.s2': 'melhor do Brasil', 'aw.s3': 'anos de centro',
      'aw.1': '', 'aw.2': '', 'aw.3': '', 'aw.4': '', 'aw.5': '', 'aw.6': '', 'aw.7': '', 'aw.8': '', 'aw.9': '', 'aw.10': '', 'aw.11': '',
      'ev.tag': 'Na estrada', 'ev.title': 'Quer o Holy<br>no seu evento?',
      'ev.lead': 'Levamos o Holy Burger para festivais, ativações, eventos corporativos e experiências gastronômicas por todo o Brasil. Estrutura profissional, operação rápida e burgers reconhecidos internacionalmente.',
      'ev.lead2': 'Envie um e-mail e nos conte como podemos levar a experiência do Holy Burger para o seu evento.',
      'pr.tag': 'Imprensa', 'pr.photos': 'Fotos',
      'vi.tag': 'Visite', 'vi.map': 'Como chegar ↗', 'vi.hours': 'Horários de funcionamento',
      'vi.mon': 'Segunda', 'vi.closed': 'Fechado', 'vi.tue': 'Terça a quinta', 'vi.fri': 'Sexta e sábado', 'vi.sun': 'Domingo',
      'vi.talk': 'Dúvidas, sugestões<br>ou reclamações?', 'vi.cta': 'Fale com a gente', 'vi.pay': 'Aceitamos',
      'vi.open': 'Aberto agora', 'vi.shut': 'Fechado agora',
      'ft.top': 'Topo ↑',
      'b.new': 'Novo', 'b.veg': 'Make it veggie', 'b.spicy': 'Picante', 'b.world': '2º melhor do mundo',
    },
    en: {
      'nav.menu': 'Menu', 'nav.awards': 'Awards', 'nav.events': 'Events', 'nav.visit': 'Visit',
      'hero.title': 'The Downtown Classic', 'hero.sticker1': '2nd best', 'hero.sticker2': 'burger in the world', 'hero.scroll': 'Scroll',
      'tick': 'O CLÁSSICO DO CENTRO ✦ THE DOWNTOWN CLASSIC ✦ VILA BUARQUE ✦ SÃO PAULO ✦ SINCE 2013 ✦ 2ND BEST BURGER IN THE WORLD ✦ BEST BURGER IN BRAZIL 26/27 ✦ ',
      'mao.tag': 'In hand', 'mao.t1': 'From downtown', 'mao.t2': 'to the world.',
      'mao.lead': 'Since 2013 on the same corner of Vila Buarque. Today Holy sits on the lists of the best burgers on the planet, but the way to eat it hasn’t changed: with both hands.',
      'pony.t1': 'Best burger', 'pony.t2': 'in the world.',
      'pony.lead': 'The Pony Line: a 200g burger dry aged for 65 days, English cheddar and bacon molasses on a brioche bun. Cooked the house way only.',
      'pony.s1': 'Patty', 'pony.s2': 'Days dry aged',
      'menu.title': 'Menu', 'menu.starters': 'Starters', 'menu.desserts': 'Desserts',
      'menu.note': 'Served with fries · All buns are baked by our team at Casa do Padeiro · We use bacon fat and freshly ground black pepper on all our burgers',
      'menu.drinks': 'We also pour soft drinks, beers (including our Holy IPA) and signature cocktails.',
      'menu.pdf': 'Full menu (PDF, Portuguese)',
      'rec.tag': 'House tape', 'rec.lead': 'What goes down on the grill, in the dining room and on the road. Switch channels.',
      'rec.c1': 'Brazil’s first dry aged smash', 'rec.c2': 'Gorgonzola, smoked mushrooms, black garlic',
      'rec.c3t': 'The pass', 'rec.c3': 'From the grill to the table, downtown', 'rec.c4': '3rd place at the world championship', 'rec.c5': 'A night at the house',
      'aw.tag': 'Trophy shelf', 'aw.title': 'Awards', 'aw.s1': 'best in the world', 'aw.s2': 'best in Brazil', 'aw.s3': 'years downtown',
      'aw.1': 'Burger Dudes · 2nd best burger in the world 26/27',
      'aw.2': 'Dubai Burger Championship · 3rd place 2026',
      'aw.3': 'Best burger 21/22 · 2nd place 22/23 & 25/26',
      'aw.4': 'Veja SP · Three-time best burger 2024, 25 & 26',
      'aw.5': 'Paladar · Best burger in São Paulo 2016 & 2017',
      'aw.6': 'Prazeres da Mesa · Best burger in Brazil 26/27',
      'aw.7': 'Top 10 craft burger joints in Brazil · Most loved burger in SP 25/26',
      'aw.8': 'Burger Cup champion 2017 · 4th best burger joint 2026',
      'aw.9': 'UOL Nossa · 2nd best burger in São Paulo 24/25 & 25/26',
      'aw.10': 'Belgrade Burger Festival · Best burger 2026',
      'aw.11': 'Datafolha Best of São Paulo · Finalist 2026',
      'ev.tag': 'On the road', 'ev.title': 'Want Holy<br>at your event?',
      'ev.lead': 'We take Holy Burger to festivals, brand activations, corporate events and food experiences all over Brazil and abroad. Professional setup, fast service and internationally awarded burgers.',
      'ev.lead2': 'Send us an email and tell us how we can bring the Holy Burger experience to your event.',
      'pr.tag': 'Press', 'pr.photos': 'Photos',
      'vi.tag': 'Visit', 'vi.map': 'Get directions ↗', 'vi.hours': 'Opening hours',
      'vi.mon': 'Monday', 'vi.closed': 'Closed', 'vi.tue': 'Tuesday to Thursday', 'vi.fri': 'Friday & Saturday', 'vi.sun': 'Sunday',
      'vi.talk': 'Questions, suggestions<br>or complaints?', 'vi.cta': 'Talk to us', 'vi.pay': 'We accept',
      'vi.open': 'Open now', 'vi.shut': 'Closed now',
      'ft.top': 'Top ↑',
      'b.new': 'New', 'b.veg': 'Make it veggie', 'b.spicy': 'Spicy', 'b.world': '2nd best in the world',
    }
  };

  /* ================= menu data ================= */
  const M = {
    burgers: [
      { n: 'Pony Line', p: 110, b: ['world'], feat: true,
        pt: 'Burger de 200g dry aged 65 dias, cheddar inglês e melaço de bacon no pão brioche. Somente no ponto da casa.',
        en: '200g burger dry aged 65 days, English cheddar and bacon molasses on a brioche bun. House temperature only.' },
      { n: 'All American 65', p: 98, b: ['new', 'spicy'],
        pt: 'Dois smashes de 70g dry-aged 65 dias, cheddar inglês, cebola na chapa e bacon. Molho Spicy Club no pão de brioche.',
        en: 'Two 70g smashes dry aged 65 days, English cheddar, griddled onion and bacon. Spicy Club sauce on a brioche bun.' },
      { n: 'Holy Burger', p: 75, b: ['veg'],
        pt: 'Burger 180g, cheddar inglês, romana baby, tomate, picles da casa, cebola roxa, bacon e maionese branca no pão de brioche.',
        en: '180g burger, English cheddar, baby romaine, tomato, house pickles, red onion, bacon and white mayo on a brioche bun.' },
      { n: 'The Same Old Blues', p: 83, b: [],
        pt: 'Burger 180g, gorgonzola Dolce, cogumelos defumados, bacon, maionese de alho negro trufado no pão de brioche.',
        en: '180g burger, Gorgonzola Dolce, smoked mushrooms, bacon and truffled black garlic mayo on a brioche bun.' },
      { n: 'Original', p: 75, b: [],
        pt: 'Burger 180g, cheddar inglês, cebola caramelizada, maionese branca e bacon no pão preto.',
        en: '180g burger, English cheddar, caramelized onion, white mayo and bacon on a black bun.' },
      { n: 'Pistacchio', p: 79, b: ['veg'],
        pt: 'Burger 180g, coalhada seca, pesto de pistache e mel de laranjeira no pão de brioche.',
        en: '180g burger, labneh, pistachio pesto and orange blossom honey on a brioche bun.' },
      { n: 'Fat Melt', p: 78, b: ['new'],
        pt: 'Dois smashes de 70g, cheddar inglês, cebola na chapa, gorgonzola Dolce e maionese no pão de forma.',
        en: 'Two 70g smashes, English cheddar, griddled onion, Gorgonzola Dolce and mayo on sandwich bread.' },
      { n: 'Franz', p: 78, b: [],
        pt: 'Dois smashes de 70g, cheddar inglês, cebola na chapa e maionese de alho negro trufado no croissant da casa.',
        en: 'Two 70g smashes, English cheddar, griddled onion and truffled black garlic mayo on our house croissant.' },
      { n: 'Za’atar Smash', p: 68, b: ['new', 'veg'],
        pt: 'Smash temperado com za’atar, cheddar inglês, coalhada, tomate, cebola, pepino, hortelã e molho de iogurte com tahine servido no pão pita.',
        en: 'Za’atar-spiced smash, English cheddar, labneh, tomato, onion, cucumber, mint and yogurt-tahini sauce in pita bread.' },
      { n: 'NFC', p: 65, b: ['new', 'spicy'],
        pt: 'Frango frito, bacon, coalhada, picles, Molho Spicy Club e alface no pão brioche.',
        en: 'Fried chicken, bacon, labneh, pickles, Spicy Club sauce and lettuce on a brioche bun.' },
    ],
    entradas: [
      { n: 'Pastrami Fries', p: 68, pt: 'Fritas, sour cream, pastrami desfiado, maionese de Sriracha, páprica e gema de ovo.', en: 'Fries, sour cream, pulled pastrami, Sriracha mayo, paprika and egg yolk.' },
      { n: 'Coxinha de Pastrami', p: 55, pt: 'Coxinha de pastrami desfiado com creme de queijo, maionese de Sriracha e Grana Padano. 4 unidades.', en: 'Pulled pastrami coxinhas with cheese cream, Sriracha mayo and Grana Padano. 4 pieces.' },
      { n: 'Cheese Burger Arancini', p: 55, pt: 'Bolinhos de risoto com hambúrguer, cebola, cheddar inglês e molho especial.', en: 'Risotto balls with burger, onion, English cheddar and special sauce.' },
      { n: 'Pastrami Bacon', p: 50, pt: 'Duas fatias generosas de pastrami de barriga de porco glaciadas com mel apimentado.', en: 'Two generous slices of pork belly pastrami glazed with hot honey.' },
    ],
    sobremesas: [
      { n: 'Apple Pie', p: 45, pt: 'Tortinha de maçã com sorvete Artisano®, caramelo toffee e crumble.', en: 'Apple tart with Artisano® ice cream, toffee caramel and crumble.' },
      { n: 'Bolo de Chocolate', p: 45, pt: 'Bolo de chocolate com ganache de chocolate meio amargo e uma bola de sorvete de leite Artisano®.', en: 'Chocolate cake with dark chocolate ganache and a scoop of Artisano® milk ice cream.' },
      { n: 'Pudim na Latinha', p: 38, pt: 'Pudim na latinha com cumaru.', en: 'Brazilian flan in a tin, with cumaru (tonka bean).' },
    ],
    shakes: [
      { n: 'Morango', p: 55, pt: 'Sorvete de leite, calda de morango, chantilly e granulado colorido.', en: 'Strawberry: milk ice cream, strawberry syrup, whipped cream and rainbow sprinkles.' },
      { n: 'Chocolate', p: 55, pt: 'Sorvete de leite, ganache de chocolate meio amargo e chantilly.', en: 'Milk ice cream, dark chocolate ganache and whipped cream.' },
      { n: 'Milkshake Bardêra', p: 60, pt: 'Sorvete de leite, licor de doce de leite Bardêra, doce de leite Bardêra e chantilly.', en: 'Milk ice cream, Bardêra dulce de leche liqueur, Bardêra dulce de leche and whipped cream.' },
      { n: 'Ice Popcorn', p: 55, pt: 'Sorvete de pipoca, caramelo toffee, chantilly e pipoca caramelizada.', en: 'Popcorn ice cream, toffee caramel, whipped cream and caramel popcorn.' },
    ],
  };

  let lang = 'pt';
  try { const s = localStorage.getItem('holy-lang'); if (s === 'en' || s === 'pt') lang = s; } catch (e) {}

  let tab = 'burgers';
  const grid = $('[data-menu]');
  const badge = k => {
    const cls = { new: '', veg: 'v', spicy: 's', world: 'w' }[k];
    return `<i class="b ${cls}">${T[lang]['b.' + k]}</i>`;
  };
  function renderMenu() {
    grid.innerHTML = M[tab].map((it, i) => `
      <article class="item${it.feat ? ' feat' : ''}" style="animation-delay:${i * 45}ms">
        <div class="item-h"><h3 class="item-n">${it.n}</h3>${it.b && it.b.length ? `<span class="badges">${it.b.map(badge).join('')}</span>` : ''}<span class="item-l"></span><span class="item-p"><small>R$</small>${it.p}</span></div>
        <p class="item-d">${it[lang]}</p>
      </article>`).join('');
  }
  $$('.menu-tabs button').forEach(b => b.addEventListener('click', () => {
    tab = b.dataset.tab;
    $$('.menu-tabs button').forEach(x => x.setAttribute('aria-selected', x === b));
    renderMenu();
  }));

  function applyLang(l, animate) {
    lang = l;
    document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';
    try { localStorage.setItem('holy-lang', l); } catch (e) {}
    const dict = T[l];
    $$('[data-i18n]').forEach(el => { const v = dict[el.dataset.i18n]; if (v !== undefined) el.textContent = v; });
    $$('[data-i18n-html]').forEach(el => { const v = dict[el.dataset.i18nHtml]; if (v !== undefined) el.innerHTML = v; });
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l));
    movePill();
    renderMenu();
    updateOpen();
    if (animate && !reduce) {
      document.body.animate([{ filter: 'blur(6px)', opacity: .4 }, { filter: 'none', opacity: 1 }], { duration: 420, easing: 'ease-out' });
    }
  }
  function movePill() {
    const on = $('.lang button[aria-pressed="true"]'), pill = $('.lang-pill');
    if (!on) return;
    pill.style.width = on.offsetWidth + 'px';
    pill.style.transform = `translateX(${on.offsetLeft - 3}px)`;
  }
  $$('.lang button').forEach(b => b.addEventListener('click', () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang, true); }));
  addEventListener('resize', movePill);
  document.fonts && document.fonts.ready.then(movePill);

  /* ================= open now (São Paulo time) ================= */
  function updateOpen() {
    const el = $('[data-open-now]'); if (!el) return;
    const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Sao_Paulo', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
    const g = t => parts.find(p => p.type === t).value;
    const d = g('weekday'); const m = (+g('hour') % 24) * 60 + +g('minute');
    const H = h => h * 60;
    const slots = { Mon: [], Tue: [[11, 16], [18, 24]], Wed: [[11, 16], [18, 24]], Thu: [[11, 16], [18, 24]], Fri: [[11, 24]], Sat: [[11, 24]], Sun: [[11, 23]] }[d] || [];
    const open = slots.some(([a, b]) => m >= H(a) && m < H(b));
    el.textContent = T[lang][open ? 'vi.open' : 'vi.shut'];
    el.className = 'open-now ' + (open ? 'on' : 'off');
  }

  /* ================= intro ================= */
  const intro = $('.intro');
  const bar = $('.intro-bar span');
  let pct = 0;
  const tickIntro = setInterval(() => { pct = Math.min(pct + 18 + Math.random() * 20, 92); bar.style.width = pct + '%'; }, 140);
  const done = () => { clearInterval(tickIntro); bar.style.width = '100%'; setTimeout(() => intro.classList.add('out'), 220); setTimeout(() => intro.remove(), 1300); };
  if (reduce) intro.remove(); else { addEventListener('load', done); setTimeout(done, 2600); }

  /* ================= header / drawer ================= */
  const hdr = $('.hdr');
  const burger = $('.hdr-burger'), drawer = $('.drawer');
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    drawer.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', !open);
  });
  $$('.drawer a').forEach(a => a.addEventListener('click', () => burger.click()));

  /* ================= cursor ================= */
  const cur = $('.cursor');
  if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
    let x = 0, y = 0, cx = 0, cy = 0;
    addEventListener('pointermove', e => { x = e.clientX; y = e.clientY; });
    (function loop() { cx += (x - cx) * .22; cy += (y - cy) * .22; cur.style.transform = `translate(${cx}px,${cy}px)`; requestAnimationFrame(loop); })();
    document.addEventListener('pointerover', e => cur.classList.toggle('big', !!e.target.closest('a,button,.card,.sticker')));
  }

  /* ================= hero timecode ================= */
  const tc = $('[data-tc]');
  const t0 = performance.now();
  const pad = n => String(n).padStart(2, '0');
  setInterval(() => {
    const s = (performance.now() - t0) / 1000;
    tc.textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(Math.floor(s) % 60)}:${pad(Math.floor((s % 1) * 24))}`;
  }, 1000 / 24);

  /* ================= scroll: header, hero parallax, horizontal track ================= */
  const mao = $('.mao'), track = $('.mao-track'), heroV = $('.hero-video');
  function sizeMao() {
    const extra = track.scrollWidth - innerWidth;
    mao.style.setProperty('--mao-h', (innerHeight + Math.max(extra, 0)) + 'px');
  }
  function onScroll() {
    const y = scrollY;
    hdr.classList.toggle('solid', y > innerHeight * .6);
    if (!reduce && y < innerHeight) heroV.style.transform = `scale(${1.08 + y / innerHeight * .12}) translateY(${y * .18}px)`;
    const r = mao.getBoundingClientRect();
    const max = mao.offsetHeight - innerHeight;
    const p = Math.min(Math.max(-r.top / max, 0), 1);
    track.style.transform = `translateX(${-p * (track.scrollWidth - innerWidth)}px)`;
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => { sizeMao(); onScroll(); });
  addEventListener('load', () => { sizeMao(); onScroll(); });
  sizeMao();

  /* ================= reveal + counters + lazy videos ================= */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.classList.add('seen');
    if (el.matches('.count')) countUp(el);
    io.unobserve(el);
  }), { threshold: .2 });
  $$('.sticker').forEach((s, i) => { s.style.transitionDelay = (i % 4) * 80 + 'ms'; io.observe(s); });
  $$('.h-xl, .lead, .pony-specs, .press-row, .hours').forEach(el => { el.setAttribute('data-reveal', ''); io.observe(el); });
  $$('.count').forEach(el => io.observe(el));
  function countUp(el) {
    const to = +el.dataset.to; const t = performance.now();
    (function f(n) { const k = Math.min((n - t) / 1100, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); })(t);
  }
  const vio = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) {
      const s = v.querySelector('source[data-src]');
      if (s) { s.src = s.dataset.src; s.removeAttribute('data-src'); v.load(); }
      v.play().catch(() => {});
    } else v.pause();
  }), { rootMargin: '200px' });
  $$('[data-lazy-video]').forEach(v => vio.observe(v));

  /* ================= REC ================= */
  const vf = $('.vf-video'), stat = $('.vf-static'), ctx = stat.getContext('2d');
  const chLbl = $('[data-vf-ch]'), lbl = $('[data-vf-label]'), vtc = $('[data-vf-tc]');
  stat.width = 160; stat.height = 284;
  let noiseOn = false;
  function noise() {
    if (!noiseOn) return;
    const img = ctx.createImageData(stat.width, stat.height);
    for (let i = 0; i < img.data.length; i += 4) { const c = Math.random() * 255; img.data[i] = img.data[i + 1] = img.data[i + 2] = c; img.data[i + 3] = 255; }
    ctx.putImageData(img, 0, 0);
    requestAnimationFrame(noise);
  }
  function tune(btn, autoplay) {
    $$('.ch').forEach(b => b.classList.toggle('is-on', b === btn));
    chLbl.textContent = btn.querySelector('.ch-n').textContent;
    lbl.textContent = btn.dataset.label;
    noiseOn = true; stat.classList.add('on'); noise();
    vf.poster = btn.dataset.poster;
    vf.src = btn.dataset.src;
    if (autoplay) vf.play().catch(() => {});
    setTimeout(() => { noiseOn = false; stat.classList.remove('on'); }, reduce ? 0 : 380);
  }
  let recLive = false;
  $$('.ch').forEach(b => b.addEventListener('click', () => tune(b, true)));
  new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      if (!recLive) { recLive = true; tune($('.ch.is-on'), true); } else vf.play().catch(() => {});
    } else vf.pause();
  }), { threshold: .25 }).observe($('.vf'));
  vf.addEventListener('timeupdate', () => {
    const s = vf.currentTime;
    vtc.textContent = `00:${pad(Math.floor(s / 60))}:${pad(Math.floor(s) % 60)}`;
  });

  /* ================= drag to scroll the hand gallery ================= */
  let drag = null;
  track.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; drag = { x: e.clientX, y: scrollY }; track.style.cursor = 'grabbing'; });
  addEventListener('pointermove', e => { if (!drag) return; scrollTo(0, drag.y - (e.clientX - drag.x) * 1.4); });
  addEventListener('pointerup', () => { drag = null; track.style.cursor = ''; });
  track.addEventListener('dragstart', e => e.preventDefault());

  applyLang(lang, false);
  setInterval(updateOpen, 60000);
})();
