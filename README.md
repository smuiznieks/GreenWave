# **GreenWave**

## *This website coordinates and organizes activities of sustainable living in local communities.*

### *About This Website*
This website is a digital information hub.  Not only can users find out about sustainable living activities in their local community, but they can organize their own activities through this website.  The user can only view the main page of the website until they log in or create an account.  Once they are logged into the website, they are given several choices of pages they can pull up through the nav bar.  The user is given a personalized account with the website.   With this personalization, the user can choose and save a location of interest.  The user can choose their area of local residence and other locations of interest.  They can also plan and organize their own events.  The website can be used to advertise and enroll attendees in events that the user creates.  Once a location or event is saved, it can also be managed and edited.  The user can go to another page to view all the activities scheduled in an area.  Another page contains a google map for information and navigation.  Environmentally aware users will be glad to use the resource center page to find additonal links to websites containing sustainable living initiatives and information.  The website has great potential in its usage.  As users increase in numbers, more events will be arranged and announced.  The resource center will be able to modify its listing to highlight user favorites and recommendations.  The website is an excellent structure and platform to launch a dynamic exchange of information and initiative. 

...
### *A Useful Project*
With the growing population and the renewed concern for the welfare of the environment, consumers play a vital and optional role in helping with sustainable living in their local communities.  A website like this makes it easier to participate in environmentally aware activities.  Someone who might not recycle may be influenced to do so if they come upon a tool like this website while using the internet.  This website makes it easier to be helpful.  A person who is very concerned about the environment will have a platform for more advanced organizing efforts through this website.
...

### *Production*
The project was started with a Create React App as a boilerplate. Current versions of React and React-Router-Dom were used for this assignment. To save users, events, and locations for the website, a MongoDB database was used. Also utilized in the website development were Express, Axios, Mongoose, Google Maps, and Path.  Passport was used for authentication.  Bootstrap was used in the html.  Util and Reactstrap was used for the carousel of images on the login page.  The website uses a color scheme of green and blue.

### *Deployment (Heroku)*
The website is deployed on Heroku at 


### *How It Works*

This is the initial page of website.  The user will not be able to get any more functionality from the website without logging in or creating an account.
![2018-04-09](https://user-images.githubusercontent.com/30198872/38529929-cd8e7abe-3c35-11e8-8f83-6e9f143d5337.png)



Once the *log in* button is clicked on the nav bar, the user is brought to the login page.  The user either enters his login information or creates an account.  
![2018-04-09 2](https://user-images.githubusercontent.com/30198872/38529795-1cca2322-3c35-11e8-9672-9f5dd8b5618d.png)



Once the user is verified, he is brought to the *Profile* page with a full nav bar of choices to navigate through the website.  The *Profile* page contains information and editing abilities that apply to the individual user.  The user can click on buttons to view his stored selection of locations and events.  The user can also click on buttons to add events and locations.  
![2018-04-09 5](https://user-images.githubusercontent.com/30198872/38529810-2d7db0da-3c35-11e8-98f4-a9ecee4b7826.png)


From the *Profile* page, the user can click on a facebook, twitter, or outlook email link from an event item or location item to share communication with others about this item.  The following screenshot shows the facebook link from a location item in an account.

![2018-04-09 6](https://user-images.githubusercontent.com/30198872/38529815-350b9218-3c35-11e8-88c7-beb0201a3048.png)

A form in a modal pops up when the user selects a *create* or *edit* button.

**Edit Your Event**
![2018-04-09 7](https://user-images.githubusercontent.com/30198872/38529817-38d43544-3c35-11e8-930f-e90d92c92f15.png)

**Create Event**
![2018-04-09 8](https://user-images.githubusercontent.com/30198872/38529818-3dc5349a-3c35-11e8-9969-b29c8d3db6c4.png)

**Create Location**
![2018-04-09 9](https://user-images.githubusercontent.com/30198872/38529820-4123aec8-3c35-11e8-9e4b-1513facc58b6.png)


The *Events* page allows the user to browse green events.
![2018-04-09 11](https://user-images.githubusercontent.com/30198872/38529829-494a1e02-3c35-11e8-9ff4-a8153c03d000.png)


The *Locations* page displays a navigable google map.
![2018-04-09 12](https://user-images.githubusercontent.com/30198872/38529834-4e31788e-3c35-11e8-970a-d2d01dabe7ce.png)


As users interface with the website, the *Highest Rated Green Locations* will populate on the *Locations* page.
![2018-04-09 13](https://user-images.githubusercontent.com/30198872/38529838-55f09e42-3c35-11e8-8fae-ef3a282c1b81.png)


The *Resources* page will give the user the ability to link to other related websites.  This page can be altered as user favorites are determined.
![2018-04-09 14](https://user-images.githubusercontent.com/30198872/38529850-649a5be0-3c35-11e8-9f79-57b13831e4d6.png)
![2018-04-09 15](https://user-images.githubusercontent.com/30198872/38529856-69b835b6-3c35-11e8-8a9c-a8c6c8cb9fb4.png)



The following screenshot shows the linked website the user would be brought to with the click of the *City of Cleveland* resource.
![2018-04-09 16](https://user-images.githubusercontent.com/30198872/38529864-736f22cc-3c35-11e8-8a90-405d4a04acf5.png)


Hitting *GreenWave* on the nav bar will bring the user to the homepage.
![2018-04-09 18](https://user-images.githubusercontent.com/30198872/38529883-86380dd8-3c35-11e8-8e87-062eb35bf691.png)


The information from the website is being stored in a MongoDB database.  The following screenshot shows the data model for an event and an event item stored in the MongoDB database.  
![2018-04-09 20](https://user-images.githubusercontent.com/30198872/38529897-9d680e04-3c35-11e8-9773-33a2b2b540d7.png)

The next screenshot shows that event in mongo.
![2018-04-09 23](https://user-images.githubusercontent.com/30198872/38529908-b5b4c2c2-3c35-11e8-885a-dadf7db79baf.png)


### **Team Members**
The team lead for this project was **Ashlee Brolly**.  The other team members were **Selga Muiznieks, Mike Kapronica, Jon Mockbee, and Paul Schaller**.














