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

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.
