#!/bin/sh

if [ "$1" = "node" ]; then
    export NOME=${NOME:-visitante}
else
    export NOME="$1"
    set -- node index.js
fi

exec "$@"