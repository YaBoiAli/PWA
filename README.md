# Text Editor Web Application

This is a web-based text editor application with various features. It allows you to edit and save text content using IndexedDB, bundle JavaScript files with Webpack, and utilize a service worker for offline capabilities. The application is also deployable to Heroku.

## Folder Structure

When you open this application in your code editor, you'll see the following folder structure:

- `client-server/`
    - `server.js`
- `public/`
    - `index.html`
    - `service-worker.js`
    - `manifest.json`
    - `assets/` (static assets)
- `src/`
    - `js/` (JavaScript files)

## Getting Started

1. Make sure you have Node.js installed on your system.

2. Open your terminal and navigate to the root directory of the application.

3. Run the following command to start the application:

   ```bash
   npm run start

4. This will start the backend server and serve the client.

5. Open the text editor in your web browser. You should be able to see the text editor without any errors.

## Webpack Bundling
When you run the application, your JavaScript files will be bundled using Webpack. This will generate an HTML file, service worker, and a manifest file in the public directory.

## IndexedDB Integration
When you open the text editor, IndexedDB will immediately create a database storage.

Enter content and subsequently click off the DOM window, and the content will be saved with IndexedDB.

If you reopen the text editor after closing it, the content will be retrieved from IndexedDB.

## Installation
Click on the "Install" button in your browser to download the web application as an icon on your desktop.

When you load the web application, a registered service worker using Workbox will enable offline capabilities.

Static assets are pre-cached upon loading, along with subsequent pages and static assets.

## Deployment to Heroku
To deploy this application to Heroku, ensure you have proper build scripts for a Webpack application. You can deploy the application to Heroku by following the Heroku deployment guide.

## Live Demo
You can access a live demo of this application on Heroku: [Text Editor Web Application](https://sleepy-eyrie-91915-d97e8d8e4249.herokuapp.com/).

Enjoy using the Text Editor Web Application!

