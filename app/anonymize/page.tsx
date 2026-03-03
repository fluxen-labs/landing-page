import { Header } from '@/components/Header';
import ElaraAnonymizer from '@/components/ElaraAnonymizer';

export default function AnonymizePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-primary-slate to-neutral-900 pt-16">
        <div className="container-custom py-12">
          {/* Cabeçalho da seção */}
          <div className="mb-10 text-center">
            <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-widest text-brand-purple border border-brand-purple/30 bg-brand-purple/10 px-3 py-1 rounded-full">
              Ferramentas
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Anonymizer IA
            </h1>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Proteja informações sensíveis antes de enviar textos para modelos de linguagem e recupere o contexto original na resposta.
            </p>
          </div>

          <ElaraAnonymizer />
        </div>
      </main>
    </>
  );
}
