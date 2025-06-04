# Youtube Product Architecture

# Before URL

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/edit-user -> Edit User
/delete-user -> Delete User

/watch-video -> Watch Video
/edit-video -> Edit Video
/delete-video -> Delete Video

# After URL (\*RESTful API)

# Global Router

// 인덱스 뒤에 직접 해당 페이지로 이동할 수 있음 - 홈에서 바로 갈 수 있는 페이지

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/edit -> Edit User
/users/delete -> Delete User

/video/watch -> Watch Video
/video/edit -> Edit Video
/video/delete -> Delete Video
/video/comment -> Comment on a video
/video/comment/delete -> Delete a comment of a video

# Pivot(Upgrade) Router

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/:id -> See User
/users/:id/edit -> Edit My Profile
/users/:id/delete -> Delete My Profile
/users/logout -> Logout

/videos/:id -> See Video
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/upload -> Upload Video
