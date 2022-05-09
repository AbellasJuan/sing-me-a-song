<h1 align="center">
   🎵 <a href="#"> Sing Me A Song API </a>
</h1>

<h3 align="center">
    Have you ever asked someone for a music recommendation? 
</h3>

<h4 align="center"> 
	 Status: Doing...
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#how-it-works">How It Works</a> • 
 <a href="#pre-requisites">Pre-requisites</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#how-to-contribute">How to contribute</a> • 
</p>


## About

Sing me a song is an API for anomalous music recommendation. The more people like a recommendation, the greater the chance that it will be recommended to others 🙂 .

```

## How It Works

### POST /recommendations

``` jsx
POST /recommendations
```
#### Expected Body

``` jsx
{
  "name": String, required,
  "youtubeLink": String, must be a valid youtube link, required,
}
```

#### Possible Response Status

``` jsx
200: 'OK';
400: 'The request body contains invalid elements';
201: 'Successfully created!';
409: 'Link already registered';
500: 'Server Error'
```

---

### POST /recommendations/:id/upvote

``` jsx
POST /recommendations/:id/upvote
```

#### Expected Body

``` jsx
None
```

#### Possible Response Status

``` jsx
400: 'Id is invalid';
200: 'Successfully updated! +1';
404: 'Recommendation not found';
500: 'Server Error'
```

---

### POST /recommendations/:id/downvote

``` jsx
POST /recommendations/:id/downvote
```

#### Expected Body

``` jsx
None
```

#### Possible Response Status

``` jsx
400: 'Id is invalid';
200: 'Successfully updated! -1';
404: 'Recommendation not found';
500: 'Server Error'
```

---

### GET recommendations/random

``` jsx
GET recommendations/random
```

#### Possible Response Status

``` jsx
400: 'Id is invalid';
200: 'Object with expected body'
404: 'No recommendations yet';
500: 'Server Error'
```

---

### GET recommendations/top/:amount

``` jsx
GET recommendations/top/:amount
```

#### Expect to receive

``` jsx
[
  {
    "id": 1,
    "name": "Chitãozinho E Xororó - Evidências",
    "youtubeLink": "https://www.youtube.com/watch?v=ePjtnSPFWK8&ab_channel=CHXVEVO",
    "score": 250
  },
  {
    "id": 2,
    "name": "Chitãozinho E Xororó ft. Marília Mendonça - Página de Amigos",
    "youtubeLink": "https://www.youtube.com/watch?v=Etvt6Cme8u0&ab_channel=CHXVEVO",
    "score": 220
  },
  {
    "id": 3,
    "name": "Chitãozinho E Xororó - Fio de Cabelo",
    "youtubeLink": "https://www.youtube.com/watch?v=48kf5eG5yeY&ab_channel=ClassicoVEVO",
    "score": 200
  }
]
```

#### Possible Response Status

``` jsx
400: 'Invalid amount';
200: 'Object with expected body'
404: 'No recommendations yet';
500: 'Server Error'
```
---

## Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [VSCode](https://code.visualstudio.com/).

### Running the Backend (server)

``` jsx

// Install the dependencies
$ npm install

// Create a .env.dev file and fill it using your environment variables following the .env.example

// Run the application in development mode
$ ntl -> start:dev

// The server will start at port: 5000

## Tech Stack

The following tools were used in the construction of the project-api:

**Server**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Pg](https://github.com/brianc/node-postgres)**
-   **[DotENV](https://github.com/motdotla/dotenv)**
-   **[Joi](https://github.com/hapijs/joi)**
-   **[Jest](https://github.com/facebook/jest)**
-   **And others...

**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   API Test:  **[Insomnia](https://insomnia.rest/)**

---

## How to contribute

1. Fork the project.
2. Create a new branch with your changes: `git checkout -b feat/myFeatureName`
3. For each feature implemented, make a commit specifying what was done
4. Submit your changes: `git push -u origin feat/myFeatureName`

---
