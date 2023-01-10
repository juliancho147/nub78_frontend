# syntax=docker/dockerfile:1.4

FROM --platform=$BUILDPLATFORM node:17.13.0

WORKDIR /usr/app

RUN npm install -g npm@9.2.0

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]
