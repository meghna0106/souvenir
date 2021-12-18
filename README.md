# Souvenir

## Website : https://mjsouvenir.netlify.app/

* This is a full stack application made using MERN concepts
* Used MongoDB atlas for database and redux to dispatch actions
* Created fully responsive frontend using React and materialUI
* Server side deployed using Heroku : https://souvenir-mj.herokuapp.com/
* Client side deployed using Netlify

<br/>

There are 5 main actions in this application
 
 1. Fetching all posts
 2. Creating a post
 3. Updating a post
 4. Deleting a post
 5. Like a post
<br/>

 Each of these actions have been implemented by following a structured process as follows:

 1. Adding a route of the action to **routes in server**
 2. Adding this functionality to **controllers in server**
 3. Making an *api* call for the action in **client**
 4. Adding an action with respect to the api in **actions on client side**
 5. Adding the reduced version of this action in **reducers on client side**
 6. Using these actions on client side components
 
 <br>
 
 <sub><sup>Problem faced : Mongoose Schema timestamp not working, so I had to remove the timestamp of all posts </sup></sub>
