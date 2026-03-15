FROM node:18-slim

WORKDIR /app

ARG DEFAULT_MODE=dev

ENV APP_MODE=${DEFAULT_MODE}

COPY package*.json ./

RUN npm install

COPY index.js .
COPY entrypoint.sh .

RUN chmod +x entrypoint.sh && mkdir -p /logs

VOLUME ["/logs"]
EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]
CMD ["node", "index.js"]