'use client';

import { useState, useRef, useMemo } from 'react';

interface AnonymizeResponse {
  entities: Record<string, string[]>;
  anonymized_text: string;
}

interface ElaraAnonymizerProps {
  apiUrl?: string;
  onSuccess?: (data: AnonymizeResponse) => void;
  onError?: (error: Error) => void;
}

export default function ElaraAnonymizer({ 
  apiUrl = 'http://localhost:8000',
  onSuccess,
  onError 
}: ElaraAnonymizerProps) {
  const [originalText, setOriginalText] = useState('');
  const [anonymizedText, setAnonymizedText] = useState('');
  const [llmResponse, setLlmResponse] = useState('');
  const [entities, setEntities] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'warning'; text: string } | null>(null);
  
  const originalTextRef = useRef<HTMLTextAreaElement>(null);

  const deanonymizedText = useMemo(() => {
    if (!llmResponse) return '';
    return llmResponse.replace(/<PII_(\w+)_(\d+)>/g, (match, entity, index) => {
      return entities[entity]?.[parseInt(index) - 1] || match;
    });
  }, [llmResponse, entities]);

  const showMessage = (type: 'success' | 'error' | 'warning', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!originalText.trim()) {
      showMessage('warning', 'Por favor, insira algum texto para anonimizar.');
      return;
    }
    setIsLoading(true);
    showMessage('success', 'Anonimizando texto...');
    try {
      const response = await fetch(`${apiUrl}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: originalText }),
      });
      if (!response.ok) throw new Error('Falha ao anonimizar texto');
      const data: AnonymizeResponse = await response.json();
      setAnonymizedText(data.anonymized_text);
      setEntities(data.entities);
      showMessage('success', 'Texto anonimizado com sucesso!');
      if (onSuccess) onSuccess(data);
    } catch (error) {
      const err = error as Error;
      showMessage('error', 'Erro ao anonimizar. Verifique se o servidor Python está rodando.');
      if (onError) onError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    showMessage('success', `${type} copiado para a área de transferência!`);
  };

  return (
    <>
      {/* Toast */}
      {message && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50">
          <div className={`rounded-lg px-5 py-2.5 shadow-xl text-sm font-medium ${
            message.type === 'success' ? 'bg-accent-green text-white' :
            message.type === 'error'   ? 'bg-red-600 text-white' :
                                         'bg-yellow-500 text-white'
          }`}>
            {message.text}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">

          {/* TEXTO ORIGINAL */}
          <div className="relative h-[400px]">
            <textarea
              ref={originalTextRef}
              className="h-full w-full resize-none rounded-xl border border-neutral-800 bg-neutral-900 p-4 pt-10 text-neutral-100 placeholder-neutral-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary-purple transition-all"
              placeholder="Digite algum texto aqui..."
              value={originalText}
              onChange={(e) => setOriginalText(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <div className="absolute left-0 top-0 select-none rounded-br-lg rounded-tl-xl bg-primary-purple px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              Texto Original
            </div>
            <button
              type="submit"
              className="absolute right-0 top-0 select-none rounded-bl-lg rounded-tr-xl bg-neutral-800 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-100 transition-colors hover:bg-neutral-700 disabled:opacity-40"
              disabled={isLoading}
            >
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
          </div>

          {/* TEXTO ANONIMIZADO */}
          <div className={`relative h-[400px] rounded-xl border border-neutral-800 bg-neutral-900 p-4 text-neutral-100 shadow-inner whitespace-pre-wrap ${anonymizedText ? 'overflow-y-auto pt-10' : ''}`}>
            {anonymizedText ? (
              anonymizedText
            ) : (
              <div className="flex h-full w-full select-none items-center justify-center text-center text-sm leading-relaxed text-neutral-500">
                Escreva e envie algum texto<br />para anonimização.
              </div>
            )}
            <div className="absolute left-0 top-0 select-none rounded-br-lg rounded-tl-xl bg-rose-700 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              Texto Anonimizado
            </div>
            {anonymizedText && (
              <button
                type="button"
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-800 p-1.5 transition-colors hover:bg-neutral-700"
                onClick={() => copyToClipboard(anonymizedText, 'Texto anonimizado')}
              >
                <CopyIcon />
              </button>
            )}
          </div>

          {/* RESPOSTA DO LLM */}
          {anonymizedText && (
            <>
              <div className="relative h-[400px]">
                <textarea
                  className="h-full w-full resize-none rounded-xl border border-neutral-800 bg-neutral-900 p-4 pt-10 text-neutral-100 placeholder-neutral-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-accent-green transition-all"
                  placeholder="Cole a resposta do LLM aqui..."
                  value={llmResponse}
                  onChange={(e) => setLlmResponse(e.target.value)}
                />
                <div className="absolute left-0 top-0 select-none rounded-br-lg rounded-tl-xl bg-accent-green px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  Resposta do LLM
                </div>
              </div>

              {/* RESPOSTA DES-ANONIMIZADA */}
              <div className={`relative h-[400px] rounded-xl border border-neutral-800 bg-neutral-900 p-4 text-neutral-100 shadow-inner whitespace-pre-wrap ${deanonymizedText ? 'overflow-y-auto pt-10' : ''}`}>
                {deanonymizedText ? (
                  deanonymizedText
                ) : (
                  <div className="flex h-full w-full select-none items-center justify-center text-center text-sm leading-relaxed text-neutral-500">
                    Cole uma resposta do LLM<br />para des-anonimização.
                  </div>
                )}
                <div className="absolute left-0 top-0 select-none rounded-br-lg rounded-tl-xl bg-brand-purple px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  Resposta Des-anonimizada
                </div>
                {deanonymizedText && (
                  <button
                    type="button"
                    className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-800 p-1.5 transition-colors hover:bg-neutral-700"
                    onClick={() => copyToClipboard(deanonymizedText, 'Resposta des-anonimizada')}
                  >
                    <CopyIcon />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </form>
    </>
  );
}

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 text-neutral-100"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
      <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
    </svg>
  );
}
