FROM node:8.6.0-alpine

RUN apk -v --update add \
        python \
        py-pip \
        groff \
        less \
        mailcap \
        && \
    pip install --upgrade awscli==1.14.5 s3cmd==2.0.1 python-magic && \
    apk -v --purge del py-pip

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV NODE_ENV production

# cache packages in layer
COPY package.json yarn.lock /usr/src/app/

RUN yarn

COPY . /usr/src/app

EXPOSE 3000

CMD ["yarn", "start"]
