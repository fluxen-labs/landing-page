/**
 * Technical Diagram - Fluxen Labs
 * Diagrama abstrato de fluxo: WhatsApp → Engine → ERP
 * Linhas em accent-cyan, pontos em primary-purple
 */

'use client';

import { useEffect, useRef } from 'react';

export function TechnicalDiagram() {
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center">
      {/* Container do diagrama */}
      <div ref={canvasRef} className="relative w-full max-w-xl">
        {/* SVG Diagram */}
        <svg
          viewBox="0 0 600 400"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Linhas de conexão (accent-cyan) */}
          {/* WhatsApp → Engine */}
          <path
            d="M 150 200 L 300 200"
            stroke="#06B6D4"
            strokeWidth="2"
            strokeDasharray="0"
            className="animate-pulse-slow"
          />
          
          {/* Engine → ERP */}
          <path
            d="M 300 200 L 450 200"
            stroke="#06B6D4"
            strokeWidth="2"
            strokeDasharray="0"
            className="animate-pulse-slow"
          />
          
          {/* Linhas secundárias decorativas */}
          <path
            d="M 150 180 L 300 180 L 450 180"
            stroke="#06B6D4"
            strokeWidth="1"
            opacity="0.3"
            strokeDasharray="4 4"
          />
          
          <path
            d="M 150 220 L 300 220 L 450 220"
            stroke="#06B6D4"
            strokeWidth="1"
            opacity="0.3"
            strokeDasharray="4 4"
          />

          {/* Linhas de dados fluindo */}
          <circle cx="200" cy="200" r="3" fill="#06B6D4" opacity="0.8">
            <animate
              attributeName="cx"
              from="150"
              to="300"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          
          <circle cx="350" cy="200" r="3" fill="#06B6D4" opacity="0.8">
            <animate
              attributeName="cx"
              from="300"
              to="450"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Nó 1: WhatsApp (esquerda) */}
          <g>
            {/* Círculo externo */}
            <circle
              cx="150"
              cy="200"
              r="40"
              fill="#6D28D9"
              opacity="0.1"
              className="animate-ping-slow"
            />
            {/* Círculo principal */}
            <circle
              cx="150"
              cy="200"
              r="30"
              fill="#6D28D9"
              opacity="0.2"
            />
            <circle
              cx="150"
              cy="200"
              r="20"
              fill="#6D28D9"
            />
            {/* Ícone WhatsApp */}
            <text
              x="150"
              y="208"
              textAnchor="middle"
              fill="white"
              fontSize="20"
              fontWeight="bold"
            >
              W
            </text>
          </g>

          {/* Nó 2: Engine (centro) */}
          <g>
            {/* Círculo externo */}
            <circle
              cx="300"
              cy="200"
              r="50"
              fill="#6D28D9"
              opacity="0.1"
              className="animate-ping-slow"
              style={{ animationDelay: '0.5s' }}
            />
            {/* Círculo principal */}
            <circle
              cx="300"
              cy="200"
              r="35"
              fill="#6D28D9"
              opacity="0.2"
            />
            <circle
              cx="300"
              cy="200"
              r="25"
              fill="#5B21B6"
            />
            {/* Hexágono interno */}
            <polygon
              points="300,185 310,192.5 310,207.5 300,215 290,207.5 290,192.5"
              fill="white"
              opacity="0.9"
            />
          </g>

          {/* Nó 3: ERP (direita) */}
          <g>
            {/* Círculo externo */}
            <circle
              cx="450"
              cy="200"
              r="40"
              fill="#6D28D9"
              opacity="0.1"
              className="animate-ping-slow"
              style={{ animationDelay: '1s' }}
            />
            {/* Círculo principal */}
            <circle
              cx="450"
              cy="200"
              r="30"
              fill="#6D28D9"
              opacity="0.2"
            />
            <circle
              cx="450"
              cy="200"
              r="20"
              fill="#6D28D9"
            />
            {/* Ícone ERP */}
            <text
              x="450"
              y="208"
              textAnchor="middle"
              fill="white"
              fontSize="20"
              fontWeight="bold"
            >
              E
            </text>
          </g>

          {/* Labels */}
          <text
            x="150"
            y="260"
            textAnchor="middle"
            fill="#64748B"
            fontSize="14"
            fontWeight="500"
          >
            WhatsApp
          </text>
          
          <text
            x="300"
            y="270"
            textAnchor="middle"
            fill="#64748B"
            fontSize="14"
            fontWeight="600"
          >
            Engine
          </text>
          
          <text
            x="450"
            y="260"
            textAnchor="middle"
            fill="#64748B"
            fontSize="14"
            fontWeight="500"
          >
            ERP
          </text>

          {/* Indicadores de dados */}
          <g opacity="0.5">
            <circle cx="150" cy="150" r="2" fill="#06B6D4" />
            <circle cx="160" cy="140" r="2" fill="#06B6D4" />
            <circle cx="140" cy="140" r="2" fill="#06B6D4" />
            
            <circle cx="450" cy="150" r="2" fill="#10B981" />
            <circle cx="460" cy="140" r="2" fill="#10B981" />
            <circle cx="440" cy="140" r="2" fill="#10B981" />
          </g>
        </svg>

        {/* Elementos de grid decorativos */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-accent-cyan" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-accent-cyan" />
          <div className="absolute top-0 bottom-0 left-0 w-px bg-accent-cyan" />
          <div className="absolute top-0 bottom-0 right-0 w-px bg-accent-cyan" />
        </div>

        {/* Stats/Métricas decorativas */}
        <div className="absolute -top-4 left-1/4 bg-primary-slate/80 backdrop-blur-sm px-3 py-1 rounded text-xs text-accent-cyan border border-accent-cyan/20">
          <span className="font-mono">~100ms</span>
        </div>
        
        <div className="absolute -bottom-4 right-1/4 bg-primary-slate/80 backdrop-blur-sm px-3 py-1 rounded text-xs text-accent-green border border-accent-green/20">
          <span className="font-mono">99.9% uptime</span>
        </div>
      </div>
    </div>
  );
}
