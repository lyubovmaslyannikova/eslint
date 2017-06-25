FROM alpine:latest

ENV CONFIG_FILE=eslintrc.js \
    BINARY=/usr/bin/eslint

RUN apk add --update \
    nodejs \
    nodejs-npm

COPY $CONFIG_FILE /

RUN npm install -g eslint

ENTRYPOINT $BINARY "--config" $CONFIG_FILE ${file}
