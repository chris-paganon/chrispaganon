#!/bin/bash

PROJECT_NAME="chrispaganon"

PROJECT_NAME_PRODUCTION="$PROJECT_NAME-production"
PROJECT_NAME_STAGING="$PROJECT_NAME-staging"

function start_production() {
    docker compose -f ./docker-compose.yml --env-file ./.env.production -p ${PROJECT_NAME_PRODUCTION} --project-directory ./ up --build --remove-orphans -d
}

function start_staging() {
    docker compose -f ./docker-compose.yml --env-file ./.env.staging -p ${PROJECT_NAME_STAGING} --project-directory ./ up --build --remove-orphans -d
}

if [[ "$*" == *"--local"* ]]; then
    echo "Starting in local mode..."
    docker compose -f ./docker-compose.yml -f ./docker-compose.override.yml --env-file ./.env.staging -p ${PROJECT_NAME_PRODUCTION} --project-directory ./ up --build --remove-orphans -d
    docker compose -f ./docker-compose.yml -f ./docker-compose.override.yml --env-file ./.env.production -p ${PROJECT_NAME_STAGING} --project-directory ./ up --build --remove-orphans -d
    exit 0
fi

if [[ "$*" == *"--production"* ]]; then
    echo "Starting production environment..."
    start_production
    exit 0
fi

if [[ "$*" == *"--staging"* ]]; then
    echo "Starting staging environment..."
    start_staging
    exit 0
fi

echo "Starting production and staging environments..."
start_production
start_staging