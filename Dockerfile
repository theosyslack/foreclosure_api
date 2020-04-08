FROM node:12

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn --only=production

COPY dist .

EXPOSE 5000

CMD ["node", "api.js"]


