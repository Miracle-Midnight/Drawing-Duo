#!/bin/sh

DOCKER_IMAGE_NAME=drawing-duo-backend

DOCKER_CONTAINER_NAME=drawing-duo

docker build -t ${DOCKER_IMAGE_NAME} .

docker run -d -p 3000:3000 --name ${DOCKER_CONTAINER_NAME} ${DOCKER_IMAGE_NAME}