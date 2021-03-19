# News Team App
<img src='https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg' style='height: 350px'>


## Setup

- Fork this repo, then run `git clone` to download your fork locally. Then `cd` into the downloaded directory and open it in your text editor with `code .`.
- Open the `index.html` file on your browser

Here's how we can run our database:

- **TO INSTALL**: run `npm install -g json-server` in your terminal
- **TO START**: run `json-server --watch db.json` in the terminal in the same directory that contains your db.json file. 

________


## Endpoints

Your base URL for your API will be: http://localhost:3000

The endpoints you will need are:

- GET `/articles`
- POST `/articles`
- PATCH `/articles/:id`
- DELETE `/articles/:id`

________


### User Stories:

- User should be able to view all the articles when the page loads. Each article card should look like the HTML below and should be appended as a child to the `div#collection` element.
  
```html
    <div class="card" data-id="{article ID}">
        <div class="img-container">
            <img src="{article image}"
                alt="{article title}" />
            <div class="article-title-container">
                <h4>{article title}</h4>
            </div>
        </div>
        <div class="content">
            <p class='author'>Author: {article author}</p>
            <div class="scroll">
                <p class='description'>{article description}</p>
            </div>
            <p class="react-count">{article likes} likes</p>
            <button class="like-button">♥️ Like</button>
            <button class="delete-button">X</button>
        </div>
    </div>
```
- User should be able to create a new article using the form and see it displayed on the webpage without having to refresh the page. If the user refreshes the page, the article they created should still be shown on the page (it should persist).
- User should be able to click on the delete button to delete an article. This change should persist.
- User should be able to hit the like button and see the likes number for that article increase by 1. The update should persist.
- User should not see any ads.
