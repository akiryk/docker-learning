FROM node:12-alpine

USER node

# running as node so that we avoid permission errors
RUN mkdir /home/node/code

WORKDIR /home/node/code 

# pull just the package.json and the package-lock.json which is just enough to do the npm ci
COPY --chown=node:node package-lock.json package.json ./

# install the node modules *inside* of the container
# npm ci adheres to the lockfile, unlike npm install
# it's a best practice when using docker files
RUN npm ci

# copy everything in this directory (more-complicated-node-js) into the container.
# We already copied package.json, so we won't trigger a complete npm install just
# because we make a change to one of our js files.
COPY --chown=node:node . .

CMD [ "node", "index.js" ]  