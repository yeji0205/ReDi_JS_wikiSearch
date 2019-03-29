
let inputElement = document.getElementById("wiki");
let resultListElement = document.getElementById("resultList");
let APIUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=";


async function getSeach() {
    let input = inputElement.value;
    let requestURL = APIUrl + encodeURIComponent(input);

    let res = await fetch(requestURL);
    let reply = await res.json();
    let searchResults = reply.query.search;

    console.log(reply);
    render(searchResults);
}

function render(searchResults) {
    resultListElement.innerHTML = "";
    for (let result of searchResults) {
        let li = document.createElement("li");
        // li.textContent = result.title;
        resultListElement.appendChild(li);

        let anchor = document.createElement('a');
        anchor.textContent = result.title;
        let pageLink = "https://en.wikipedia.org/wiki/" + encodeURIComponent(result.title);
       
        anchor.href = pageLink;
        anchor.target ="_blank";
        li.appendChild(anchor);

        let div = document.createElement('div');
        div.innerHTML = result.snippet;
        li.appendChild(div);

        // let iframe = document.createElement('iframe');
        // iframe.src = pageLink;

        // let div = document.createElement('div'); 
        // div.appendChild(iframe);
        // li.appendChild(div);
    }
}
