"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

async function getRandomImage() {
    const client_id = "Z1q5qNH_EM_NtE8oAJj0w-DRGlxVDT0dj2fT2nWQlL4";
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
    } catch (error) {
        console.error(error)
    }
}

getRandomImage();





const quotes = [
    {
        quote: "It is possible to commit no mistakes and still lose. That is not weakness; that iis life.",
        author: "Captain Picard",
    },

    {
        quote: "I cannot remember the books I've read any more than the meals I have eaten; even so, they have made me.",
        author: "Ralph Waldo Emerson",
    },

    {
        quote: "They don't think it be like it is, but it do.",
        author: "Oscar Gamble",
    }
]

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}

setTimeout(loopThroughQuotes, 3000);