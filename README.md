# Theatre Booking System
A website for a theatre company

This document contains information for installing, setting up, and configuring the website. To start and update the documentation server, run ```npm run jsodc```

With the server running, you can go to:
- http://localhost:3030/ for JavaScript documentation generated with JSDoc

# Installing
Clone the repository:
```
$ git clone https://github.coventry.ac.uk/340CT-2021OCTJAN/standringj-sem1
```
Install the package:
```
$ cd standringj-sem1
$ npm install
```

# Running the server
To run the server, you can use the ```start``` script to run ```index.js``` with ```nodemon```. This means that the server will update when any files are changed:
```
$ npm start
```
You can then access the website at http://localhost:8080

# Testing
The AVA testing framework is used to test the modules in modules/. To run the tests, use:
```
$ npm run test
```
This will run through all the tests defined in unitTests/

# Linting
Files in this project use the [Airbnb JavaScript Style](https://github.com/airbnb/javascript) to keep code consistent. This is enforced using the ```eslint``` rules in ```.eslint.rc```. 
Whenever you make any changes to files in this project, you should run the linter using:
```
$ npm run linter
```
and fix all errors/warnings before committing.
