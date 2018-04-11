# **GreenWave**

## *This website coordinates and organizes activities of sustainable living in local communities.*

### *About This Website*
This website is a digital information hub.  Not only can users find out about sustainable living activities in their local community, but they can also organize their own activities through this website.  The user will only be able to view the main page of the website until he logs in or creates an account.  Once he is logged into the website, he is given several choices of pages he can pull up through the nav bar.  The user is given a personalized account with the website.   With this personalization, the user can create and save a *green* location.  He can also plan and organize his own events.  The website can be used to advertise and enroll attendees in events that the user creates.  Once a location or event is saved, it can also be managed and edited.  The user can go to another page to view all the *green* events scheduled.  Another page contains a google map that shows all the *green* locations saved with this website.  Environmentally aware users will be glad to use the resource center page to find additonal links to websites containing sustainable living initiatives and information.  The website has great potential in its usage.  As users increase in numbers, more events will be arranged and announced.  The resource center will be able to modify its listing to highlight user favorites and recommendations.  The website is an excellent structure and platform to launch a dynamic exchange of information and initiatives. 


### *A Useful Project*
With the growing population and the renewed concern for the welfare of the environment, consumers play a vital and optional role in helping with sustainable living in their local communities.  A website like this makes it easier to participate in environmentally aware activities.  Someone who might not recycle may be influenced to do so if they come upon a tool like this website while using the internet.  This website makes it easier to be helpful.  A person who is very concerned about the environment will have a platform for more advanced organizing efforts through this website.

### *Production*
The project was started with a Create React App as a boilerplate. Current versions of React and React-Router-Dom were used for this assignment. To save users, events, and locations for the website, a MongoDB database was used. Also utilized in the website development were Express, Axios, Mongoose, Google Maps, and Path.  Passport was used for authentication.  Bootstrap was used in the html.  Util and Reactstrap were used for the carousel of images on the login page.  The website uses a color scheme of green and blue.

### *Deployment (Heroku)*
The website is deployed on Heroku at https://shielded-citadel-50208.herokuapp.com/


### *How It Works*

This is the initial page of website.  The user will not be able to get any more functionality from the website without logging in or creating an account.
![2018-04-11](https://user-images.githubusercontent.com/30198872/38647345-c77dd022-3db9-11e8-8980-5c315b470a96.png)




Once the *log in* button is clicked on the nav bar, the user is brought to the login page.  The user either enters his login information or creates an account.  
![2018-04-11 1](https://user-images.githubusercontent.com/30198872/38647425-35599b80-3dba-11e8-948c-ec0b38af0dce.png)



Once the user is verified, he is brought to the *Profile* page with a full nav bar of choices to navigate through the website.  The *Profile* page contains information and editing abilities that apply to the individual user.  The user can click on buttons to edit his stored selection of locations and events.  The user can also click on buttons to add events and locations. The user can view his upcoming events (those events that he has submitted a RSVP to).
![2018-04-11 4](https://user-images.githubusercontent.com/30198872/38647570-f86f876a-3dba-11e8-89d1-de2587088a7a.png)
![2018-04-11 8](https://user-images.githubusercontent.com/30198872/38647625-43162102-3dbb-11e8-91ca-3cc63fef0f31.png)
![2018-04-11 9](https://user-images.githubusercontent.com/30198872/38647884-86cda036-3dbc-11e8-8a48-4fc62eee8567.png)


From the *Profile* page, the user can click on a facebook, twitter, or outlook email link from an event item or location item to share communication with others about this item.  The following screenshot shows the facebook link from an event item in an account.
![2018-04-11 7](https://user-images.githubusercontent.com/30198872/38647666-7b72283e-3dbb-11e8-8d1e-adec2ce8ca38.png)


A form in a modal pops up when the user selects a *create* or *edit* button.

**Edit Your Event**
![2018-04-11 12](https://user-images.githubusercontent.com/30198872/38647789-048c0158-3dbc-11e8-9a1e-1e6e2680ce81.png)

**Create Event**
![2018-04-11 3](https://user-images.githubusercontent.com/30198872/38647827-31c41034-3dbc-11e8-9fa8-963acd806383.png)

**Create Location**
![2018-04-11 5](https://user-images.githubusercontent.com/30198872/38647849-5bdc5714-3dbc-11e8-8cd7-f9e130dbde31.png)



The *Events* page allows the user to browse green events.  If the user wants to attend a green event, he can click the RSVP button.
![2018-04-11 10](https://user-images.githubusercontent.com/30198872/38647924-c49f04b8-3dbc-11e8-8fd4-703e99ba7fd5.png)


The *Locations* page displays a navigable google map.  The red balloon pointers are *green* locations.
![2018-04-11 11](https://user-images.githubusercontent.com/30198872/38647990-0bc4869c-3dbd-11e8-93e6-b0d4c6cc7ae6.png)

If a red ballon pointer is selected, information on that *green* location is given in a pop-up modal.
![2018-04-11 6](https://user-images.githubusercontent.com/30198872/38648066-65c410c2-3dbd-11e8-9718-38554f1f301e.png)


The *Resources* page will give the user the ability to link to other related websites.  This page can be altered as user favorites are determined.
![2018-04-09 14](https://user-images.githubusercontent.com/30198872/38529850-649a5be0-3c35-11e8-9f79-57b13831e4d6.png)
![2018-04-09 15](https://user-images.githubusercontent.com/30198872/38529856-69b835b6-3c35-11e8-8a9c-a8c6c8cb9fb4.png)



The following screenshot shows the linked website the user would be brought to with the click of the *City of Cleveland* resource.
![2018-04-09 16](https://user-images.githubusercontent.com/30198872/38529864-736f22cc-3c35-11e8-8a90-405d4a04acf5.png)


Hitting *GreenWave* on the nav bar will bring the user to the homepage.
![2018-04-11 2](https://user-images.githubusercontent.com/30198872/38648185-e6919738-3dbd-11e8-93e6-dc3f309b35e6.png)


The information from the website is being stored in a MongoDB database.  The following screenshot shows the data model for an event and an event item stored in the MongoDB database.  
![2018-04-09 20](https://user-images.githubusercontent.com/30198872/38529897-9d680e04-3c35-11e8-9773-33a2b2b540d7.png)

The next screenshot shows that event in mongo.
![2018-04-09 23](https://user-images.githubusercontent.com/30198872/38529908-b5b4c2c2-3c35-11e8-885a-dadf7db79baf.png)


### **Team Members**
The team lead for this project was **Ashlee Brolly**.  The other team members were **Selga Muiznieks, Mike Kapronica, Jon Mockbee, and Paul Schaller**.
