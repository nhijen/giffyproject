
function giffer(searchTerm) {
    event.preventDefault()
    // console.log(searchTerm)
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&rating=g&api_key=blTjxqQz6iVIe9zt8spbGIs4kR9Q9Kie`)
        .then(r => r.json())
        .then(({data}) => { 
            document.querySelector('#gifDiv').innerHTML = ''
            data.forEach(gif => {              
                const url = gif.images.fixed_height.url
                // console.log(url)
                let gifElem = document.createElement('img')
                gifElem.setAttribute('src', url)
                document.querySelector('#gifDiv').append(gifElem)
            })
        })
        .catch(e => console.error(e))
}

function search() {
    // console.log('hello')
    let userSearch = document.getElementById('userInput').value 
    // console.log(userSearch)
    giffer(userSearch)
    createButton()

}

function createButton() {
    let userSearch = document.getElementById('userInput').value 
    let newButton = document.createElement('button')
    newButton.innerHTML = userSearch
    newButton.onclick = function() {
        giffer(userSearch)
    }
    document.getElementById('btnDiv').append(newButton)

}