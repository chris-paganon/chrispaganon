#!/bin/bash

projectName="chrispaganon"
projectNameProduction="$projectName-production"
projectNameStaging="$projectName-staging"

# Check if --local flag is provided
if [[ "$*" == *"--local"* ]]; then
    echo "Starting in local mode..."
    docker compose -f ./docker-compose.yml -f ./docker-compose.override.yml --env-file ./.env.staging -p ${projectNameProduction} --project-directory ./ up --build --remove-orphans -d
    docker compose -f ./docker-compose.yml -f ./docker-compose.override.yml --env-file ./.env.production -p ${projectNameStaging} --project-directory ./ up --build --remove-orphans -d
else
    echo "Starting production and staging environments..."
    docker compose -f ./docker-compose.yml --env-file ./.env.production -p ${projectNameProduction} --project-directory ./ up --build --remove-orphans -d
    docker compose -f ./docker-compose.yml --env-file ./.env.staging -p ${projectNameStaging} --project-directory ./ up --build --remove-orphans -d
fi