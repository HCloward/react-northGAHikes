# North GA Hiking Trails React Google Map App Overview
This app was created as a final project for the Udacity Front End Developer Nanodegree program. 
It is a single page application featuring a map of an area I would like to visit. 
I have added functionality to this map including highlighted locations, 
third-party data about those locations and various ways to browse the content.

## Dependencies
I installed and used two npm packages in addition to the npm packages that come with the
create-react-app package including sort-by and escape-string-regexp for the sorting functionality 
used in the filter field.

## Attribution of Data Sources
I pulled my map of North GA from the Google Maps API (https://developers.google.com/maps/documentation/javascript/examples/) 
and I pulled information on the trails from The Hiking Project Data API (https://www.hikingproject.com/data).

## How to run the project
1. Clone the project repo from GitHub.
2. Install all project dependencies with the npm install command in the terminal.
* If you do not have npm installed on your computer you will need to download it from here: https://www.npmjs.com/get-npm
3. Build the app for production by entering the commmand npm run build in the terminal.
* You can run the build in development mode by entering the command npm start, but the service worker will not work.

