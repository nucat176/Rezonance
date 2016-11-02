```js

Root
  -SplashContainer
    -Splash
    -AuthFormContainer
      -AuthForm
  -AppContainer
    -SearchContainer
      -Everything
      -Tracks
      -People
      -Albums
      -Playlists
    -Header
    -Upload
    -HomeContainer
      -Stream
      -Charts
      -Discover
      -WhoToFollow (sidebar)
    -CollectionContainer
      -Overview
      -Likes
      -Playlists
      -Albums
      -Following
      -History
    -ProfileContainer
      -ProfileHeader
      -ProfileInfoContainer
        -All
        -UploadedTracks
        -UploadedAlbums
        -Playlists
        -Reposts
      -ProfileSideBar

Routes

|Path   | Component   |
|-------|-------------|
| "/" | "Splash" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/stream" | "Stream" |
| "/charts" | "Charts" |
| "/discover" | "Discover" |
| "/search" | "Search" |
| "/collection" | "Overview"
| "/profile" | "ProfileContainer" |
| "/upload" | "Upload" |
