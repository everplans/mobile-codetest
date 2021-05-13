# Everplans Mobile Developer Code Test

Instructions for the Everplans mobile developer code test. 

Congrats! You've been invited to complete a take-home code test. We're very excited to see your work!  

This test is an opportunity for the Everplans developer pannel to see a reasonably non-trivial sample of how you write code. Over the years we have found this is a great context for evaluating how you can be an effective member of the team. We prefer this over asking you to solve code problems live, in front of other people--as though it may be an impressive skill in and of itself, it has little bearing on how you'll peform on the job, with our team. 

Please don't feel compelled to complete anything more than the minimum requirements for this test, as we want to be respectful of your time. 


## The Test
* Create a mobile iOS app in the lagnuage/framework of your choice (all things being equal, swift is our preferece) which is the UI/end user experience for a News/Link post clone (a la Hacker News or Reddit). There are specfic UI mocks and instructions included. 

* It's easiest to submit a repo/link of an xCode project which should build and run on the simulator. It is not necessary for this to run on multiple device targets. Just pick a single device target. 

* The app should connect and communicate with the API which is included as a Docker image in this repo. The app should connect to the server locally. See the [README](README.md) for instructions on how to build and run the docker image, and how to interact with the API. 

## Things to keep in mind: 

* Time commitment: This should take an experienced developer only a few hours to complete. If you find it's taking longer and is disruptive to your schedule, please communicate and manage your recruiter's expectations. We can figure something out and work with you. (Your communication skills are part of this test!)

* UI Details: There is a figma link attached that has the specific details of the screens. There are small things like animations, screen transitions, etc.. While you can use some discretion on when to "interpret" what the designs convey, and when to follow it literally, please lead with your best. We really want to see how you build UI interactions. (Ie. If you see 51 pixels, feel free to round to 50) 

## Acceptance Criteria: 
* Use the following link for UI Designs and small details: [Figma](https://www.figma.com/file/iiXrJPDPJVUaeNCWB3YUjQ/Code-Test-Mocks?node-id=0%3A1)

* Complete the following screens: 
  * Signup (Only username and password, not validation requirements for this text)
  * Login (with requisite login/logout functionality)
  * Feed: (see all posted links, upvote, and post) -- see attached API [REAMDE](README.md), for specific details -- but all funtionality must be wired up and working with the API. 

* Session (see [README.md](README.md) for instructions on how to set the authorization headers.

* Tests: We'd like to see how you think about testing, and how you code. We expect to see at least some unit tests, and hopefully more, depending on what you think is necessary. We'll plan on discussing your approach to testing, including unit, UI, and ingegration--in the interview process. Include instructions for running tests.

* Documentation. Please send some context and documentation along with your code. This can take the form of comments, well named methods/modules/variables, readme, or an introduction in the email when you submit.

* Communication: Please keep your recruiter informed of your progress and effectively manage expectations. We understand our candidates are juggling many things, so if things change, do communicate. Also, let our recruiter know when they can expect your submission. And progress report along the way wouldn't hurt. 

* If you are confused or need clarification, or more information, don't be shy! Speak up! Please ask us questions. When in doubt your recruiter can help facilitate who best to speak with. 

* Double check that you've read everything, and have done your work accordingly. Attention to detail matters!

## Gotchas
* You may have to play with adding explicit types to some of the queries, to get it to work with Swift Typing. 
* You may have to enable HTTP plaintext fetches in your Info.plist: (https://stackoverflow.com/questions/31254725/transport-security-has-blocked-a-cleartext-http)


Thanks so much! We apprecaite your time, and can't wait to see your work!