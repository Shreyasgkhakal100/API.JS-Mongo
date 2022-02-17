# APIJS-Mongo


## Why

APIJS-Mongo is the nodejs liabrary built on other liabraries like express, mongoose, etc. to make creating api easier for new users and also to reduce the coding time of the experience user.

## Installing Package:-

For Installing NPM Package Run Following command on your terminal.
`
npm i apijs-mongo
`


## Usage:-

Right now this liabrary only have two methods as this is the starting phase of this liabrary, We are creating much more methods for user but rightnow only two methods are available to users. so these two methods are as follow:

For Installing NPM Package Run Following command on your terminal.

`
npm i apijs-mongo
`

### Connect Your Server To MongoDB:-

To connect you node server to the mongodb dataabase you have to use our 

`
connectToMongoDB
`

This will take two argument (1) PORT & (2) MongoDB Cluster Connection Link.

So final method will look like:-


```

const apijs = require('apijs-mongo');

apijs.connectToMongoDB(<Your Port Number Goes Here>, <Your-DB-Cluster-Link-Here>);
```


### Creating User API:-

To create basic user API use following method 

`
createUserAPI
`

This will take three arguments (1) route, (2) Require fields in your Schema in form of Array & (3) Object of settings like to remove versionKeys and add timestamps to your data.

So final method will look like:-


```
apijs.createUserAPI("users", ["first_name", "last_name", "email"], {timestamps: true, versionKey: false});
// apijs.createUserAPI("users", ["first_name", "last_name", "email"]);

```

So in this methhod its upto you wheter you want to pass setting object or not, if you haven't pass it then user will be created or updated with version keys.



## creators:-


### (1) Shreyas Khakal:- [GitHub Profile](https://github.com/Shreyasgkhakal100)
