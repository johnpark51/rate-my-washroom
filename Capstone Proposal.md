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
  - react-icons
- Server libraries:
  - Knex
  - Express
  - CORS
  - Dotenv
  - fs
  - UUID
  - mysql2

### APIs

Google Maps Javascript API

### Sitemap

- Home Page
- List of washrooms
  - Map of washrooms nearby
- Washroom Washroom
- Location Page

### Mockups

#### Home Page

![](/mockups/home.jpg)

#### Register/Login Page

![](/mockups/register:login.jpg)

#### Washroom Details Page

![](/mockups/individual-washroom.jpg)

#### Location Washrooms Page

![](/mockups/view-location-washrooms.jpg)

### Data

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

**GET api/washrooms**

- Get washrooms

Parameters:

Response:

```
[
         {
        "id": 1,
        "name": "Union",
        "address": "65 Front St W, Toronto, ON",
        "type": "Public restroom",
        "location": "Next to Uncle Tetsu in food court",
        "hours": "8am-10pm",
        "public_access": 1,
        "wheelchair_accessible": 0,
        "cleanliness": 5,
        "location_id": 1,
        "likes": 8,
        "gender_neutral": 0,
        "family_friendly": 1,
        "lat": "43.646830",
        "lng": "-79.378520"
    },
    ...
]
```

**GET api/washrooms/:id**

- Get washroom by id

Parameters:

- id: Washroom id as number

Response:

```
[
         {
        "id": 1,
        "name": "Union",
        "address": "65 Front St W, Toronto, ON",
        "type": "Public restroom",
        "location": "Next to Uncle Tetsu in food court",
        "hours": "8am-10pm",
        "public_access": 1,
        "wheelchair_accessible": 0,
        "cleanliness": 5,
        "location_id": 1,
        "likes": 8,
        "gender_neutral": 0,
        "family_friendly": 1,
        "lat": "43.646830",
        "lng": "-79.378520"
    },
    ...
]

```

**GET api/locations**

- Get Locations

Response:

```
 {
        "id": 1,
        "name": "Union",
        "city": "Toronto",
        "description": "Union Station, located in the heart of Toronto's Financial District, is not only the city's primary transportation hub but also a historical landmark. Built in 1927, its Beaux-Arts architecture and grand concourse evoke a sense of old-world charm. Beyond its role in transit, Union Station is a bustling center for shopping, dining, and cultural events, serving as a gateway to Toronto's waterfront attractions such as the CN Tower and Harbourfront Centre.",
        "image": "https://images.squarespace-cdn.com/content/v1/632d2657021c85460fa766cb/1674832170225-VJ1IHEML0CQQ5VY3NKZN/Interior+6.jpg",
        "lat": "43.645022",
        "lng": "-79.380150",
        "created_at": "2024-07-10T02:49:29.000Z",
        "updated_at": "2024-07-10T02:49:29.000Z"
}
```
**GET api/locations/:id**

- Get location by id

Parameters: 
- id: location id as a number

Response: 
```
 {
        "id": 1,
        "name": "Union",
        "city": "Toronto",
        "description": "Union Station, located in the heart of Toronto's Financial District, is not only the city's primary transportation hub but also a historical landmark. Built in 1927, its Beaux-Arts architecture and grand concourse evoke a sense of old-world charm. Beyond its role in transit, Union Station is a bustling center for shopping, dining, and cultural events, serving as a gateway to Toronto's waterfront attractions such as the CN Tower and Harbourfront Centre.",
        "image": "https://images.squarespace-cdn.com/content/v1/632d2657021c85460fa766cb/1674832170225-VJ1IHEML0CQQ5VY3NKZN/Interior+6.jpg",
        "lat": "43.645022",
        "lng": "-79.380150",
        "created_at": "2024-07-10T02:49:29.000Z",
        "updated_at": "2024-07-10T02:49:29.000Z"
}
```

**GET /reviews**





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
  - Make axios GET request to API /washrooms/:id endpoint - create appropriate backend endpoint

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

- Implement Google Places / Maps
  - View more details about a washroom
  - Visual radius functionality
- Forgot password component/functionality
- Badges for accounts that have given trusty and numerous reviews - possible component that displays more information about them (favourite washroom could be funny(?))
```
