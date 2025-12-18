FROM node:18-alpine as production

WORKDIR /usr/src/app

COPY package*.json .

ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc && \
    NODE_OPTIONS=--max_old_space_size=2048 npm install && \
    rm -f .npmrc

COPY . .

RUN NODE_OPTIONS=--max_old_space_size=3072 npm run build

ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max-old-space-size=2048

CMD "npm" "start"
