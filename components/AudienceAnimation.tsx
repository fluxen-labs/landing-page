'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const NS = 'http://www.w3.org/2000/svg';
const ACCENT = '#6D28D9';
const MUTE = '#94A3B8';
const FROZEN = '#CBD5E1';
const CARD_HL = '#FAF8FF';
const MOBILE = '(max-width: 860px)';

type Sinal = { title: string; text: string };
type Attrs = Record<string, string | number>;

export function AudienceAnimation({ title, sinais }: { title: string; sinais: Sinal[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mq = window.matchMedia(MOBILE);
    const q = <T extends Element = SVGElement>(s: string) => root.querySelector(s) as T;
    const layers = ['.L-chart', '.L-guides', '.L-dots', '.L-objs', '.L-tags'].map((s) => q<SVGGElement>(s));

    let io: IntersectionObserver | undefined;
    let alive = true;
    let started = false;
    const cleanups: Array<() => void> = [];
    const ctx = gsap.context(() => {}, root);

    const el = <K extends keyof SVGElementTagNameMap>(tag: K, attrs: Attrs, parent?: Element, text?: string) => {
      const e = document.createElementNS(NS, tag);
      for (const k in attrs) e.setAttribute(k, String(attrs[k]));
      if (text) e.textContent = text;
      if (parent) parent.appendChild(e);
      return e;
    };

    const build = () => {
      root.classList.add('anim');
      const [Lc, Lg, Ld, Lo, Lt] = layers;

      // ---------- Elementos ----------
      // Gráfico: demanda x estrutura
      const chart = el('g', {}, Lc);
      el('circle', { cx: 322, cy: 12, r: 3, fill: ACCENT }, chart);
      const legT1 = el('text', { x: 330, y: 15.5, class: 'leg' }, chart, 'Demanda');
      const legDot2 = el('circle', { cx: 390, cy: 12, r: 3, fill: MUTE }, chart);
      const legT2 = el('text', { x: 398, y: 15.5, class: 'leg' }, chart, 'Estrutura');
      const axis = el('path', { d: 'M320 80 H480', class: 'axis drw' }, chart);
      const cEst = el('path', { d: 'M320 78 C380 77 440 74 480 71', class: 'c-est drw' }, chart);
      const cDem = el('path', { d: 'M320 78 C370 76 410 64 440 46 S470 22 480 16', class: 'c-dem drw' }, chart);

      // Caminhos (guias)
      const p1 = el('path', { d: 'M62 150 H106', class: 'guide drw' }, Lg);
      const p2 = el('path', { d: 'M134 150 H170', class: 'guide drw' }, Lg);
      const p3 = el('path', { d: 'M222 150 H398', class: 'guide drw' }, Lg);
      const p4 = el('path', { d: 'M196 192 C196 214 230 216 248 228', class: 'guide drw' }, Lg);
      const teamPaths = [
        el('path', { d: 'M70 290 C70 272 190 280 236 266', class: 'guide drw' }, Lg),
        el('path', { d: 'M150 290 C152 278 222 276 248 266', class: 'guide drw' }, Lg),
        el('path', { d: 'M370 290 C368 278 300 276 282 266', class: 'guide drw' }, Lg),
        el('path', { d: 'M450 290 C450 272 330 280 294 266', class: 'guide drw' }, Lg),
      ];
      const basePaths = [p1, p2, p3, p4];

      // Celular, planilha, ERP
      const phone = el('g', {}, Lo);
      el('rect', { x: 36, y: 128, width: 26, height: 44, rx: 5, class: 'obj' }, phone);
      el('path', { d: 'M45 134 H53', class: 'obj', 'stroke-linecap': 'round' }, phone);
      el('text', { x: 49, y: 188, class: 'lbl', 'text-anchor': 'middle' }, phone, 'WhatsApp');

      const sheet = el('g', {}, Lo);
      el('rect', { x: 172, y: 132, width: 48, height: 36, rx: 3, class: 'obj' }, sheet);
      el('rect', { x: 173, y: 133, width: 46, height: 10, class: 'sheet-head' }, sheet);
      el('path', { d: 'M173 144 H219 M173 156 H219 M188 133 V167 M204 133 V167', class: 'obj-line' }, sheet);
      el('text', { x: 196, y: 184, class: 'lbl', 'text-anchor': 'middle' }, sheet, 'Planilha');

      const erp = el('g', {}, Lo);
      el('rect', { x: 400, y: 126, width: 80, height: 48, rx: 6, class: 'obj' }, erp);
      el('text', { x: 440, y: 155, class: 'erp-t', 'text-anchor': 'middle' }, erp, 'ERP');

      // Pessoas
      const person = (cx: number, cy: number, parent: Element, cls = 'fx2-person') => {
        const g = el('g', { class: cls }, parent);
        el('circle', { cx, cy, r: 8 }, g);
        el('path', { d: `M${cx - 13} ${cy + 26} C${cx - 13} ${cy + 11} ${cx + 13} ${cy + 11} ${cx + 13} ${cy + 26} Z` }, g);
        return g;
      };
      const A = person(120, 136, Lo);
      const typing = [114, 120, 126].map((x) => el('circle', { cx: x, cy: 119, r: 1.7, class: 'typing' }, Lo));

      const desk = el('path', { d: 'M226 264 H302', class: 'desk' }, Lo);
      const ghost = person(260, 236, Lo, 'fx2-ghost');
      const K = person(260, 236, Lo);
      const team = [70, 150, 370, 450].map((x) => person(x, 300, Lo));

      // Fila de mensagens e pilha de papel
      const bubbles: SVGRectElement[] = [];
      for (let i = 0; i < 8; i++)
        bubbles.push(el('rect', { x: 30 + (i % 2) * 3, y: 110 - i * 12, width: 28, height: 9, rx: 4.5, class: 'bubble' }, Lo));
      const sheets: SVGRectElement[] = [];
      for (let j = 0; j < 9; j++)
        sheets.push(el('rect', { x: 276 + (j % 2 ? 1.5 : 0), y: 259 - j * 4.4, width: 22, height: 3.6, rx: 1, class: 'sheet' }, Lo));

      // Etiquetas (largura medida pelo texto; re-medida ao trocar de breakpoint)
      const pills: Array<{ rect: SVGRectElement; text: SVGTextElement; center: boolean }> = [];
      const pill = (x: number, y: number, text: string, cls: string, parent: Element, center = false) => {
        const g = el('g', { class: cls, transform: `translate(${x} ${y})` }, parent);
        const inner = el('g', {}, g);
        const rect = el('rect', {}, inner);
        const t = el('text', {}, inner, text);
        pills.push({ rect, text: t, center });
        return inner;
      };
      const layoutPills = () => {
        const big = mq.matches;
        const h = big ? 24 : 20;
        const pad = big ? 12 : 10;
        pills.forEach(({ rect, text, center }) => {
          const w = Math.ceil(text.getComputedTextLength()) + pad * 2;
          rect.setAttribute('width', String(w));
          rect.setAttribute('height', String(h));
          rect.setAttribute('rx', String(h / 2));
          text.setAttribute('x', String(center ? w / 2 : pad));
          text.setAttribute('y', String(h / 2 + (big ? 4.3 : 3.5)));
          if (center) text.setAttribute('text-anchor', 'middle');
        });
        // Legenda: segundo item logo depois do primeiro texto
        const x2 = 330 + Math.ceil(legT1.getComputedTextLength()) + 14;
        legDot2.setAttribute('cx', String(x2));
        legT2.setAttribute('x', String(x2 + 8));
      };
      const price = pill(412, 100, 'R$ / mês', 'price', Lo, true);
      const tag1 = pill(140, 100, 'copia à mão', 'tag', Lt);
      const tag2 = pill(306, 222, 'tudo passa por aqui', 'tag', Lt);
      const tag3 = pill(404, 184, 'só emite nota', 'tag', Lt);
      const tagStop = pill(306, 222, '❚❚  processo parado', 'tag dark', Lt);
      layoutPills();
      const onMq = () => layoutPills();
      mq.addEventListener('change', onMq);
      cleanups.push(() => mq.removeEventListener('change', onMq));

      // ---------- Preparação ----------
      root.querySelectorAll<SVGGeometryElement>('.drw').forEach((e) => {
        const L = Math.ceil(e.getTotalLength());
        e.style.strokeDasharray = L + ' ' + (L + 10);
        e.dataset.off = String(L + 5);
        e.style.strokeDashoffset = String(L + 5);
      });
      const draw = (t: gsap.TweenTarget, dur: number, extra: gsap.TweenVars = {}) =>
        gsap.fromTo(
          t,
          { strokeDashoffset: (_i: number, e: SVGElement) => +(e.dataset.off ?? 0) },
          { strokeDashoffset: 0, duration: dur, ease: 'power2.inOut', ...extra }
        );

      const objs: Element[] = [phone, sheet, erp, A, K, desk, ...team];
      gsap.set([...objs, ghost, price, tag1, tag2, tag3, tagStop, ...typing, ...bubbles, ...sheets], { autoAlpha: 0 });
      gsap.set([...team, A, K, ghost], { transformOrigin: '50% 100%' });
      gsap.set([tag1, tag2, tag3, tagStop, price], { transformOrigin: '0% 50%' });
      gsap.set(chart.querySelectorAll('circle, text'), { autoAlpha: 0 });

      const cards = Array.from(root.querySelectorAll<HTMLElement>('.fx2-card'));
      const bars = cards.map((c) => c.querySelector<HTMLElement>('.fx2-cardbar')!);
      const replay = q<HTMLButtonElement>('.fx2-replay');

      const tl = gsap.timeline({ paused: true, onComplete: () => replay.classList.add('is-on') });
      const STOP = 13.4;
      const END = 15.8;

      const pop = (t: gsap.TweenTarget, at: number, d = 0.45) =>
        tl.fromTo(t, { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: d, ease: 'back.out(2)', immediateRender: false, stagger: 0.08 }, at);
      const highlight = (i: number, at: number) => {
        tl.to(cards[i], { backgroundColor: CARD_HL, duration: 0.5 }, at).to(bars[i], { scaleX: 1, duration: 0.6, ease: 'power3.out' }, at);
      };

      // Pontos (pedidos) viajando; os que estiverem em trânsito no STOP congelam
      const frozen: SVGCircleElement[] = [];
      const trip = (path: SVGPathElement, at: number, dur: number) => {
        if (at >= STOP) return false;
        const c = el('circle', { r: 3.5, class: 'dot', cx: -20, cy: -20 }, Ld);
        gsap.set(c, { autoAlpha: 0 });
        const L = path.getTotalLength();
        const o = { p: 0 };
        const cut = at + dur > STOP;
        const d = cut ? STOP - at : dur;
        const target = cut ? (STOP - at) / dur : 1;
        tl.set(c, { autoAlpha: 1 }, at);
        tl.fromTo(
          o,
          { p: 0 },
          {
            p: target,
            duration: d,
            ease: 'none',
            immediateRender: false,
            onUpdate: () => {
              const pt = path.getPointAtLength(o.p * L);
              c.setAttribute('cx', String(pt.x));
              c.setAttribute('cy', String(pt.y));
            },
          },
          at
        );
        if (cut) frozen.push(c);
        else tl.set(c, { autoAlpha: 0 }, at + dur);
        return !cut;
      };
      const emitNF = (at: number) => {
        if (at >= STOP) return;
        const n = el('rect', { x: 482, y: 144, width: 10, height: 12, rx: 1.5, class: 'nf' }, Lo);
        gsap.set(n, { autoAlpha: 0 });
        tl.fromTo(n, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: 18, duration: 0.9, ease: 'power1.out', immediateRender: false }, at);
      };

      // ---------- Linha do tempo ----------
      // Abertura: cenário se monta
      tl.to(chart.querySelectorAll('circle, text'), { autoAlpha: 1, duration: 0.4 }, 0)
        .add(draw(axis, 0.6), 0)
        .add(draw([cEst, cDem], END - 0.6, { ease: 'power1.in' }), 0.3)
        .to([phone, sheet, erp], { autoAlpha: 1, duration: 0.5, stagger: 0.12 }, 0.2)
        .fromTo([A, K], { autoAlpha: 0, scale: 0.7 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'back.out(2)', stagger: 0.15, immediateRender: false }, 0.4)
        .to(desk, { autoAlpha: 1, duration: 0.4 }, 0.6)
        .add(draw(basePaths, 0.6, { stagger: 0.12 }), 0.6);

      // Fluxo principal: acelera com o crescimento
      let t = 1.4;
      let dt = 1.0;
      let k = 0;
      while (t < STOP) {
        const toErp = k % 4 === 2;
        if (trip(p1, t, 0.5) && trip(p2, t + 0.5, 0.42)) {
          if (toErp) {
            if (trip(p3, t + 0.92, 0.9)) emitNF(t + 1.82);
          } else trip(p4, t + 0.92, 0.7);
        }
        k++;
        t += dt;
        dt = Math.max(0.24, dt * 0.86);
      }

      // Dor 1: digitação manual e fila de mensagens
      highlight(0, 3.2);
      pop(tag1, 3.2);
      tl.to(typing, { autoAlpha: 1, duration: 0.2 }, 3.0).fromTo(
        typing,
        { opacity: 1 },
        { opacity: 0.2, duration: 0.3, stagger: 0.1, repeat: 32, yoyo: true, ease: 'sine.inOut', immediateRender: false },
        3.2
      );
      bubbles.forEach((b, i) => {
        const at = i < 6 ? 3.4 + i * 0.75 : i === 6 ? 13.9 : 14.4;
        tl.fromTo(b, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: 'back.out(2)', immediateRender: false }, at);
      });

      // Dor 2: equipe cresce e tudo converge para uma pessoa
      tl.fromTo(team, { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'back.out(2)', stagger: 0.25, immediateRender: false }, 6.4).add(
        draw(teamPaths, 0.6, { stagger: 0.2 }),
        6.7
      );
      tl.to(tag1, { autoAlpha: 0.55, duration: 0.4 }, 7.2);
      highlight(1, 7.4);
      pop(tag2, 7.4);
      for (let tt = 7.4, ti = 0; tt < STOP; ti++, tt += 0.33) trip(teamPaths[ti % 4], tt, 0.8);
      sheets.forEach((s, i) => {
        tl.fromTo(s, { autoAlpha: 0, y: -8 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out', immediateRender: false }, 7.0 + i * 0.62);
      });

      // Dor 3: ERP pago, pouco usado
      tl.to(tag2, { autoAlpha: 0.55, duration: 0.4 }, 9.8);
      highlight(2, 10.0);
      pop(tag3, 10.0);
      pop(price, 10.15);
      tl.fromTo(price, { scale: 1 }, { scale: 1.08, duration: 0.35, yoyo: true, repeat: 3, ease: 'sine.inOut', immediateRender: false }, 10.8);

      // Final: a pessoa-chave sai e o processo para
      tl.to(K, { autoAlpha: 0, y: 6, duration: 0.5, ease: 'power2.in' }, STOP)
        .to(ghost, { autoAlpha: 1, duration: 0.5 }, STOP + 0.3)
        .to(typing, { autoAlpha: 0, duration: 0.2 }, STOP)
        .to(frozen, { attr: { fill: FROZEN }, fill: FROZEN, duration: 0.4 }, STOP)
        .to([tag1, tag3], { autoAlpha: 0.35, duration: 0.4 }, STOP)
        .to(tag2, { autoAlpha: 0, duration: 0.3 }, STOP)
        .fromTo(tagStop, { autoAlpha: 0, scale: 0.7 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'back.out(2)', immediateRender: false }, STOP + 0.35)
        .set({}, {}, END);

      // ---------- Disparo ----------
      const onReplay = () => {
        if (reduced) {
          tl.progress(1);
          return;
        }
        replay.classList.remove('is-on');
        tl.restart();
      };
      replay.addEventListener('click', onReplay);
      cleanups.push(() => replay.removeEventListener('click', onReplay));

      if (reduced) {
        tl.progress(1);
      } else if ('IntersectionObserver' in window) {
        io = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              tl.play();
              io?.disconnect();
            }
          },
          { threshold: 0.35 }
        );
        io.observe(q('.fx2-stage'));
      } else {
        tl.play();
      }
    };

    // Espera as fontes para medir as etiquetas corretamente
    const go = () => {
      if (started || !alive) return;
      started = true;
      ctx.add(build);
    };
    const timer = window.setTimeout(go, 1500);
    if (document.fonts?.ready) document.fonts.ready.then(go);
    else go();

    return () => {
      alive = false;
      window.clearTimeout(timer);
      io?.disconnect();
      ctx.revert();
      cleanups.forEach((fn) => fn());
      layers.forEach((l) => l.replaceChildren());
      root.querySelector('.fx2-replay')?.classList.remove('is-on');
      root.classList.remove('anim');
    };
  }, []);

  return (
    <div className="fx-aud" ref={rootRef}>
      <div className="fx2-top">
        <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] max-w-3xl">{title}</h2>
        <div className="fx2-stage">
          <svg viewBox="0 0 520 340" aria-hidden="true" focusable="false">
            <g className="L-chart" />
            <g className="L-guides" />
            <g className="L-dots" />
            <g className="L-objs" />
            <g className="L-tags" />
          </svg>
          <button className="fx2-replay" type="button" aria-label="Repetir animação">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2.5 8a5.5 5.5 0 1 0 1.7-4" />
              <path d="M2.5 2.5v3h3" />
            </svg>
          </button>
        </div>
      </div>

      <div className="fx2-cards">
        {sinais.map((s) => (
          <article key={s.title} className="fx2-card">
            <span className="fx2-cardbar" aria-hidden="true" />
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-neutral-800 leading-relaxed">{s.text}</p>
          </article>
        ))}
      </div>

      <p className="mt-10 text-lg md:text-xl font-semibold">Reconheceu algum? É por aí que a gente começa.</p>
    </div>
  );
}
