const collection = document.getElementsByClassName('course-col');

for(let i =0; i<collection.length; i++){
    collection[i].addEventListener('click', () => {location.href="http://localhost/project/form.html";})
}