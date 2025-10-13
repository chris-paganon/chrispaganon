#!/bin/bash

PROJECT_NAME="chrispaganon"
REMOTE_PATH="~/nuxter/chrispaganon"
REMOTE_SSH="nuxter@77.37.87.199"
MAIN_FILES="docker-compose.yml Dockerfile nuxter-start.sh"

deploy_environment() {
  local env=$1
  local project_name="${PROJECT_NAME}-${env}"
  local env_file=".env.${env}"
  local images_dir="docker-images-${env}"
  
  echo "Building ${env} images..."
  docker compose -f ./docker-compose.yml \
    --env-file ./${env_file} -p ${project_name} --project-directory ./ \
    build

  echo "Extracting built image names..."
  images=$(docker images --format "table {{.Repository}}" | grep "${project_name}")

  echo "Saving images to ${images_dir} directory..."
  mkdir -p ${images_dir}
  echo "$images" | while read -r image; do
    echo "Saving $image..."
    docker image save "$image" --output "${images_dir}/${image}.tar"
  done

  echo "Deploying ${env} environment..."
  rsync -Pazre 'ssh' ${MAIN_FILES} ${env_file} ${images_dir} ${REMOTE_SSH}:${REMOTE_PATH}
  
  ssh ${REMOTE_SSH} "cd ${REMOTE_PATH} && ./nuxter-start.sh --${env}"
}

if [[ "$*" == *"--production"* ]]; then
  deploy_environment "production"
  exit 0
fi

if [[ "$*" == *"--staging"* ]]; then
  deploy_environment "staging"
  exit 0
fi

echo "Deploying production and staging environments..."
deploy_environment "production"
deploy_environment "staging"
