## Rails React Connect4

objectives: https://docs.google.com/document/d/1ChozkkouQrRESGlvZYEM4sNAyks5mK-cAODGSKvgYjM/edit

In attempting the above assignment, I created two seperate heroku instances and I have three branches that encompass my work on this project. At the start I envisioned hooking these principles and technologies together to create this application:

* Rails -v 5.0.2 API using JSON-api specs to pass data - http://jsonapi.org/examples/ - at the moment I am passing a minimal amount of data to get the game moves in place, so there is only a basic implementation of the json-api spec.

* CSS3 flexbox - I used this excercise get a better understanding of flexbox and relied on it heavily when creating the ui

* rspec - the Rails app is accompanied by tests, I do not have much experience testing javascript so the React app is without tests

* es6 - I have been learning more and more javascript as I continue my career as a backend developer. I absolutley love how es6 feels and although I did not get to much es6 javascript in the master and staging branches, the WIP branch has the start of implementing some es6 javascript into the app.

* webpack - I used this project to get a better understanding of webpack to bundle front end assets into the asset-pipeline

The heroku instances are running buildpacks in this order:

-heroku/nodejs
-https://github.com/jerrysu/heroku-buildpack-webpack
-heroku/ruby

## Production
[rails-react-connect4-production](http://rails-react-connect4.herokuapp.com/)
* branch - `master`

this heroku instance includes my work over a 4 hour time period, the front end is not incorporated in this piece, although I finished the initial user design shortly after the 4 hour mark. I essentially setup what I wanted the ruby logic to handle for taking turns and choosing a column to place the token. The Schema is a simple implementation of what I beleive is needed to get a functioning connect4 game operating with a SPA feeding the move data. tests included.

`rspec spec --format documentation` for test suite

initial ui: 

![Initial UI](https://raw.githubusercontent.com/brossetti1/connect-four/staging/doc/initial-ui.png?token=AFuGFG1Acts5ZkaP-_myRhON5XYW-idGks5Y2Z-SwA%3D%3D)

## Staging
[rails-react-connect4-staging](http://rails-react-connect4-staging.herokuapp.com/)

* branch - `staging` - for preproduction testing
* branch - `connect-react-api` - **currently** deployed to the staging server

The staging instance represents additional hours I was able to devote to this project over the weekend. It includes a built out API and a User interface. Unfortunately I did not get the React piece hooked up to the Rails API in time, and I felt that I was getting close, heres the last branch I committed with Work in Progress(WIP):

`rspec spec --format documentation` for test suite

current-ui:

![Cnitial UI](https://raw.githubusercontent.com/brossetti1/connect-four/staging/doc/current-ui.png?token=AFuGFDDm2UfiyinfFV_IdZzZgVeH0HvRks5Y2awTwA%3D%3D)

* branch - `connect-react-api-WIP` - this branch represents work in progress when i decided to stop the excercise Sunday night. I did not get the react piece hooked up to the API but I was felt good about the direction I was going in. In between now and any technical interview, I would love to continue working through this branch to see this project through to completetion.

## Development dependencies:

Ruby 2.4
Bundler - gem install bundler --no-doc
node

## Getting Started

* `git clone https://github.com/brossetti1/connect-four.git`

* `cd connect-four`

* `bundle install`

* `npm install --save`

* run `npm run dev` in one terminal

* run `rails s` || `rescue rails s` (for pry rescue)

* localhost:3000 will load the app

