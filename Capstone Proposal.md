# Project Title

Rate My Washroom

## Overview

Rate My Washroom is a website for users to explore the accessible washrooms in a certain area, giving them the capability of utilizing a filtration system to find washrooms that fit their needs/preferences (cleanliness, accessibility, handicap-friendly) and browse through reviews from users of the washrooms themselves.

### Problem

While working for Uber Eats for a bit, I found it difficult to find the right place to do my deeds. Certain locations only offered washrooms to customers, while others were almost impossible to navigate to or clean enough to use. While talking to other drivers, I found there a wide spectrum of individuals with similar pain points, even coming to terms that there were others, such as tourists, that found a need for this type of application. With washrooms being needed by every individual, this type of app fit the need of many, and for a variety of reasons.

### User Profile

- Individuals in unfamiliar areas needing to handle their business
    - Delivery drivers looking for an accessible washroom
    - Tourists while exploring a new city 
    - Individuals that want to save the location of a washroom they found enjoyable
    - Those that want to help people avoid dirty, dangerous, and inaccessible washrooms for any other applicable reason
    - In an urgent situation looking for the closest washroom
    - Special considerations may include those with special needs for their washroom (example: physically impaired individuals needing to access washrooms without the usage of stairs)

### Features

- As a user, I want to be able to find the closest washrooms near me
- As a user, I want navigation tips to be able to access these washrooms with ease
- As a user, I want to be able to review washrooms, providing helpful information to other potential users of these washrooms
- As a user, I want to view a list of all washrooms in a certain area that meet my criteria/preferences (cleanliness, accessibility, size, urinal, handicapped friendly, temperature etc.)
- As a user, I want to see the washrooms I've visited in the past and how much I enjoyed them

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client libraries: 
    - react
    - react-router
    - react-router-dom
    - axios
    - sass
    - CORS
    - Dotenv
- Server libraries:
    - Knex
    - Express
    - CORS
    - Dotenv
    - fs
    - UUID

### APIs

Potential: https://opendata.vancouver.ca/explore/dataset/public-washrooms/api/

### Sitemap

- Home Page
- List of washrooms
    - Map of washrooms nearby
- View + Rate Washroom
- Register 
- Login
- Personal washrooms

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

User table: 
- ID
- Username
- Email 
- Password

Washrooms:
- ID
- Washroom Name
- Location

Washroom Reviews: 
- ID
- User ID
- Washroom ID
- Rating

### Endpoints

**GET /washrooms**

- Get washrooms, with an optional "visited" if the user is logged in or not

Parameters:
- longitude: User-provided location as a number
- latitude: User-provided location as a number
- token (optional): JWT used to add "visited" boolean

Response:
```
[
         {
            "name": "Adanac Park",
            "address": "1025 Boundary Road",
            "type": "Public Toilet in Park",
            "location": "East side, fieldhouse",
            "summer_hours": "Dawn to Dusk",
            "winter_hours": "Dawn to Dusk",
            "wheel_access": "No",
            "maintainer": "Parks & Recreation",
            "note": "Caretaker on site",
            "geom": {
                "type": "Feature",
                "geometry": {
                    "coordinates": [
                        -123.024071960319,
                        49.2758809677686
                    ],
                    "type": "Point"
                },
                "properties": {}
            },
            "geo_local_area": "Hastings-Sunrise",
            "primaryind": "1",
            "geo_point_2d": {
                "lon": -123.024071960319,
                "lat": 49.2758809677686
            }
        },
    ...
]
```

**GET /washrooms/:id**

- Get washroom by id, with an optional "userRating" if the user is logged in or not

Parameters:
- id: Washroom id as number
- token (optional):  JWT used to add user rating

Response:
```
[
         {
            "name": "Adanac Park",
            "address": "1025 Boundary Road",
            "type": "Public Toilet in Park",
            "location": "East side, fieldhouse",
            "summer_hours": "Dawn to Dusk",
            "winter_hours": "Dawn to Dusk",
            "wheel_access": "No",
            "maintainer": "Parks & Recreation",
            "note": "Caretaker on site",
            "geom": {
                "type": "Feature",
                "geometry": {
                    "coordinates": [
                        -123.024071960319,
                        49.2758809677686
                    ],
                    "type": "Point"
                },
                "properties": {}
            },
            "geo_local_area": "Hastings-Sunrise",
            "primaryind": "1",
            "geo_point_2d": {
                "lon": -123.024071960319,
                "lat": 49.2758809677686
            }
        },
    ...
]
```

**POST /washrooms/:id/rating**

- Logged in user can add their rating of a café

Parameters:
- id: Washroom id
- token: JWT of the logged in user
- rating: Number Rating out of 5 in 0.5 increments

Response:
```
[
         {
            "name": "Adanac Park",
            "address": "1025 Boundary Road",
            "type": "Public Toilet in Park",
            "location": "East side, fieldhouse",
            "summer_hours": "Dawn to Dusk",
            "winter_hours": "Dawn to Dusk",
            "wheel_access": "No",
            "maintainer": "Parks & Recreation",
            "note": "Caretaker on site",
            "geom": {
                "type": "Feature",
                "geometry": {
                    "coordinates": [
                        -123.024071960319,
                        49.2758809677686
                    ],
                    "type": "Point"
                },
                "properties": {}
            },
            "geo_local_area": "Hastings-Sunrise",
            "primaryind": "1",
            "geo_point_2d": {
                "lon": -123.024071960319,
                "lat": 49.2758809677686
            }
        },
    ...
]
```

**PUT /washrooms/:id/rating**

- Logged in user can update their rating of a washroom

Parameters:
- id: Washroom id
- token: JWT of the logged in user
- rating: Number Rating out of 5 in 0.5 increments

Response:
```
[
         {
            "name": "Adanac Park",
            "address": "1025 Boundary Road",
            "type": "Public Toilet in Park",
            "location": "East side, fieldhouse",
            "summer_hours": "Dawn to Dusk",
            "winter_hours": "Dawn to Dusk",
            "wheel_access": "No",
            "maintainer": "Parks & Recreation",
            "note": "Caretaker on site",
            "geom": {
                "type": "Feature",
                "geometry": {
                    "coordinates": [
                        -123.024071960319,
                        49.2758809677686
                    ],
                    "type": "Point"
                },
                "properties": {}
            },
            "geo_local_area": "Hastings-Sunrise",
            "primaryind": "1",
            "geo_point_2d": {
                "lon": -123.024071960319,
                "lat": 49.2758809677686
            }
        },
    ...
]
```

**POST /users/register**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password

Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /users/login**

- Login a user

Parameters:
- email: User's email
- password: User's provided password

Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

### Auth

- JWT Authorization & Authentication
    - Added as an additional feature after primary features have been implemented
    - Before added, all API requests made with same user id
    - Store JWT in the browser storage and remove when user is logged out
    - Plan to use state to display different components to users whether they are logged in or not

## Roadmap

- Create client
    - React app using create vite (javascript) including routes and mock-pages

- Create server
    - Express folder with simple routing and appropriate responses

- Use Vancouver web API to gather information regarding public washrooms in Vancouver

- Create database and migrations with tables and appropriate information

- Create seeds with api washroom data

- Make appropriate repositories for client and server folders to reflect all commits in progress

- Feature: Home page

- Feature: List washrooms for an area
    - Create frontend page for list of washrooms including a form that indicates where you are. 
    - Store given location in sessionStorage
    - Make axios GET request to API /washrooms endpoint - create appropriate backend endpoint

- Feature: View washroom
    - Create individual washroom page, displaying necesssary information
    -  Make axios GET request to API /washrooms/:id endpoint - create appropriate backend endpoint

- Feature: Rate washroom
    - Create form with inputs that rate individual aspects of the wasroom
    - Make axios POST request to API /ratings - create appropriate backend endpoint

- Feature: Implement JWT tokens
    - Server: Update expected requests / responses on protected endpoints
    - Client: Store JWT in local storage, include JWT on axios calls

- Feature: Create account 
    - Create register account page/modal 
    - Make axios POST request to users/register endpoint

- Feature: Login to account
    - Create account login page/modal 
    - Make axios POST request to users/login endpoint

- Testing & last-minute bug fixes

- Presentations at Demo Day

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.
