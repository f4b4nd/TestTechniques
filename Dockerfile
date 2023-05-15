FROM node:20-alpine3.16

ARG HOST_UID=$HOST_UID

ARG USER=node

ARG WORK_DIR=/home/node/workdir/

RUN deluser $USER && \
    adduser \
    --disabled-password \
    --uid "$HOST_UID" \
    "$USER"

RUN mkdir -p $WORK_DIR && chown -R $USER:$USER $WORK_DIR

WORKDIR $WORK_DIR

USER $USER

COPY ./app/package.json .

RUN npm install
