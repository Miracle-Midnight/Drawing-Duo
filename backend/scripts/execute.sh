#!/bin/sh
docker stop drawing-duo
docker rm drawing-duo

cd /home/ubuntu/drawing-duo_backend_dist
sh scripts/docker-script.sh