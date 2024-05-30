const main = document.getElementById('articles-container');
let data; 
let dataLength;

async function getData() {
    const res = await fetch("https://newsdata.io/api/1/news?apikey=pub_4526818af7027a9684474c4dcd9b3dbd49f3b&q=India%20breaking%20news&country=in&language=en&category=crime,other,top")
    const result = await res.json();
    data = result.results;
    dataLength = data.length;
    console.log("\n : data:", data)

    renderUI();
}

getData();

function renderUI() {
    for(let i=0; i<dataLength; i++) {
        const article = document.createElement('article');
        article.innerHTML = `
        <a href="${data[i].link}"  target="_blank"> 
            <div class="article-content">
            <img class="article-image" src="${data[i].image_url}" alt="NEWS IMAGE"/>
                <h1>${data[i].title}</h1>
                <p>${data[i].description}</p>
                 <b> <p class="bottom-paragraph"> Published at: &nbsp ${data[i].pubDate}  </p> </b> 
               </a>
                <p> 
            </div>
        `;
        main.appendChild(article);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const date = new Date();
    const dayOptions = { weekday: 'long' };
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    
    const currentDay = date.toLocaleDateString(undefined, dayOptions);
    const currentDate = date.toLocaleDateString(undefined, dateOptions);
    
    document.getElementById('date-day').textContent = `${currentDate}, ${currentDay}`;
});


  
  