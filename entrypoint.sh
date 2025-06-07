#!/bin/bash

echo "🧅 Avvio Tor..."
tor &

echo "⏳ Aspetto Tor (10s)..."
sleep 10

echo "🌍 Esporto proxy globale..."
export ALL_PROXY=socks5h://127.0.0.1:9050

echo "🚀 Avvio app Next.js SSR..."
npm run start
