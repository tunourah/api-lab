let  url = "https://coffee.alexflipnote.dev/random.json"

 
fetch(url)
    .then(response => response.json())
    .then(data => {
        let img = data.file;
        let container = document.getElementById('container');
        container.innerHTML = '';  
        let imgElement = document.createElement('img');
        imgElement.src = img;
        container.appendChild(imgElement);
    }   
    )
 
