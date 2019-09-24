---
title: How to leverage multi-stage docker build to trim down the image size?
date: "2019-09-23T15:59:25.888Z"
description: Use multi-stage builds to trim down your docker image size, here I explain with a node application
---

So you use docker and you've written a Dockerfile that looks neat and everything looks and runs great. But if you look at your docker image sizes, it might be huge. It was in my case at work, and it kind of defeated the purpose of using containers.

Here's something you can do quickly to drop some serious bytes from your Docker Image size. 

Change your Dockerfile from something like this
```docker
FROM node:8.16
RUN npm install
RUN npm run build #lets say this generates your build bundles (dist folder)
CMD ["npm", "run", "start"]
```
    

To something like this
```docker
FROM node:8.16 as builder
RUN npm install
RUN npm run build

FROM node:8.16 as production
COPY --from=builder /dist ./
#COPY more stuff from builder like your ./server/node_modules and ./server/ whatever you need from your builder image
CMD ["npm", "run", "start"]
```
    
    

Okay so here's what you did with this "multi-stage" build.

- You created an intermediate image (**builder)**
- You use the **builder** to install stuff you need ( this could even include a lot of stuff you don't need in production like acceptance testing tools etc)
- But when you want the **production** image, you pick and choose what parts of **builder** you need, for e.g here I'm just copying the dist folder.
- **production** image starts FROM node:8.16, it just adds one more layer on top to copy the dist folder

But how did this help? Every docker instruction adds a bunch of size to your image. Every RUN, ADD, COPY adds to your image size. If you have fewer instructions, then you can reduce your image size. Using multi-stage build is a clean way to achieve fewer instructions.

You can go through [this link](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) to find some cool best practice tips to write Dockerfiles.