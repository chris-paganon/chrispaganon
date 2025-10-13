#!/bin/bash

PROJECT_NAME="chrispaganon"
PROJECT_NAME_STAGING="$PROJECT_NAME-staging"
PROJECT_NAME_PRODUCTION="$PROJECT_NAME-production"

REMOTE_PATH="~/nuxter/chrispaganon"
REMOTE_SSH="nuxter@77.37.87.199"

MAIN_FILES="docker-compose.yml Dockerfile nuxter-start.sh"

if [[ "$*" == *"--production"* ]]; then
  echo "Building production images..."
  docker compose -f ./docker-compose.yml \
    --env-file ./.env.production -p ${PROJECT_NAME_PRODUCTION} --project-directory ./ \
    build

  # Extract image names and save them to a file for the next step
  echo "Extracting built image names..."
  images=$(docker images --format "table {{.Repository}}" | grep "${PROJECT_NAME_PRODUCTION}")

  echo "Saving images to docker-images-production directory..."
  mkdir -p docker-images-production
  echo "$images" | while read -r image; do
    echo "Saving $image..."
    docker image save "$image" --output "docker-images-production/${image}.tar"
  done

  echo "Deploying production environment..."
  rsync -Pazre 'ssh' ${MAIN_FILES} \
    .env.production \
    docker-images-production \
    ${REMOTE_SSH}:${REMOTE_PATH}
  
  ssh ${REMOTE_SSH} "cd ${REMOTE_PATH} && ./nuxter-start.sh --production"
  exit 0
fi

if [[ "$*" == *"--staging"* ]]; then
  echo "Building staging images..."
  docker compose -f ./docker-compose.yml \
    --env-file ./.env.staging -p ${PROJECT_NAME_STAGING} --project-directory ./ \
    build

  # Extract image names and save them to a file for the next step
  echo "Extracting built image names..."
  images=$(docker images --format "table {{.Repository}}" | grep "${PROJECT_NAME_STAGING}")

  echo "Saving images to docker-images-staging directory..."
  mkdir -p docker-images-staging

  echo "$images" | while read -r image; do
    echo "Saving $image..."
    docker image save "$image" --output "docker-images-staging/${image}.tar"
  done

  echo "Deploying staging environment..."
  rsync -Pazre 'ssh' ${MAIN_FILES} \
    .env.staging \
    docker-images-staging \
    ${REMOTE_SSH}:${REMOTE_PATH}

  ssh ${REMOTE_SSH} "cd ${REMOTE_PATH} && ./nuxter-start.sh --staging"
  exit 0
fi

echo "Deploying production and staging environments..."

rsync -Pazre 'ssh' ${MAIN_FILES} \
  .env.production .env.staging \
  docker-images-production docker-images-staging \
  ${REMOTE_SSH}:${REMOTE_PATH}

ssh ${REMOTE_SSH} "cd ${REMOTE_PATH} && ./nuxter-start.sh"
