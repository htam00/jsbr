let title = document.getElementsByTagName('title')[0].innerText
let brand = document.querySelector('.brand')
let image = document.querySelector('img')
let text  = document.getElementById('text-warning')
let textError = document.getElementById('text-error')

brand.innerHTML = title;

// fetch image e render page
fetch('https://github.githubassets.com/images/modules/logos_page/Octocat.png')
.then(res => { 
    if(res.ok) {
        res.blob()
        .then(blob => {
            let url = URL.createObjectURL(blob)
            image.src = url
        })
    } else {
        text.innerHTML = 'Network response was not ok';
    }
})
.catch(err => {
    textError.innerHTML = `Error: Problem the an fetch the of image ${err.message}`;
})
