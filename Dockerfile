FROM node:alpine AS development

EXPOSE 3000

WORKDIR /reactos

COPY ./package.json /reactos

RUN ["npm" , "install"]

COPY . .

CMD npm start