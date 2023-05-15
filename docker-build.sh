#!/bin/sh

IMAGE=node-alpine20
HOST_UID=$(id -u)

docker build \
    --build-arg HOST_UID=$HOST_UID \
    -t $IMAGE .
