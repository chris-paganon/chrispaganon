#!/bin/bash

projectName="chrispaganon"
projectNameProduction="$projectName-production"
projectNameStaging="$projectName-staging"

# Check if --local flag is provided
if [[ "$*" == *"--local"* ]]; then
    echo "Starting in local mode..."
    docker compose -f ./docker-compose.yml -f ./docker-compose.override.yml --env-file ./staging.env -p ${projectNameProduction} --project-directory ./ up --build --remove-orphans -d
    docker compose -f ./docker-compose.yml -f ./docker-compose.override.yml --env-file ./production.env -p ${projectNameStaging} --project-directory ./ up --build --remove-orphans -d
else
    echo "Starting production and staging environments..."
    docker compose -f ./docker-compose.yml --env-file ./production.env -p ${projectNameProduction} --project-directory ./ up --build --remove-orphans -d
    docker compose -f ./docker-compose.yml --env-file ./staging.env -p ${projectNameStaging} --project-directory ./ up --build --remove-orphans -d
fi