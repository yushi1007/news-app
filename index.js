// Write your JS here


function allNewsArticles() {
    fetch('http://localhost:3000/articles')
        .then(response => response.json())
        .then(newsArticles => {
            newsArticles.forEach(article => {
                newsArticle(article)
            })
        })
}




function newsArticle(newsObject) {
    const div = document.createElement('div')
    div.classList.add('card')
    div.dataset.id = newsObject.id

    div.innerHTML = 
            `<div class="img-container">
                <img src="${newsObject.image}"
                    alt="${newsObject.title}" />
                <div class="article-title-container">
                    <h4>${newsObject.title}</h4>
                </div>
            </div>
            <div class="content">
                <p class='author'>Author: ${newsObject.author}</p>
                <div class="scroll">
                    <p class='description'>${newsObject.description}</p>
                </div>
                <p class="react-count">${newsObject.likes} likes</p>
                <button class="like-button">♥️ Like</button>
                <button class="delete-button">X</button>
            </div>`

            const newsCollection = document.querySelector('div#collection')
            newsCollection.append(div)
}
allNewsArticles()

const form = document.querySelector('form#article-form')
form.addEventListener('submit', e => {
    e.preventDefault()

    const title = e.target[0].value
    const author = e.target[1].value
    const description = e.target[2].value
    const image = e.target[3].value

    const newArticleObject = {
        title,
        author,
        description,
        image,
        likes: 0
    }

    fetch('http://localhost:3000/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newArticleObject)
    })
        .then(response => response.json())
        .then(newArticle => {
            newsArticle(newArticle)
        })
        form.reset()
})

const newsCollection = document.querySelector('div#collection')

    newsCollection.addEventListener('click', e => {

        if (e.target.matches('button.delete-button')) {

            const card = e.target.closest('div.card')

        fetch(`http://localhost:3000/articles/${card.dataset.id}`, {
            method: 'DELETE'
        })
            card.remove()
        }

        else if (e.target.matches('button.like-button')) {
            const card = e.target.closest('div.card')
            const likesPTag = e.target.previousElementSibling
            const likesNum = parseInt(likesPTag.textContent) + 1

            likesPTag.textContent = `${likesNum} Likes`

            fetch(`http://localhost:3000/articles/${card.dataset.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ likes: likesNum })
            })
                .then(response => response.json())
                .then(data => console.log(data))
        }
    })

    const ad = document.querySelector('div.ad')
    ad.remove()