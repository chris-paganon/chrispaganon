#!/bin/bash

rsync -avzre 'ssh' docker-compose.yml Dockerfile nuxter-start.sh \
  .env.production .env.staging \
  .output.production .output.staging \
  nuxter@77.37.87.199:~/nuxter/chrispaganon

ssh nuxter@77.37.87.199 "cd ~/nuxter/chrispaganon && ./nuxter-start.sh"