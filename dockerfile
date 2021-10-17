FROM node:16.1.0-alpine

RUN apk update

RUN mkdir -p /app/backend
WORKDIR /app/backend

COPY package.json /app/backend
RUN npm install

COPY . /app/backend

CMD ["node", "./dist/app.js"]
