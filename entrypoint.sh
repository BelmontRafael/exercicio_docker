#!/bin/sh

if [ -n "$1" ]; then
    export NOME="$1"
    shift
else
    export NOME=${NOME:-visitante}
fi

exec "$@"