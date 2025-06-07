import axios from 'axios';
import { SocksProxyAgent } from 'socks-proxy-agent';

const proxyAgent = new SocksProxyAgent('socks5h://127.0.0.1:9050');

const axiosTor = axios.create({
  httpsAgent: proxyAgent,
  timeout: 10000, // opzionale
});

export default axiosTor;
