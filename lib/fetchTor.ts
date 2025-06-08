import fetch, { RequestInit } from 'node-fetch';
import { SocksProxyAgent } from 'socks-proxy-agent';

const proxyAgent = new SocksProxyAgent('socks5h://127.0.0.1:9050');

export async function fetchTor(input: string, init: RequestInit = {}) {
  const finalInit: RequestInit = {
    ...init,
    // solo se non è già specificato un altro agent
    agent: init.agent ?? proxyAgent,
    // opzionale: timeout di 15 secondi
    
  };

  try {
    const res = await fetch(input, finalInit);
    return res;
  } catch (err) {
    console.error('❌ Errore fetchTor:', err);
    throw err;
  }
}
