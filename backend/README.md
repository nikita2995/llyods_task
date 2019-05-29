# Llyods Task

Llyods system is a platform for company mangement.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

* [Node.js 8.X](https://nodejs.org/en/download/)
* [Mongo DB](https://hyperledger.github.io/composer/latest/installing/development-tools.html)

## Start Server

Install npm packages:
```
npm install
```

Set Node Environment through terminal:
```
export NODE_ENV=development
```

Start the development server:
```
npm start
```
** Wait till Database connection log

Start the server in debug mode:
```
npm run debug
```
** Wait till BN connection log

Server is running at http://localhost:5000
For Swagger documentation, go to http://localhost:5000/api-docs

## API description

Base Path: `/api`

Api in Application:
* `/company`: Used for adding company in the system
* `/company/:companyName/status`: Used for fetching company status
* `/company/:companyName`: Used for getting company detail from companyName
* `/admin/company/:companyName`: Used for getting details of company for admin
* `/admin/company`: Used for updating and getting details for admin