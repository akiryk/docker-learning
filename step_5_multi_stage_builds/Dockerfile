# build stage
# Since it's just for building stuff, use stretch. It will be big, but we'll throw it away after build.
FROM node:12-stretch
WORKDIR /build
# Get rid of chown part because it can be owned by root for the build
COPY package-lock.json package.json ./
RUN npm ci
COPY . .

# runtime stage
# use a lighter weight version of Linux
FROM alpine:3.10
# use the Alpine package manager to grab Node, but we don't need npm
RUN apk add --update nodejs
# mimic what the Node.js official container does: make a user group of node with one user in it, node
RUN addgroup -S node && adduser -S node -G node
USER node
RUN mkdir /home/node/code
WORKDIR /home/node/code
# Copy from the build, --from=0 for the first state
# keep node as the owner and put everything from build dir into the current dir.
COPY --from=0 --chown=node:node /build .
CMD ["node", "index.js"]