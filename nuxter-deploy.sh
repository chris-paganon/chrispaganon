#!/bin/bash

REMOTE_PATH="~/nuxter/chrispaganon"
REMOTE_SSH="nuxter@77.37.87.199"

MAIN_FILES="docker-compose.yml Dockerfile nuxter-start.sh"

if [[ "$*" == *"--production"* ]]; then
    echo "Deploying production environment..."
    rsync -azre 'ssh' ${MAIN_FILES} \
      .env.production \
      .output.production \
      ${REMOTE_SSH}:${REMOTE_PATH}
    
    ssh ${REMOTE_SSH} "cd ${REMOTE_PATH} && ./nuxter-start.sh --production"
    exit 0
fi

if [[ "$*" == *"--staging"* ]]; then
    echo "Deploying staging environment..."

    rsync -azre 'ssh' ${MAIN_FILES} \
      .env.staging \
      .output.staging \
      ${REMOTE_SSH}:${REMOTE_PATH}

    ssh ${REMOTE_SSH} "cd ${REMOTE_PATH} && ./nuxter-start.sh --staging"
    exit 0
fi

echo "Deploying production and staging environments..."

rsync -azre 'ssh' ${MAIN_FILES} \
  .env.production .env.staging \
  .output.production .output.staging \
  ${REMOTE_SSH}:${REMOTE_PATH}

ssh ${REMOTE_SSH} "cd ${REMOTE_PATH} && ./nuxter-start.sh"
