import { NextRequest, NextResponse } from 'next/server';

const ELARA_URL = 'https://elara-production-fd5b.up.railway.app';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(`${ELARA_URL}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Falha ao anonimizar texto' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Servidor indisponível. Tente novamente em instantes.' },
      { status: 503 }
    );
  }
}
