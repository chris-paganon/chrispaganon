projectName="chrispaganon"
projectNameProduction="$projectName-production"
projectNameStaging="$projectName-staging"

docker network create ${projectNameProduction}_caddy_nuxt_app
docker network create ${projectNameStaging}_caddy_nuxt_app

docker compose -f ./nuxter-config/nuxter-base-compose.yml --env-file ./nuxter-config/production.env -p ${projectNameProduction} --project-directory ./ up --build --remove-orphans -d
docker compose -f ./nuxter-config/nuxter-base-compose.yml --env-file ./nuxter-config/staging.env -p ${projectNameStaging} --project-directory ./ up --build --remove-orphans -d