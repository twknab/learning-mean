This is a custom node.JS module built to serve static files and JS files.

Files must be in the following heiarchies:
  + app.js and staticLoader.js must be in project root directory (myProject)
  + myProject/views (for html files)
  + myProject/static/images (for all .gif, .png, .jpg images only)
  + myProject/static/js (for all .js files)
  + myProject/static/css (for all .css files)
  
Current Bug: Right now there is no built in 404 exception, which can leave open holes that can shut down your server.
This happens when a file is requested that is not there. Instead of a 404 page being delivered, the server breaks.
However at the time, I was unable to figure out a way to accept ANY .html, .css, .gif, .png, .jpg without the 404
continually catching it. Improvements should be made to fix this bug.
