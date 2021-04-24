### Setup
#### Changing from an example project to a real one
Change the name and version in the package.json in the React folder.\
Rename the folder from example_app to the new app name.\

#### Database Setup
Drop the login details for your postgres database into the .env file for the server.

### Auth0 setup

#### Client
Log into https://auth0.com/.\
Go to the dashboard.\
Go to applications and create an application.\
click single webpage application for the type.\
Click react on the app type that comes up.\
Go to settings.\
Add http://localhost:3000 to the allowed callbacks and allowed urls.\
Save changes.

#### Server
Go to apis.\
Create an api.\
Add a name, identifier and select rs256 as your signing algorithm.\
Copy your identifier from the settings screen into your .env as the audience.\
Then copy the values to the same spots in the server .env. Be warned, the names are slightly different.

---

### Setting up new routes
Remember fetch | route | middleware | queryLibrary. 

### Things to remember
Material.io is your friend.\
Auth0 is incredibly well documented in everything except the thing you're looking for.\
Cors shouldn't be a problem 'in theory'.\

### Warning
.env has been excluded from this gitignore and needs to be re-added back in