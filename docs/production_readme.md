# Rezonance

[Rezonance live][heroku]

[heroku]: http://www.rezonance.stream

Rezonance is a full-stack web application inspired by SoundCloud.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend. The use of React/Redux allows for the application to exist as a single page that simply renders new components as the user navigates around the site.  

## Features & Implementation

### Frontend and Backend Authentication

Rezonance allows users to create accounts, as well as being able to enter the site as a guest. Passwords are not saved on the backend, giving user accounts an added level of security. A user must either create and account or use the guest log-in found on the splash page of the application in order to use the rest of the application features.

### Charts (list of songs)

Rezonance is, like SoundCloud, a portal for streaming music. Specifically, the application allows you to do a lot with various different tracks. You can view a list of all of the tracks on the "Charts" page, which also serves as the home page of the application for a user that is logged in. The list of tracks is presented as a carousel, which a user can click through in order to view all of the songs. When hovering over a song with the cursor, the album artwork will be highlighted with a play button, which a user can click in order to start playing the song. Doing so will render the...

### Playback Bar

When a song has been played, a playback bar will render at the bottom of the screen. The component that is visible was created from scratch and includes a play/pause button, the title and album artwork of the track that is playing, and a progress bar to show the user their progress within a given song. However, the actual component that is playing the song is the React Player, which remains hidden. The buttons and features of the visible component are mapped to the React Player, which gets information about song state passed to it as props. The playback bar will only appear when a song is loaded into the React Player. Otherwise, it will remain hidden. Meanwhile, like SoundCloud, the playback bar persists regardless of where a user navigates to within the application. In other words, if a user is playing a song, this process will not be interrupted by navigation throughout the application.

### Song CRUD (create/update/delete)

In addition to viewing and listening to music, a user is able to create, update and delete tracks. Upon creating an account (or logging in as a guest), the user will be presented with an "Upload Track" button at the top of the page. Clicking this button will cause a modal to appear with a form to upload a track. The user then has to input the title of the track as text, followed by uploading a song file and album artwork. These buttons link the application to Cloudinary, a cloud service used to store data (such as song files and images). Cloudinary then generates URLs which get stored in the database and are used in the React Player to achieve song playback. Cloudinary URLs are also used for all images in the application, allowing them to render more quickly as compared with hosting these files on the application itself.

Each song also has an individual page, which can be found by clicking on the title of the song on the "Charts" page. This page has an enlarged album artwork image, which can also be clicked on to achieve playback of the song. The song title is also displayed near the middle of the page, along with the username of the user that uploaded the song (more on this soon). If the user viewing this page is the user that uploaded the song, there will also be buttons to either update or delete the song. If the user clicks on the "update" button, a similar form to the "upload" form will appear, giving the user a chance to change the title, song file, or album artwork. The delete button simply removes the song from the application (frontend and backend).

### Comments

Also present on the individual song page is a section for user comments. A list of comments will be displayed for the song as well as a small form at the bottom of the list where a user can input text for a comment. If the user created any of the comments in the list, a delete button will also be rendered next to that comment, allowing the user to remove his/her comment if so desired. Finally, the user can also see the username of the user that contributed each comment to the page.

### Profile

The last major feature of the application is the existence of profile pages for each user. In order to view one's own profile, simply click on the "Profile" button at the top of the page. The profile page display's the user's profile in addition to all of the tracks that the user has uploaded to the application. However, a user can also see any other user's profile page. You may recall that the individual song page contains the username of the user that uploaded that song. The username displayed there is also a link to that user's profile page, where you can view that user's entire portfolio of uploaded songs.

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project. The next steps for Rezonance are outlined below.

### Search

Searching for songs is a standard feature of SoundCloud. Rezonance should be able to allow a user to search for tracks as well.

### Likes

A user will also have the ability to "like" individual songs, allowing the user to go to his/her profile page to view the songs he/she has liked.

### Playlists

A user will also have the ability to create playlists, which will, in turn, give the user the ability to skip through songs using the playback bar.

### Artist and Album CRUD

Finally, the application will allow users to browse or search through artists and albums, which will also each have individual pages, allowing users to view the songs of a certain artist or album. 
