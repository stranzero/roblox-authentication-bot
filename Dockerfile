FROM node:lts-alpine

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

ENTRYPOINT node main.js
