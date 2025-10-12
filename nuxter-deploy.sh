#!/bin/bash

rsync -avzre 'ssh' docker-compose.yml Dockerfile nuxter-start.sh \
  production.env staging.env \
  .output.production .output.staging \
  chrispaganon@77.37.87.199:~/nuxter/chrispaganon