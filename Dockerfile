FROM node:16.14.2 as production

WORKDIR /usr/src/app

COPY package*.json .

ARG NPM_TOKEN  
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc

RUN npm install

COPY . .

RUN NODE_OPTIONS=--max-old-space-size=2048 npm run build

ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max-old-space-size=2048

CMD "node" "--max_old_space_size=2048" "npm" "start"
