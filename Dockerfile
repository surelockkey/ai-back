FROM node:16.14.2 as production

WORKDIR /usr/src/app

COPY package*.json .

ARG NPM_TOKEN  
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc

RUN npm install

COPY . .

RUN npm run build

ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max-old-space-size=4096

CMD "npm" "start"
