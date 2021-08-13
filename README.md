# Tenant UI 
This serves as a dashboard that gives a top-down summary of what is taking place in the network by using a [blockscout database](https://lookout.qluv.io/txs). 
The project utilizes [Vue3.js](https://v3.vuejs.org/) and is a great starting point for anyone looking to get started with Vue.

## Files
All the code is under the `client` directory and the `server` directory is mainly to utilize a locally hosted blockscout db (ideally this would be hosted elsewhere). 

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
### Server Congifuration/Installation
#### Blocksout DB is hosted externally
In `client/src/scripts/OverviewCounts.js` and `client/src/scripts/TimeSpecificCounts.js` modify the line 
```
const DB_ADDRESS = "http://localhost:5000";
```
to point to the address of the externally hosted blockscout db. Everything else should remain unchanged. 
I would also look at `server/index.js` to get an idea of how the blockscout db is being queried. 
## Preview 
![image](https://user-images.githubusercontent.com/84602967/129400568-95d7ebad-8a3d-4ef4-9bab-bf8838f7fa92.png)
