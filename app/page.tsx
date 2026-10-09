import { Header } from '@/components/Header';
import {
  WHATSAPP_DIAGNOSTICO_URL,
  EMAIL,
  LINKEDIN_URL,
  INSTAGRAM_FLUXEN_URL,
  INSTAGRAM_MARCELO_URL,
} from '@/lib/contato';

type Tone = 'dark' | 'light' | 'muted';

const sectionBg: Record<Tone, string> = {
  dark: 'bg-primary-slate text-neutral-100',
  light: 'bg-white text-primary-slate',
  muted: 'bg-neutral-100 text-primary-slate',
};

function Section({
  id,
  tone,
  children,
}: {
  id?: string;
  tone: Tone;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${sectionBg[tone]} section-spacing scroll-mt-16 md:scroll-mt-18`}>
      <div className="container-custom">{children}</div>
    </section>
  );
}

function Label({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold tracking-[0.18em] ${
        dark ? 'text-neutral-100/70' : 'text-neutral-800'
      }`}
    >
      <span className={`w-2 h-2 ${dark ? 'bg-accent-cyan' : 'bg-primary-purple'}`} aria-hidden="true" />
      {children}
    </p>
  );
}

function Title({ children, as: Tag = 'h2' }: { children: React.ReactNode; as?: 'h1' | 'h2' }) {
  return (
    <Tag className="mt-6 text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] max-w-3xl">
      {children}
    </Tag>
  );
}

function DiagnosticoButton() {
  return (
    <a
      href={WHATSAPP_DIAGNOSTICO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-primary-purple hover:bg-brand-purple text-white font-semibold px-7 py-4 rounded-md transition-colors"
    >
      Agendar diagnóstico técnico
    </a>
  );
}

const sinais = [
  {
    title: 'Pedidos digitados à mão',
    text: 'Informação copiada do WhatsApp para a planilha, e da planilha para o sistema.',
  },
  { title: 'Operação que depende de uma pessoa', text: 'Se ela falta, o processo para.' },
  { title: 'Sistema pago, pouco usado', text: 'ERP que só emite nota, enquanto o resto roda em planilha.' },
];

const rotinas = [
  { title: 'Pedidos do e-commerce no sistema de gestão', text: 'Sem ninguém digitar pedido por pedido.' },
  { title: 'Cobranças e lembretes de pagamento', text: 'Enviados no momento certo, sem depender de alguém lembrar.' },
  { title: 'Relatórios que se montam sozinhos', text: 'Com os dados que hoje alguém copia à mão toda semana.' },
  { title: 'Aprovações em um fluxo único', text: 'No lugar de e-mails e planilhas circulando entre áreas.' },
  { title: 'Sistemas que passam a conversar', text: 'O que é lançado em um sistema chega aos outros, sem retrabalho.' },
];

const etapas = [
  { n: '01', title: 'Diagnosticar', text: 'Entendemos sua operação e apontamos o que dá mais retorno automatizar.' },
  { n: '02', title: 'Construir', text: 'Desenvolvemos a solução e conectamos aos sistemas que você já usa.' },
  { n: '03', title: 'Evoluir', text: 'Acompanhamos o uso e ajustamos conforme a empresa cresce.' },
];

const usosIA = [
  {
    title: 'Atendimento',
    text: 'Primeiro atendimento no WhatsApp, passando para a equipe só o que precisa de gente.',
  },
  {
    title: 'Catálogos',
    text: 'Descrições de produtos geradas a partir dos dados que você já tem, revisadas antes de publicar.',
  },
  {
    title: 'Documentos',
    text: 'Dados de mensagens, PDFs e planilhas organizados direto no sistema, sem digitação.',
  },
];

const avaliamos = [
  'Se o processo está maduro para automatizar',
  'Onde automatizar dá retorno',
  'Que ferramenta usar ou criar',
  'Impacto em custo e produtividade',
];

const perguntas = [
  {
    q: 'Preciso trocar meus sistemas?',
    a: 'Não necessariamente. A primeira opção é conectar o que você já usa.',
  },
  { q: 'Tem que usar IA?', a: 'Só quando faz sentido. Muita automação boa não precisa de IA.' },
  { q: 'Quanto custa?', a: 'Depende do escopo. O orçamento vem depois do diagnóstico técnico.' },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="pt-16 md:pt-18">
        {/* 1. Topo */}
        <section id="topo" className="bg-primary-slate text-neutral-100 border-b border-neutral-800">
          <div className="container-custom pt-20 pb-24 md:pt-32 md:pb-36">
            <Label dark>AUTOMAÇÃO E SISTEMAS PARA EMPRESAS</Label>
            <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white max-w-5xl">
              Sua empresa faz à mão o que um sistema poderia fazer sozinho?
            </h1>
            <p className="mt-8 text-lg md:text-xl text-neutral-100/80 leading-relaxed max-w-2xl">
              A Fluxen Labs identifica o que vale automatizar na sua operação e constrói a solução, integrada aos
              sistemas que você já usa.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <DiagnosticoButton />
              <a
                href="#como-trabalhamos"
                className="inline-flex items-center justify-center border border-neutral-800 hover:border-neutral-500 text-white font-semibold px-7 py-4 rounded-md transition-colors"
              >
                Ver como trabalhamos
              </a>
            </div>
            <p className="mt-6 text-sm text-neutral-100/60">Diagnóstico técnico sem compromisso.</p>
          </div>
        </section>

        {/* 2. Para quem é */}
        <Section id="para-quem-e" tone="light">
          <Label>PARA QUEM É</Label>
          <Title>Para empresas que cresceram mais rápido que a própria estrutura</Title>

          <div className="mt-14 grid md:grid-cols-3 border-t border-l border-primary-slate/10">
            {sinais.map((s) => (
              <div key={s.title} className="border-r border-b border-primary-slate/10 p-6 md:p-8">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-neutral-800 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg md:text-xl font-semibold">Reconheceu algum? É por aí que a gente começa.</p>
        </Section>

        {/* 3. O que dá para automatizar */}
        <Section id="o-que-automatizar" tone="muted">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <div>
              <Label>O QUE AUTOMATIZAR</Label>
              <Title>Rotinas que um sistema pode assumir</Title>
            </div>

            <ul className="border-t border-primary-slate/15">
              {rotinas.map((r) => (
                <li
                  key={r.title}
                  className="py-6 border-b border-primary-slate/15 grid sm:grid-cols-2 gap-2 sm:gap-8"
                >
                  <h3 className="font-semibold text-lg leading-snug">{r.title}</h3>
                  <p className="text-neutral-800 leading-relaxed">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* 4. Como trabalhamos */}
        <Section id="como-trabalhamos" tone="dark">
          <Label dark>COMO TRABALHAMOS</Label>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] max-w-3xl text-white">
            Primeiro o processo, depois a tecnologia
          </h2>

          <ol className="mt-14 grid md:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800">
            {etapas.map((e) => (
              <li key={e.n} className="bg-primary-slate p-6 md:p-8">
                <span className="text-sm font-semibold text-accent-cyan tabular-nums">{e.n}</span>
                <h3 className="mt-10 md:mt-16 text-2xl font-semibold text-white">{e.title}</h3>
                <p className="mt-3 text-neutral-100/70 leading-relaxed">{e.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* 5. Sistemas sob medida */}
        <Section id="sistemas-sob-medida" tone="light">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end">
            <div>
              <Label>SISTEMAS SOB MEDIDA</Label>
              <Title>Quando nenhum sistema pronto resolve, a gente constrói</Title>
            </div>
            <p className="text-lg text-neutral-800 leading-relaxed">
              Para processos que não cabem em ferramenta de prateleira, desenvolvemos o sistema do zero, documentado,
              integrado ao que você já usa e pronto para crescer com a empresa.
            </p>
          </div>

          <p className="mt-14 pt-8 border-t border-primary-slate/10 text-2xl md:text-3xl font-semibold tracking-tight">
            E se algo pronto já resolver, a gente também diz.
          </p>
        </Section>

        {/* 6. IA aplicada */}
        <Section id="ia-aplicada" tone="muted">
          <Label>IA APLICADA</Label>
          <Title>IA dentro do processo, não isolada</Title>
          <p className="mt-6 text-lg text-neutral-800 leading-relaxed max-w-2xl">
            Aplicada onde economiza tempo de verdade, com regras claras e uma pessoa validando o que importa.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-4">
            {usosIA.map((u) => (
              <div key={u.title} className="bg-white border border-primary-slate/10 rounded-md p-6 md:p-8">
                <h3 className="text-xl font-semibold">{u.title}</h3>
                <p className="mt-3 text-neutral-800 leading-relaxed">{u.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. Diagnóstico técnico */}
        <Section id="diagnostico" tone="dark">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <Label dark>DIAGNÓSTICO TÉCNICO</Label>
              <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
                Diagnóstico técnico sem compromisso
              </h2>
              <p className="mt-6 text-lg text-neutral-100/80 leading-relaxed max-w-xl">
                De 60 a 90 minutos de conversa para entender como sua operação funciona hoje.
              </p>
              <div className="mt-10">
                <DiagnosticoButton />
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-sm font-semibold text-neutral-100/60">O que avaliamos</h3>
                <ul className="mt-4 border-t border-neutral-800">
                  {avaliamos.map((item) => (
                    <li key={item} className="py-4 border-b border-neutral-800 text-lg text-white">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-100/60">O que você recebe</h3>
                <p className="mt-4 text-lg text-white leading-relaxed">
                  Clareza sobre o que vale automatizar e por onde começar.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 8. Quem lidera */}
        <Section id="quem-lidera" tone="light">
          <Label>QUEM LIDERA</Label>
          <Title>Marcelo, fundador da Fluxen Labs</Title>
          <p className="mt-6 text-lg text-neutral-800 leading-relaxed max-w-2xl">
            São quase 20 anos em tecnologia, com passagens por TOTVS, Grupo Pão de Açúcar, Neomind, Softexpert, Consulta Remédios e James Delivery, desenvolvendo sistemas e integrações para empresas.
          </p>
          <p className="mt-8">
            <a
              href={INSTAGRAM_MARCELO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-purple underline underline-offset-4 decoration-primary-purple/40 hover:decoration-primary-purple"
            >
              Conteúdo semanal sobre tecnologia em @marcelofluxen
            </a>
          </p>
        </Section>

        {/* 9. Perguntas frequentes */}
        <Section id="perguntas-frequentes" tone="muted">
          <Label>PERGUNTAS FREQUENTES</Label>
          <dl className="mt-10 border-t border-primary-slate/15">
            {perguntas.map((p) => (
              <div
                key={p.q}
                className="py-8 border-b border-primary-slate/15 grid md:grid-cols-[1fr_1.4fr] gap-3 md:gap-20"
              >
                <dt className="text-xl md:text-2xl font-semibold tracking-tight">{p.q}</dt>
                <dd className="text-lg text-neutral-800 leading-relaxed">{p.a}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* 10. Fechamento */}
        <section className="bg-primary-slate text-neutral-100">
          <div className="container-custom py-24 md:py-36">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white max-w-4xl">
              Comece pelo diagnóstico técnico
            </h2>
            <p className="mt-8 text-lg md:text-xl text-neutral-100/80 leading-relaxed max-w-2xl">
              Avaliamos o que vale automatizar, integrar ou construir na sua empresa.
            </p>
            <div className="mt-10">
              <DiagnosticoButton />
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer id="contato" className="bg-neutral-900 text-neutral-100 scroll-mt-16 md:scroll-mt-18">
        <div className="container-custom py-14">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div>
              <p className="text-white font-semibold text-lg">Fluxen Labs</p>
              <p className="mt-1 text-sm text-neutral-100/60">Automação e sistemas para empresas</p>
            </div>
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
              <li>
                <a href={`mailto:${EMAIL}`} className="text-neutral-100/80 hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-100/80 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_FLUXEN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-100/80 hover:text-white transition-colors"
                >
                  Instagram @fluxenlabs
                </a>
              </li>
            </ul>
          </div>
          <p className="mt-12 pt-6 border-t border-neutral-800 text-sm text-neutral-100/50">© 2026 Fluxen Labs</p>
        </div>
      </footer>
    </>
  );
}
