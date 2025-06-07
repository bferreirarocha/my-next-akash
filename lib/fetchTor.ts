import fetch from 'node-fetch';
import { SocksProxyAgent } from 'socks-proxy-agent';

const proxyAgent = new SocksProxyAgent('socks5h://127.0.0.1:9050');

export async function fetchTor(input: string, init: any = {}) {
  return fetch(input, {
    ...init,
    agent: proxyAgent,
  });
}
