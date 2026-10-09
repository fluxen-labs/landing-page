'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { WHATSAPP_DIAGNOSTICO_URL } from '@/lib/contato';

const NS = 'http://www.w3.org/2000/svg';
const HIGHLIGHT = '#06B6D4';
const HIGHLIGHT_FILL = '#1B3A4D';

const passos = [
  {
    pill: '01 · Conversa',
    title: 'Primeiro, a gente escuta.',
    text: 'De 60 a 180 minutos de conversa, em 1 a 3 reuniões, para entender como a sua operação funciona hoje.',
  },
  {
    pill: '02 · Entendimento',
    title: 'Mapeamos a operação real.',
    text: 'Onde estão os gargalos, o que vale automatizar e o que deve continuar como está.',
  },
  {
    pill: '03 · Alinhamento',
    title: 'Expectativa alinhada dos dois lados.',
    text: 'Escopo, prioridades e resultado esperado definidos em conjunto, antes de qualquer número.',
  },
  {
    pill: '04 · Orçamento',
    title: 'Só então, o orçamento.',
    text: 'Uma proposta construída sobre o que foi entendido. Sem surpresa no meio do caminho.',
  },
];

const etapasNav = ['Conversa', 'Entendimento', 'Alinhamento', 'Orçamento'];

const linhasAlinhamento = [
  'Pedidos entram direto na planilha',
  'Alerta automático para aprovação',
  'Conferência continua manual',
];

const entregas = ['Conversa', 'Mapa da operação', 'Escopo alinhado'];

function Node({ id, x, y, title, sub, ring = false }: { id?: string; x: number; y: number; title: string; sub: string; ring?: boolean }) {
  return (
    <g className="fx-node" id={id} transform={`translate(${x} ${y})`}>
      {ring && <rect className="ring" width="150" height="56" rx="12" />}
      <rect className="node-box draw" width="150" height="56" rx="12" />
      <text className="t-node" x="18" y="25">{title}</text>
      <text className="t-sub" x="18" y="42">{sub}</text>
    </g>
  );
}

export function MethodAnimation() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const q = <T extends Element = SVGElement>(s: string) => root.querySelector(s) as T;
    const qa = <T extends Element = SVGElement>(s: string) => Array.from(root.querySelectorAll<T>(s));

    let io: IntersectionObserver | undefined;
    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      root.classList.add('anim');

      // Aleatório com semente: o "áudio" fica idêntico a cada execução
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };

      // Barras de áudio
      const makeBars = (id: string, cy: number) => {
        const g = q('#' + id);
        const arr: SVGRectElement[] = [];
        for (let i = 0; i < 30; i++) {
          const r = document.createElementNS(NS, 'rect');
          r.setAttribute('x', String(120 + i * 14));
          r.setAttribute('y', String(cy - 2));
          r.setAttribute('width', '6');
          r.setAttribute('height', '4');
          r.setAttribute('rx', '2');
          r.setAttribute('class', 'bar');
          g.appendChild(r);
          arr.push(r);
        }
        cleanups.push(() => arr.forEach((r) => r.remove()));
        return arr;
      };
      const barsC = makeBars('fx-bars-c', 130);
      const barsF = makeBars('fx-bars-f', 230);

      // Prepara traços para "desenhar"
      qa<SVGGeometryElement>('.draw').forEach((el) => {
        const L = Math.ceil(el.getTotalLength());
        el.style.strokeDasharray = L + ' ' + (L + 10);
        el.dataset.off = String(L + 5);
        el.style.strokeDashoffset = String(L + 5);
      });
      const draw = (t: gsap.TweenTarget, dur: number, extra: gsap.TweenVars = {}) =>
        gsap.fromTo(
          t,
          { strokeDashoffset: (_i: number, el: SVGElement) => +(el.dataset.off ?? 0) },
          { strokeDashoffset: 0, duration: dur, ease: 'power2.inOut', ...extra }
        );
      const speak = (bars: SVGRectElement[], dur: number, amp: number) => {
        const t = gsap.timeline();
        const n = Math.max(2, Math.round(dur / 0.16));
        bars.forEach((b, i) => {
          const env = 0.35 + 0.65 * Math.sin((i / 29) * Math.PI);
          const s = gsap.timeline();
          for (let k = 0; k < n; k++) s.to(b, { scaleY: 1 + rnd() * amp * env, duration: dur / n, ease: 'sine.inOut' });
          s.to(b, { scaleY: 1, duration: 0.25, ease: 'sine.out' });
          t.add(s, 0);
        });
        return t;
      };

      const copies = qa<HTMLElement>('.fx-step-copy');
      const copyIn = (i: number) =>
        gsap.fromTo(copies[i], { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.75, ease: 'power3.out' });
      const copyOut = (i: number) => gsap.to(copies[i], { autoAlpha: 0, y: -12, duration: 0.4, ease: 'power2.in' });

      // Estados iniciais
      gsap.set(['#fx-s2', '#fx-s3', '#fx-s4'], { autoAlpha: 0 });
      gsap.set([...barsC, ...barsF], { scaleY: 0, transformOrigin: '50% 50%' });
      gsap.set([...qa('.fx-cap1'), ...qa('.fx-q'), q('#fx-transcript')], { autoAlpha: 0 });
      gsap.set([...qa('#fx-s2 .fx-node text'), ...qa('#fx-s2 .head'), ...qa('.tag-g'), q('#fx-tag-m'), q('#fx-sum')], {
        autoAlpha: 0,
      });
      gsap.set(qa('#fx-s2 .node-box'), { fillOpacity: 0 });
      gsap.set(qa('.ring'), { autoAlpha: 0, transformOrigin: '50% 50%' });
      gsap.set(qa('.tag-g'), { transformOrigin: '50% 50%' });
      gsap.set([...qa('.fx-cap3'), ...qa('.t-row'), ...qa('.base-c'), q('#fx-banner')], { autoAlpha: 0 });
      gsap.set(qa('.chk-fill'), { scale: 0, transformOrigin: '50% 50%' });
      gsap.set(q('#fx-banner'), { transformOrigin: '50% 50%' });
      gsap.set([...qa('.dtag'), q('#fx-doc-title'), q('#fx-inv')], { autoAlpha: 0 });

      const tl = gsap.timeline({ paused: true });
      const T = [0, 6.6, 11.4, 15.3];

      // ----- Cena 1: Conversa -----
      tl.add(copyIn(0), 0)
        .add(draw('#fx-ecg', 1.1), 0.2)
        .to('#fx-ecg', { autoAlpha: 0, duration: 0.4 }, 1.35)
        .to([...barsC, ...barsF], { scaleY: 1, duration: 0.5, ease: 'back.out(2)', stagger: { each: 0.008, from: 'center' } }, 1.3)
        .to('.fx-cap1', { autoAlpha: 1, duration: 0.4 }, 1.45)
        .fromTo('#fx-transcript', { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 1.6);

      const qs = qa('.fx-q');
      const lines: Array<[number, SVGRectElement[], number, number]> = [
        [1.9, barsC, 1.15, 11],
        [3.2, barsF, 0.75, 5],
        [4.2, barsC, 0.9, 11],
        [5.2, barsC, 1.0, 9],
      ];
      lines.forEach(([at, bars, dur, amp], k) => {
        if (k > 0) tl.to(qs[k - 1], { autoAlpha: 0, y: -8, duration: 0.25, ease: 'power2.in' }, at - 0.25);
        tl.fromTo(qs[k], { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power3.out' }, at);
        tl.add(speak(bars, dur, amp), at);
      });
      tl.addLabel('e0', 6.4);

      // ----- Cena 2: Entendimento -----
      const t2 = T[1];
      tl.to('#fx-s1', { autoAlpha: 0, duration: 0.45, ease: 'power2.in' }, t2)
        .add(copyOut(0), t2)
        .add(copyIn(1), t2 + 0.35)
        .set('#fx-s2', { autoAlpha: 1 }, t2 + 0.4)
        .add(draw(qa('#fx-s2 .node-box'), 0.7, { stagger: 0.18 }), t2 + 0.45)
        .to(qa('#fx-s2 .node-box'), { fillOpacity: 1, duration: 0.5, stagger: 0.18 }, t2 + 0.85)
        .to(qa('#fx-s2 .fx-node text'), { autoAlpha: 1, duration: 0.4, stagger: 0.09 }, t2 + 0.85)
        .add(draw(qa('#fx-s2 .conn'), 0.35, { stagger: 0.18, ease: 'power1.inOut' }), t2 + 0.95)
        .to(qa('#fx-s2 .head'), { autoAlpha: 1, duration: 0.15, stagger: 0.18 }, t2 + 1.25)
        // gargalos
        .to(['#fx-n-plan .node-box', '#fx-n-apr .node-box'], { stroke: HIGHLIGHT, fill: HIGHLIGHT_FILL, duration: 0.5 }, t2 + 2.3)
        .fromTo(qa('.tag-g'), { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)', stagger: 0.12, immediateRender: false }, t2 + 2.35)
        .fromTo(qa('.ring'), { autoAlpha: 0.9, scale: 1 }, { autoAlpha: 0, scale: 1.14, duration: 1, ease: 'power1.out', repeat: 1, immediateRender: false }, t2 + 2.4)
        // etapa que não vale automatizar
        .to('#fx-n-conf', { opacity: 0.4, duration: 0.5 }, t2 + 3.1)
        .fromTo('#fx-tag-m', { autoAlpha: 0, y: -4 }, { autoAlpha: 1, y: 0, duration: 0.4, immediateRender: false }, t2 + 3.15)
        .fromTo('#fx-sum', { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.5, immediateRender: false }, t2 + 3.5)
        .addLabel('e1', t2 + 4.5);

      // ----- Cena 3: Alinhamento -----
      const t3 = T[2];
      tl.to('#fx-s2', { autoAlpha: 0, duration: 0.45, ease: 'power2.in' }, t3)
        .add(copyOut(1), t3)
        .add(copyIn(2), t3 + 0.35)
        .set('#fx-s3', { autoAlpha: 1 }, t3 + 0.4)
        .to('.fx-cap3', { autoAlpha: 1, duration: 0.4 }, t3 + 0.4)
        .add(draw(qa('.row-box'), 0.6, { stagger: 0.2 }), t3 + 0.45)
        .to(qa('.t-row'), { autoAlpha: 1, duration: 0.4, stagger: 0.2 }, t3 + 0.7)
        .to(qa('.base-c'), { autoAlpha: 1, duration: 0.3, stagger: 0.05 }, t3 + 0.8);
      const fills = qa('.chk-fill');
      const marks = qa('.chk-mark');
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 2; c++) {
          const idx = r * 2 + c;
          const at = t3 + 1.5 + r * 0.45 + c * 0.18;
          tl.to(fills[idx], { scale: 1, duration: 0.35, ease: 'back.out(2.5)' }, at).add(
            draw(marks[idx], 0.25, { ease: 'power2.out' }),
            at + 0.15
          );
        }
      }
      tl.fromTo('#fx-banner', { autoAlpha: 0, scale: 0.9 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'back.out(2)', immediateRender: false }, t3 + 3.0)
        .addLabel('e2', t3 + 3.6);

      // ----- Cena 4: Orçamento -----
      const t4 = T[3];
      tl.to('#fx-s3', { autoAlpha: 0, duration: 0.45, ease: 'power2.in' }, t4)
        .add(copyOut(2), t4)
        .add(copyIn(3), t4 + 0.35)
        .set('#fx-s4', { autoAlpha: 1 }, t4 + 0.4)
        .fromTo(qa('.dtag'), { autoAlpha: 0, x: -12 }, { autoAlpha: 1, x: 0, duration: 0.5, ease: 'power3.out', stagger: 0.2, immediateRender: false }, t4 + 0.45)
        .add(draw(qa('.dtag-chk'), 0.3, { stagger: 0.2 }), t4 + 0.75)
        .add(draw('#fx-doc', 1.0), t4 + 0.6)
        .add(draw(qa('.dtag-line'), 0.45, { stagger: 0.2 }), t4 + 1.0)
        .add(draw('#fx-fold', 0.3), t4 + 1.5)
        .to('#fx-doc-title', { autoAlpha: 1, duration: 0.4 }, t4 + 1.5)
        .add(draw(qa('.doc-line'), 0.45, { stagger: 0.12 }), t4 + 1.6)
        .add(draw('#fx-doc-div', 0.4), t4 + 2.0)
        .to('#fx-inv', { autoAlpha: 1, duration: 0.3 }, t4 + 2.15)
        .add(draw('#fx-inv-bar', 0.5, { ease: 'power2.out' }), t4 + 2.25)
        .add(draw('#fx-sig-line', 0.4), t4 + 2.5)
        .add(draw('#fx-sig', 1.2, { ease: 'power1.inOut' }), t4 + 2.75)
        .fromTo('.fx-cta', { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out', immediateRender: false }, t4 + 3.7)
        .addLabel('e3', t4 + 4.3);

      // ----- Indicador de etapas -----
      const btns = qa<HTMLButtonElement>('.fx-step-btn');
      const bars = btns.map((b) => b.querySelector<HTMLElement>('.fx-bar i')!);
      const total = tl.duration();
      const updateUI = () => {
        const t = tl.time();
        for (let i = 0; i < 4; i++) {
          const s = T[i];
          const e = i < 3 ? T[i + 1] : total;
          const p = Math.min(1, Math.max(0, (t - s) / (e - s)));
          bars[i].style.transform = 'scaleX(' + p + ')';
          const active = t >= s && (i === 3 || t < e);
          btns[i].classList.toggle('is-active', active);
          if (active) btns[i].setAttribute('aria-current', 'step');
          else btns[i].removeAttribute('aria-current');
        }
      };
      tl.eventCallback('onUpdate', updateUI);

      const showReduced = (i: number) => {
        tl.seek('e' + i);
        updateUI();
        gsap.set('.fx-cta', { autoAlpha: 1, y: 0 });
      };
      const listen = (el: Element, fn: () => void) => {
        el.addEventListener('click', fn);
        cleanups.push(() => el.removeEventListener('click', fn));
      };
      btns.forEach((b, i) => listen(b, () => (reduced ? showReduced(i) : tl.play(T[i]))));
      listen(q('.fx-replay'), () => (reduced ? showReduced(0) : tl.play(0)));

      // ----- Disparo -----
      if (reduced) {
        showReduced(0);
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
        io.observe(q('.fx-stage'));
      } else {
        tl.play();
      }
      updateUI();
    }, root);

    return () => {
      io?.disconnect();
      ctx.revert();
      cleanups.forEach((fn) => fn());
      root.classList.remove('anim');
    };
  }, []);

  return (
    <div className="fx-method" ref={rootRef}>
      <div className="fx-inner">
        <div className="fx-copy">
          <div className="fx-steps-copy">
            {passos.map((p) => (
              <article key={p.pill} className="fx-step-copy">
                <span className="fx-pill">{p.pill}</span>
                <h3>{p.title}</h3>
                <hr />
                <p>{p.text}</p>
              </article>
            ))}
          </div>
          <a className="fx-cta" href={WHATSAPP_DIAGNOSTICO_URL} target="_blank" rel="noopener noreferrer">
            Agendar diagnóstico
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>

        <div className="fx-stage">
          <svg viewBox="0 0 560 420" aria-hidden="true" focusable="false">
            <defs>
              <pattern id="fx-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,.05)" />
              </pattern>
            </defs>
            <rect width="560" height="420" fill="url(#fx-dots)" />

            {/* Cena 1: Conversa */}
            <g id="fx-s1">
              <path id="fx-ecg" className="ecg draw" d="M24 180 H196 l10 -22 l12 58 l14 -92 l14 74 l10 -18 H536" />
              <text className="t-cap fx-cap1" x="24" y="134">CLIENTE</text>
              <text className="t-cap fx-cap1" x="24" y="234">FLUXEN</text>
              <g id="fx-bars-c" />
              <g id="fx-bars-f" />
              <g id="fx-transcript">
                <rect className="card" x="24" y="300" width="512" height="92" rx="16" />
                <g className="fx-q"><text className="t-who c" x="50" y="333">CLIENTE</text><text className="t-quote" x="50" y="366">“O pedido chega pelo WhatsApp.”</text></g>
                <g className="fx-q"><text className="t-who f" x="50" y="333">FLUXEN</text><text className="t-quote" x="50" y="366">“E depois, quem confere?”</text></g>
                <g className="fx-q"><text className="t-who c" x="50" y="333">CLIENTE</text><text className="t-quote" x="50" y="366">“Alguém lança na planilha, à mão.”</text></g>
                <g className="fx-q"><text className="t-who c" x="50" y="333">CLIENTE</text><text className="t-quote" x="50" y="366">“A aprovação depende do financeiro.”</text></g>
              </g>
            </g>

            {/* Cena 2: Entendimento */}
            <g id="fx-s2">
              <Node x={15} y={82} title="Pedido" sub="via WhatsApp" />
              <Node id="fx-n-conf" x={205} y={82} title="Conferência" sub="estoque" />
              <Node id="fx-n-plan" x={395} y={82} title="Planilha" sub="lançamento manual" ring />
              <Node id="fx-n-apr" x={395} y={222} title="Aprovação" sub="financeiro" ring />
              <Node x={205} y={222} title="Faturamento" sub="nota fiscal" />
              <Node x={15} y={222} title="Entrega" sub="logística" />

              <path className="conn draw" d="M167 110 H201" />
              <path className="conn draw" d="M357 110 H391" />
              <path className="conn draw" d="M470 140 V218" />
              <path className="conn draw" d="M393 250 H359" />
              <path className="conn draw" d="M203 250 H169" />
              <path className="head" d="M196 105 L202 110 L196 115" />
              <path className="head" d="M386 105 L392 110 L386 115" />
              <path className="head" d="M465 213 L470 219 L475 213" />
              <path className="head" d="M364 245 L358 250 L364 255" />
              <path className="head" d="M174 245 L168 250 L174 255" />

              <g className="tag-g" transform="translate(395 52)"><rect width="80" height="22" rx="11" /><text className="t-tag" x="40" y="14.5" textAnchor="middle">GARGALO</text></g>
              <g className="tag-g" transform="translate(395 286)"><rect width="80" height="22" rx="11" /><text className="t-tag" x="40" y="14.5" textAnchor="middle">GARGALO</text></g>
              <g transform="translate(205 148)"><g className="tag-m" id="fx-tag-m"><rect width="110" height="22" rx="11" /><text className="t-tag" x="55" y="14.5" textAnchor="middle">SEGUE MANUAL</text></g></g>

              <text id="fx-sum" className="t-note" x="280" y="366" textAnchor="middle">2 gargalos encontrados · 1 etapa que não vale automatizar</text>
            </g>

            {/* Cena 3: Alinhamento */}
            <g id="fx-s3">
              <text className="t-cap fx-cap3" x="430" y="86" textAnchor="middle">VOCÊ</text>
              <text className="t-cap fx-cap3" x="500" y="86" textAnchor="middle">FLUXEN</text>

              {linhasAlinhamento.map((linha, i) => (
                <g key={linha} className="row" transform={`translate(0 ${104 + i * 70})`}>
                  <rect className="row-box draw" x="24" width="512" height="56" rx="12" />
                  <text className="t-row" x="48" y="33">{linha}</text>
                  <circle className="base-c" cx="430" cy="28" r="13" />
                  <circle className="base-c" cx="500" cy="28" r="13" />
                  <g className="chk"><circle className="chk-fill" cx="430" cy="28" r="13" /><path className="chk-mark draw" d="M424 28 l4 4 l8 -9" /></g>
                  <g className="chk"><circle className="chk-fill" cx="500" cy="28" r="13" /><path className="chk-mark draw" d="M494 28 l4 4 l8 -9" /></g>
                </g>
              ))}

              <g className="banner" id="fx-banner" transform="translate(180 334)">
                <rect width="200" height="44" rx="22" />
                <text x="100" y="27.5" textAnchor="middle">Escopo alinhado</text>
              </g>
            </g>

            {/* Cena 4: Orçamento */}
            <g id="fx-s4">
              {entregas.map((item, i) => (
                <g key={item} transform={`translate(24 ${124 + i * 60})`}>
                  <g className="dtag">
                    <rect width="176" height="32" rx="16" />
                    <path className="dtag-chk draw" d="M15 16 l3 3 l6 -7" />
                    <text className="t-small" x="34" y="20.5">{item}</text>
                  </g>
                </g>
              ))}
              <path className="dtag-line draw" d="M200 140 H300" />
              <path className="dtag-line draw" d="M200 200 H300" />
              <path className="dtag-line draw" d="M200 260 H300" />

              <path id="fx-doc" className="doc draw" d="M300 50 H470 L500 80 V350 H300 Z" />
              <path id="fx-fold" className="doc draw" d="M470 50 V80 H500" />
              <text id="fx-doc-title" className="t-doc" x="324" y="106">Proposta</text>
              <path className="doc-line draw" d="M324 140 H476" />
              <path className="doc-line draw" d="M324 162 H450" />
              <path className="doc-line draw" d="M324 184 H466" />
              <path id="fx-doc-div" className="sig-line draw" d="M324 212 H476" />
              <text id="fx-inv" className="t-cap" x="324" y="244">INVESTIMENTO</text>
              <path id="fx-inv-bar" className="inv-bar draw" d="M328 264 H420" />
              <path id="fx-sig-line" className="sig-line draw" d="M324 330 H476" />
              <path
                id="fx-sig"
                className="sig draw"
                d="M326 316 c6 -18 16 -22 14 -4 c-2 14 6 14 12 0 c4 -10 10 -10 10 2 c0 10 8 8 12 -2 c4 -8 10 -6 12 2 c3 8 12 6 22 -4 c6 -6 14 -6 22 0"
              />
            </g>
          </svg>
        </div>
      </div>

      <nav className="fx-progress" aria-label="Etapas da metodologia">
        {etapasNav.map((nome, i) => (
          <button key={nome} className="fx-step-btn" type="button">
            <span className="fx-bar"><i /></span>
            <span className="fx-n">{String(i + 1).padStart(2, '0')}</span>
            {nome}
          </button>
        ))}
        <button className="fx-replay" type="button" aria-label="Repetir animação">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2.5 8a5.5 5.5 0 1 0 1.7-4" />
            <path d="M2.5 2.5v3h3" />
          </svg>
        </button>
      </nav>
    </div>
  );
}
