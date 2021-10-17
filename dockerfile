FROM node:16.1.0-alpine

RUN apk update

RUN mkdir -p /app/backend
RUN mkdir -p /app/baceknd/dist/protos
WORKDIR /app/backend

COPY package.json /app/backend
RUN npm install -g npm@8.1.0
RUN npm install

COPY . /app/backend

CMD ["node", "./dist/app.js"]
