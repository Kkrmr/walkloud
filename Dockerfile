FROM node:alpine3.11

WORKDIR /opt/walkloud-frontend/

VOLUME /opt/walkloud-frontend/src

ADD . .

RUN npm install
