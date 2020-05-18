FROM alpine:edge
RUN apk add --no-cache \
  chromium \
  nss \
  freetype \
  freetype-dev \
  harfbuzz \
  ca-certificates \
  ttf-freefont \
  nodejs

RUN apk update && apk upgrade && apk add --no-cache git
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/
RUN npm install --production && npm cache clean --force
COPY ./ /usr/src/app
ENV NODE_ENV production
ENV PORT 80
EXPOSE 80
CMD [ "npm", "start" ]