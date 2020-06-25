Overview

This is a React app that uses Redux for state management and follows the MVC framework to address separation of concerns. It works with users and jobs data collected from a back end and data science database.

User Flow

When the user logs in, a post request is sent to the database with credentials gathered from the okta token (first name, last name, and email) to initialize the user object. The back end returns these credentials along with a user id so the user has access to the site. 

Upon successful login the user can search through jobs from data science (minimum requirement is a keyword for a job title or skill with optional city and state parameters) and add tags to them. This saves the jobs to the back end so the user can apply for them, but to do so they must navigate to the tagged view. In this view only the jobs that have been tagged will render. The user can filter jobs by tag in this view and can also add new tags. When the user clicks the apply button, a new tab will open to the job application. The user fills out that job application and returns to the site to confirm that they completed the application. Upon confirmation, the job card is added to the App Dash view.

In the app dash view, there will only be one column for the user (Applied), the user can create more columns as they wish. Once a column is created, the job cards can be dragged and dropped onto that specific column. The site will remember where the user places these cards so they can navigate away from the view and the cards will be placed as the user left them upon return.

The user can also edit their profile. The user can add skills, locations, and user track to their profile in order to aid in their search. The user can type in a city and the form will give suggestions to aid in the user query. The user can also add skills that are pre-populated according to their user track. Doing so gives the data science database parameters to narrow down searches for the user.

When the user is done, they can click the log out button on the nav bar to exit the site.

State Management

The user object is regulated and maintained by the back end database. Back end has full CRUD operations for the user, although the site currently only implements create, read, and edit, so the user cannot currently delete their account. The user object is created when the user first logs into the site, via a post request with their first name, last name, and email. The user id is needed to make most of the requests for user info on back end.

The jobs object is initially grabbed from data science via a get request and saved to back end when the user adds a tag. The user can search for jobs from the data science database via a post request with a search title and optional city/state parameters, but if a city is submitted a state must also be submitted or data science will get errors on their endpoint. This system is ineffient and caused bugs. It would be more efficient if front end made a request to back end for jobs and back end got them from the data science database, however, we did discuss that doing so may sacrifice speed for getting the data, on the other hand doing so would make the job object more consistent since it would only be obtained through the back end database. 

The tags object is currently maintained by front end and should instead be keys on the job object. They currently take a name, color, and the data science id to initialize with a post request to back end. Each id is matched to its specific job through the shared data science id. This is inefficient and best suited for back end to handle

The columns object takes a required name key for cration. It is maintained by both front end and back end. This object should also be integrated into the jobs object. When the user triggers this view, a get request is sent to back end for information on what columns there are and what jobs are on those columns. Currently all applied jobs are mapped to all columns, and then filtered for which job id matches the request obtained from back end. When the user drops a card into a column, a put request is sent to back end with the job id and the column id of the drop event.

The locations object is maintained on front end and should be moved to back end. It is an array filled with objects that contain city and state. The locations object is currently directly accessed by the app.

MVC

In the components, we avoided making direct network requests. Instead, we pass variables from the components into a controller. The controller then passes the variables to services and/or actions/store. If data needed to be modified before use, it was run through functions written in helper files.

Known Issues

When a user first logs in, they are directed to /implicit/callback. They must delete that part of the url and refresh the page to progress to the site.

When a user's okta token expires, the user is not logged out. This triggers a 401 status to any requests to back end and results in some functionality not updating.

On the add tag form when the user clicks submit, it closes out the form and does not submit their tag to back end. The user must click add in order for the tag to be submitted.

When the user confirms that they applied to a job, a table named Applied is created. Unless the user then navigates to App Dash, confirming Apply will create another Applied table for each job that is confirmed. This is because the columns have no data by default and the click event is what creates the first column. This may best be remedied by moving the check to a useEffect and allowing the click event to just handle the job submission. Currently if a user confirms apply, navigates to App Dash and then confirms apply on more jobs the error won't present itself.

In App Dash, when the user drops a card on an invalid target, the card will disapper. The card will be present when the view re-renders, but would be confusing for the user.

In App Dash, the position updating is not consistent. This is primarily due to the fact that there's not currently a way to update state with the drop event, but if the user drops a card into a new column or makes several moves before navigating away, some of that data will be saved. There are no errors with the put request and it is mostly a matter of updating Redux state.

Current User Model

{
    id,
    first_name,
    last_name,
    email,
    profile_image,
    user_track,
    skills,
    cities,
    states
}

Current Jobs Model - BE

{
    id,
    ds_id,
    jobs_id,
    applied,
    archived,
    source_url,
    title,
    company,
    description,
    date_published,
    location_city,
    location_state,
    geo_locat
}

Current Jobs Model - DS

{
    id,
    source_url,
    title,
    company,
    description,
    date_published,
    location_city,
    location_state,
    geo_locat
}