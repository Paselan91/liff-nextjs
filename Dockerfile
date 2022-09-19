FROM node:17-alpine

WORKDIR /usr/src/app

RUN apk update && apk add bash