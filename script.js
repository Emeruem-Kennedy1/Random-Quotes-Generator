const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('quote-author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');



let apiQuotes = []


//loading function
//show loading
function loading() {
    loader.hidden = false
    quoteContainer.hidden = true 
}

//hide loading
function complete() {
    quoteContainer.hidden = false
    loader.hidden = true
}

//show new quote
function newQuote() {
    loading()
    //select a random quote from the array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]

    //check if author feild is blank
    if (quote.author == null) {
        authorText.textContent = 'Unknown'
    } else{
        authorText.textContent = quote.author
    }

    //check the quote length to detemine the styling 
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote')
    } else{
        quoteText.classList.remove('long-quote')
    }
    // set quote, hide loader
    quoteText.textContent = quote.text
    complete()
}

// get quotes from the api
async function getQuotes() {
    loading()
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL)
        apiQuotes = await response.json()
        newQuote();
        // console.log(apiQuotes)
    } catch (error) {
        // this is for error handling
        console.log('There is an api error')
        getQuotes()
        
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')//open the twitter window in a new tab
}

// event listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

// onload
getQuotes()