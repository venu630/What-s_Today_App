const urlParams = new URLSearchParams(window.location.search);
const topicName = urlParams.get('topic');
const cardContainer = document.querySelector(".cardContainer");
const topicTitle = document.querySelector(".topicTitle");
const backButton = document.querySelector(".backButton");
const loading = document.querySelector(".loadingAnimation");
const apiKey = '85c40a66663a425887de3fa7052fb9cf'


let cardData = [];


const createNotes = (array) => {

  cardContainer.innerHTML = "";
  array.forEach(cardObj => {
    const { urlToImage, title, url } = cardObj;

    const card = document.createElement("div");
    card.classList.add("card");

    const insideHtml = `<div class="cardBody">
    <div class="newsImage">
      <img
        src="${urlToImage}"
      />
      <div class="newsTitle">
        <a href="${url}"
          >${title}</a
        >
      </div>
    </div>
  </div>`;


    card.innerHTML = insideHtml;
    cardContainer.appendChild(card);
  });

};


createNotes(cardData);



window.addEventListener("load", (event) => {
  event.preventDefault();
  topicTitle.innerHTML = `${topicName}`;
  let topicUrl = `https://newsapi.org/v2/everything?q=${topicName}&apiKey=${apiKey}`


  fetch(topicUrl)
    .then((res) => res.json())
    .then((data) => {
      loading.style.opacity = 0;
      // console.log(data.articles[0].title);
      // console.log(data.articles[0].urlToImage);
      createNotes(data.articles);

    })
    .catch((err) => {
      alert("Error in Fetching Notes! ");
      console.log(err);
    })

});


backButton.addEventListener("click", () => {
  location.href = "./../dashboard/index.html";
});
