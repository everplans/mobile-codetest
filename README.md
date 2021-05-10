# News Clone graphQL API
This codebase is a trivial GraphQL based API that emulates a news clone (similar to Hackernews or Redit). 

See the CODETEST.MD file for instructions on the larger code test. 

This readme is all about the API, how to get it running, and the details of how to use the api. 

## How to run it: 

* Download/Install [docker desktop](https://www.docker.com/products/docker-desktop). 

* Clone the repo to a local directory, and `cd` into that directory

* Build the image: 
```
docker build -t ep-mobile-codetest .
```

* Run the image: 
```
docker run -p 4000:4000 ep-mobile-codetest
```

* Browse the GraphQL Playground at: `http://localhost:4000/`


## API Stuff

Data model: 

* `links` which have a `url`, `description`, `createdAt` and a `posted by` which is linked to 
* `users` which have an `email`, `password`, and `name`. 
* `links` have a `vote` field which is a count of the number of upvotes a link has been given. For simplicity you can upvote links as many times as you want (feel free to add constraints if you wish, but it is certainly not required).

API/App Constraints: 
* Users are used for authentication. (see login/signup mutations below)
* You must be logged in to post a link, and upvote a link. 
* You can view the feed either unauthenticated, or authenticated.
* Auth is powered by JWT tokens.  (See below for how to form the header for a logged in user).
* createdAt dates are in ISO 8601 format. (You should adjust for users's current timezone in the app.)

### Authenticaition:
This codebase uses a very naive implemenation of JWT tokens. Use the `signup` and `login` queries (examples below) to create users and JWT tokens. The following http header is required to post links: 

```
{ 
  "Authorization": "Bearer __TOKEN__"
}
```

### Example Queries: 

* Signup: 
```
mutation {
  signup(name: "Applicant", email: "applicant@sample.io", password: "secret super secret") {
    token
    user {
      id
    }
  }
}
```

* Login: 
```
mutation {
  login(email: "applicant@sample.io", password: "secret super secret") {
    token
    user {
      email
      links {
        url
        description
      }
    }
  }
}
```

* Post a link: 
(Note that the createdAt date is created by the server)
```
mutation {
  post(url:"http://hello.com", description:"bla bla bla") {
    id
  }
}
```
* Fetch the feed: 
```
query {
  feed {
    url
    description
    votes
    createdAt
    postedBy {
      name
    }
  }
}
```
* Upvote a link: 
```
mutation {
 upvote(id: 1) {
  	id
  	votes
	}
}
```

## Misc Stuff That can be Helpful. 
### _Possibly_ Useful Commands
(If you are running the Docker image "out of the box", you don't necessarily need any of these)

* Run primsa studio, the interactive SQL admin interface: `> npx prisma studio`
* Regenerage prisma client based on migrations: `> npx prisma bla bla bla`

