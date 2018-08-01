## API structure

###   xxxxxxx : stand for String

###   Token is given as [x-access-token] in header in request having  (**) after given request

### api/user/create         :POST

   firstname : xxxxxxx
   lastname  : xxxxxxx
   email     : xxxxxxx
   mobile  : xxxxxxx
   password  : xxxxxxx
   location  : xxxxxxx

### api/user        :GET  (ALL user)                                    **

### api/user/:id        :GET/PUT/DELETE  (To get/update/delete user)    **

### api/auth/login     :POST  

   email    : xxxxxxxxxxx
   password : xxxxxxxxxxx

  It gives following data after successfully login
   userid
   name
   token


### /api/blog/create                :POST                                 **

     title       : xxxxxxxxxx
     category    : xxxxxxxxxx
     body        : xxxxxxxxxx
     user_id     : xxxxxxxxxx

### api/blog        :GET  (ALL blog)                              

### api/blog/:id        :GET/PUT/DELETE  (To get/update/delete blog)     **


### api/blog/soldtrue/:id        :/PUT/  (To update sold status blog)     **


### api/blog/soldfalse/:id        :/PUT/  (To update sold status blog)     **

