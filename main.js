
function onSearch() {
    let gif = document.getElementById("gifsearch").value;

    fetch('https://api.giphy.com/v1/gifs/search?api_key=Qvf9S52TwRjgZhRgCtYHB9Xm1bMAjTj4&q=' + gif + '&limit=5&offset=0&rating=g&lang=e')
        .then(response => response.json())
        .then(gifka => {
            const div1 = document.getElementById('div1');
            gifka.data.forEach(element => {
                const div2 = document.createElement('a');
                div2.href = element.url;
                div2.appendChild(document.createTextNode('Посмотреть'));
                console.log(div2);
                div1.appendChild(div2);
                console.log(div1);
            })
        })
        .catch(error => console.log(error));
}
