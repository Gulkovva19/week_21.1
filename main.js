
function onSearch() {
    let gif = document.getElementById("gifsearch").value;

    fetch('https://api.giphy.com/v1/gifs/search?api_key=Qvf9S52TwRjgZhRgCtYHB9Xm1bMAjTj4&q=' + gif + '&limit=1&offset=0&rating=g&lang=e')
        .then(response => response.json())
        .then(gifka => {
            console.log(gifka);
        })
        .catch(error => console.log(error));
}
