FROM node:carbon

WORKDIR /app

COPY package.json package.json

COPY package-lock.json package-lock.json

RUN npm install

COPY . .

CMD ["node", "server.js"]

EXPOSE 3000