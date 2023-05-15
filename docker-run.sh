#!/bin/sh

IMAGE=node-alpine20
CONTAINER=node-alpine20
WORK_DIR=/home/node/workdir/

docker run --detach --rm \
    -v $(pwd)/app:$WORK_DIR \
    -v $WORK_DIR/node_modules/ \
    --name $CONTAINER \
    $IMAGE \
    tail -f /dev/null

docker exec -it $CONTAINER /bin/sh

docker stop $CONTAINER