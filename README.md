# [myFB](https://my-forest-buddies.herokuapp.com/)

myFB is a clone of the social media app Facebook, allowing users to 
* create and edit profiles
* make, accept, and delete friend requests
* create, update, and delete posts on walls
* create, update, and delete comments on posts
* see the posts created by friends in a news feed
* like posts and comments 

## Technologies used
* Ruby on Rails
* React and Redux
* PostgreSQL
* AWS S3
* Heroku

## Features
### Profiles
Users can update their biographies, where they work and where they went to school.

### Posts
Users can create, update, and delete posts on walls.

<img src="https://user-images.githubusercontent.com/80478925/125618052-6eea5bc1-d3f0-4c85-8a35-d5a26d12cac8.gif" width="50%">

### Comments
Users can create, update, and delete comments on posts.

<img src="https://user-images.githubusercontent.com/80478925/125617684-6f7d013d-c81f-49e0-ab35-daaa996701d8.gif" width="50%">

### Likes
Users can create and remove likes on posts and comments.

<img src="https://user-images.githubusercontent.com/80478925/125618002-4c1b15cc-a990-4d31-b15e-d2bb7a396aa5.gif" width="50%">

### Friending

Friendship is modeled as two `connection` objects between two users. A `connection` represents a arrow directing from one user to another. When both directions have the status of `ACCEPTED`, the friendship is established. When a user initates a friend request, a `connection` object with a pending status is created pointing from the requestor to the requestee. If there already exits a `connection` in the opposite direction, a complete cycle is created and both `connection` are flagged as `ACCEPTED` and a friendship is established. Otherwise, a single direction `connection` is counted as an pending request.

```
def create
  from_user_id, to_user_id = params.values_at(:from_user_id, :to_user_id)
  unless current_user.id == params[:from_user_id]
    forward = Connection.create(from_user_id: from_user_id, to_user_id: to_user_id, status: Connection::PENDING)
    backward = Connection.find_by(from_user_id: to_user_id, to_user_id: from_user_id)
    unless backward.nil?
      backward.status = Connection::ACCEPTED
      backward.save!
      forward.status = Connection::ACCEPTED
    end
    forward.save!
  end
end
```
