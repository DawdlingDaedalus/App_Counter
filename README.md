# CRUD App using MERN Stack: App_Counter </br>

![image of app](/images/the_app.png)
</br>
This simple app is a demo of how the MERN Stack (MongoDB, Express.js, React.js, Node.js) can be used to build a basic CRUD App. It consists of 3 parts: a value, an `increment` button, and a `decrement` button. DB setup and APIs are found in the `App_Counter/server.js` file. Front-end components are found in the `App_Counter/client` directory.
</br>

To run this app, from the command line run: </br>
```
git clone https://github.com/DawdlingDaedalus/App_Counter
```
</br>

Then, navigate to the App_Counter repo and run: </br>
```
node server.js
```
</br>

This will start a server process at `http://localhost:5001` and connect you to a local MongoDB on your own machine. If issues arise, please ensure you have dependencies installed by running `npm install` from the `App_Counter` directory. See `App_Counter/package.json` for dependency details. 
</br>

Finally, to start the app, navigate to the `client` subdirectory and run: </br>
```
npm install
```
</br>

```
npm start
```
</br>

The app should then run at `http://localhost:3000` and automatically open in your default web browser.
</br>

Happy Counting!
