
FROM node:12-stretch

# create a node user (this is a node only thing)
USER node

# make this your working directory
# then if you run docker pwd, you'll see home/node/code
WORKDIR /home/node/code

# set node as the group and user of index; copy index into the image
COPY --chown=node:node index.js index.js

# ADD does something very similar to COPY but it does more
# ADD can get something from the network, for example

# run node and open index
CMD ["node", "index.js"]