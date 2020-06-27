FROM node:alpine3.11

WORKDIR /opt/loudwalk-frontend/

VOLUME /opt/loudwalk-frontend/src

ADD . .

RUN npm install
