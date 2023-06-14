# CRUD App using MERN Stack: App_Counter </br>

![image of app](/images/the_app.png)
</br>
### This is an implementation of a CRUD App through the MERN Stack.</br>It's as simple as can be, for learning purposes.
</br>

To run this app:</br>
1. Clone this Repository: </br>
```
git clone https://github.com/DawdlingDaedalus/App_Counter
```
</br>
2. Install Dependencies
</br>
MongoDB - https://www.mongodb.com/docs/manual/installation/
Node.js - https://nodejs.org/en/download
Express.js and React are components for the app which have been set up using the Node Package Manager. The client directory was initialized with `npx create-react-app` and the main directory was initialized with `npm init`.
</br>
3. Start MongoDB process (Database)
</br>
I'm on an Apple Silicon Mac and installed with `brew`, so I run `brew services start mongodb-community` from terminal.
</br>
4. Start Server process
</br>
From terminal, navigate to the App_Counter repo and run: </br>
```
node server.js
```
</br>

This will start a server process at `http://localhost:5001` and connect you to a local MongoDB on your own machine.
</br>
5.
</br>
Finally, to start the app, navigate to the `client` subdirectory and run: </br>

```
npm start
```
</br>

The app should then run at `http://localhost:3000` and automatically open in your default web browser.
</br>

### Shut it down properly!!!
</br>
To shut down properly, stop the database process (see https://www.mongodb.com/docs/manual/tutorial/manage-mongodb-processes/#stop-mongod-processes). On my machine, it's `brew services stop mongodb-community`.
</br>
From terminal, tap ctrl^C from the running processes of the server and react app.
</br>

Happy Counting!
