FROM node:19

WORKDIR /usr/src/app

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    cowsay \
    nyancat \
    && apt-get -y clean \
    && rm -rf /var/lib/apt/lists/*