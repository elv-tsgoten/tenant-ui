# Tenant UI 
This serves as a dashboard that gives a top-down summary of what is taking place in the network by using a [blockscout database](https://lookout.qluv.io/txs). 
The project utilizes [Vue3.js](https://v3.vuejs.org/) and is a great starting point for anyone looking to get started with Vue.

## Files
All the code is under the `client/` directory and the `server/` directory is mainly to utilize a locally hosted blockscout db (ideally this would be hosted elsewhere). 

## Vue Components
### Pages
#### Overview
This page serves as the homepage. It has the summary data from all of time for the varius metrics. 
#### Users
This page has the data for various time periods of the users, tenants and groups. 
#### Objects
This page has the data for the content objects, content libraries and content spaces created. The data is split by day, week, month and all of time. 
### Reusable Components
- Sidebar
- SummaryCard
- TopHeader
- ChartsCard

#### SummaryCard
Takes in an `info` object and `keys` array. The `keys` array determines what attributes out of the `info` object to be displayed. 
The card renders by itself, and if you wish to pass in computed properties and such it is reccomended to do so in the parent component where the SummaryCard exists. 
#### ChartsCard
Serves as essentially a wrapper for specific chart components. It makes it easy to have a consistent styling of the component. It follows the same styling and dimensions as the SummaryCard so it is reccomende to use this wrapper for any charts. 

## Installation
### Client Installation
To setup the project 
```
npm install
```
This should take care of installing all the necessary packages. 
You may find that `vue-cli` is not installed. For this find the installation at [cli.vuejs.org](https://cli.vuejs.org/guide/installation.html) or TL;DR is 
``` 
npm install -g @vue/cli
```
To compile and hot-reload the project for development use 
```
npm run serve
```
You should be able to see the website on `localhost:8080`. 
### Server Congifuration/Installation
#### Blocksout DB is hosted externally
In `client/src/scripts/OverviewCounts.js` and `client/src/scripts/TimeSpecificCounts.js` modify the line 
```
const DB_ADDRESS = "http://localhost:5000";
```
to point to the address of the externally hosted blockscout db. Everything else should remain unchanged. 
I would also look at `server/index.js` to get an idea of how the blockscout db is being queried. 
#### Blockscout DB hosted locally 
In `server/` running
```
node index.js
```
will start the service. By default it starts the server on `localhost:5000`. 
It also expects the Postgres Blockscout DB to be hosted in `localhost:5432`. 
You can modify these settings in `server/db.js` which has the DB configurations. 
## Preview 
![image](https://user-images.githubusercontent.com/84602967/129400568-95d7ebad-8a3d-4ef4-9bab-bf8838f7fa92.png)
