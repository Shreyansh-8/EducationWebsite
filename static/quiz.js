let btn = document.getElementById('quizbtn')
btn.addEventListener("click", generate);
function generate() {
    console.log("hello");
    url = "data.json";
    fetch(url)
        .then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        })
}