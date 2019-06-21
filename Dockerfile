FROM node:carbon

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "server.js"]

EXPOSE 3000