(function(){   // higher order function ofr security, you can't invoke this codein browser



console.log("loaded js");

// gifhy api key
var YOUR_API_KEY = 'UXzj72YmDuTPFjK33sbm3QF0xrgCUw0X';


function fetchImages(searchTerm){
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${YOUR_API_KEY}&limit=25`)
        .then(res => {
            let imageEl = document.getElementById('images');
            //console.log(res.data.data[0].title)
            //console.log(res)
            res.data.data.forEach(i => {
                let image = document.createElement('img');
                image.src = (i.images.original.url);
                imageEl.appendChild(image);
            });
        });
};

// fetchImages();

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    let searchTerm = e.target[0].value;
    console.log(e.target)
    fetchImages(searchTerm);
    e.target[0].value = "";
    document.getElementById('images').innerHTML = "";
});

})();
