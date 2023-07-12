FROM node:20-alpine3.18

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm install

# SOURCE is the name of the horoscope file that should be copied
# as app.js. This lets us use one project and one Dockerfile to
# build all the different images. So use --build-args SOURCE=filename.js
# with a different filename each time, and change the image tag
# accordingly.

ARG SOURCE
ENV SOURCE_FILE=$SOURCE

COPY $SOURCE_FILE ./app.js
COPY handleCors.js .

EXPOSE 3000

CMD ["node", "app.js"]