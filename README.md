## Rails React Connect4

objectives: https://docs.google.com/document/d/1ChozkkouQrRESGlvZYEM4sNAyks5mK-cAODGSKvgYjM/edit

In attempting the above assignment, I created two seperate heroku instances and I have three branches that encompass my work on this project. 

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

![Cnitial UI](https://raw.githubusercontent.com/brossetti1/connect-four/staging/doc/current-ui.png?token=AFuGFD1FA2dH_qbaeSAYT-oZjmK3-UP9ks5Y2Z9-wA%3D%3D)

## WIP

* branch - `connect-react-api-WIP`

I enjoyed this excercise and will continue to work through this branch to see what I end up with.



## Development dependencies:

Ruby 2.4
Bundler - gem install bundler --no-doc
node

## Getting Started

* `git clone https://github.com/brossetti1/connect-four.git`

* `cd connect-four`

* `bundle install`

* `npm install --save`

