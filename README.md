# book_app

Heroku Deployment: https://aa-mk-booklist.herokuapp.com

Number and name of feature: _Feature 1: Server-side rendering_______________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____

Number and name of feature: ________________________________

### Feature 1: Server-side rendering

#### Why are we implementing this feature?

- As a user, I want my application to load quickly so that I have an enjoyable experience.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the index should load without a flash of unstyled content (FOUC)  

#### How are we implementing it?

- Create a basic `server.js` file. Make sure your server is listening for connections on a `PORT`. Remember to set the view engine and serve your static CSS files.
- Install any necessary NPM packages and ensure that they are documented as dependencies in your `package.json`.
- For server-side rendering, EJS looks for a folder called `views`. Create a `views` folder, with a `pages` subfolder. Within this subfolder, create a file called `index.ejs`. 
  - Note: with server-side rendering, `index.ejs` is analogous to the typical `index.html` file that you are used to, but will also allow EJS syntax for templating.
- Create a basic HTML scaffold in your `index.ejs` file which contains several elements that you can view in the browser, such as a heading element that says "Hello World". Also create a basic CSS file with several rules, such as an obvious background color. These will serve as our "proof of life" that the files are connected as expected, both locally and when deployed.
- For testing purposes, include a temporary route such as `app.get('/hello')` and render your `index.ejs` file. Turn on your server and validate that the HTML elements and basic CSS styles are being rendered as expected. This route will be useful in the future if you ever need to test your application without relying on data from a database.

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____

### Feature 2: Search the Google Books API

#### Why are we implementing this feature?

- As a user, I want to search the Google Books API so that I can view the results of my search.

#### What are we going to implement?

Given that the user enters a seach query  
When the user submits the search form  
Then the search query should be included in a request to the Google Books API  

#### How are we implementing it?

- In your `index.ejs` file, create a search field. Add the ability for a user to indicate if they are searching by title or author, as demonstrated in class.
- This form should be displayed to the user on page load, so your corresponding endpoint should be `/`, the home route.

Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____

### Feature 3: Display search results

#### Why are we implementing this feature?

- As a user, I want to be able to browse the search results.

#### What are we going to implement?

Given that the user enters a seach query  
When the user submits the search form  
Then the first ten books should be displayed to the user   

#### How are we implementing it?

- Create a Book constructor function to model your data, based on the properties needed to build out the wireframes. The properties should utilize ternary operators or short circuit evaluation to include default values, in case the API does not return results for a given property.
- Install and require the `superagent` package from NPM; validate that it's listed as a dependency in your `package.json`.
- Add a route handler for a `POST` request to `/searches`. This route's callback will use Superagent to proxy a request to the Google Books API and return a list of ten books that match the search query.
  - Map over the array of results, creating a new Book instance from each result object. 
  - Render the newly constructed array of objects in a new view, such as `searches/show`.

Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____

### Feature 4: Error handling

#### Why are we implementing this feature?

- As a user, I want to view any error messages that occur during the usage of my book list application so that I know if something has gone wrong.

#### What are we going to implement?

Given that the application is not functioning properly  
When an error occurs  
Then the user should receive feedback that something has gone wrong  

#### How are we implementing it?

- Create an error view and render this view any time an error occurs.

Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____

### Feature 5: Style the book application

#### Why are we implementing this feature?

- As a user, I want a simple, clean looking UI so that my application is easy to navigate.

#### What are we going to implement?

Given that users access the application on multiple platforms  
When the user views the application  
Then the interface should deliver CSS to the browser

#### How are we implementing it?

- Employ CSS in a folder called `public` in your server heirarchy
- Ensure the proper use of SMACCS principles. You and your partner(s) may choose to use float-based layout, grid-based layout, Flexbox, or a combination of these.
- Style your site using a mobile-first approach. Make sure your site is responsive. 
- Use the provided wireframes as your guide for the layout and base styling. Add your own personal taste and color palette.
- Using the `express` static mechanism, point the static root at the public folder
- Link your CSS files so that they properly load into the browser

Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____

Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____