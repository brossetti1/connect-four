## Rails React Connect4

objectives: https://docs.google.com/document/d/1ChozkkouQrRESGlvZYEM4sNAyks5mK-cAODGSKvgYjM/edit

In attempting the above assignment, I created two seperate heroku instances and I have three branches that encompass my work on this project. 

####Production
[rails-react-connect4-production](http://rails-react-connect4.herokuapp.com/)
* branch - `master`

this encompases my work over a 4 hour time period, the front end is not incorporated in this piece, I essentially setup what I wanted the ruby logic to handle for taking turns and choosing a column to place the token. The Schema is a simple implementation of what I beleive is needed to get a functioning connect4 game operating.

####Staging
[rails-react-connect4-staging](http://rails-react-connect4-staging.herokuapp.com/)

* branch - `staging` - for preproduction testing
* branch - `connect-react-api` - **currently** deployed to the staging server

The staging instance represents additional hours I was able to devote to this project over the weekend. It includes a built out API and a User interface. Unfortunately I did not get the React piece hooked up to the Rails API in time, and I felt that I was getting close, heres the last branch I committed with Work in Progress(WIP):

* branch - `connect-react-api-WIP`

##Development dependencies:

Ruby 2.4
Bundler - gem install bundler --no-doc
node

## Getting Started

* `git clone https://github.com/brossetti1/connect-four.git`

* `cd connect-four`

* `bundle install`

* `npm install --save`

