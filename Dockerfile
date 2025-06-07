FROM node:20

# Installa Tor
RUN apt-get update && \
    apt-get install -y tor && \
    apt-get clean

WORKDIR /app
COPY . .

# Installa dipendenze e builda
RUN npm install
RUN npm run build

# Copia configurazione Tor e script
COPY torrc /etc/tor/torrc
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000
CMD ["/entrypoint.sh"]
