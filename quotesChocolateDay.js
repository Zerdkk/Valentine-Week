const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const chocolateDayQuotes = [
  `You are the sweetest chocolate in the box of my life,
  Adding flavor to every moment,
  Making everything delightful and nice.
  Happy Chocolate Day, my love!`,
  `Just like chocolate melts in the mouth,
  Your love melts my heart.
  Wishing you a very Happy Chocolate Day!`,
  `Life is like a box of chocolates,
  And you are the sweetest one in it.
  Happy Chocolate Day, sweetheart!`,
  `You're as sweet and wonderful as chocolate itself.
   On this Chocolate Day, I just want you to stay happy and keep smiling like you always do.
    Happy Chocolate Day!"`,
  `You are the chocolate to my milk,
  The sweetness to my life.
  Happy Chocolate Day, darling!`,
  `The way you love me is like the best chocolate - it just melts my heart and makes everything better. Happy Chocolate Day, babe!`,
  `Just like chocolate makes everything better,
  Your presence makes my life sweeter.
  Happy Chocolate Day, my love!`,
  `Honestly, your smile beats any chocolate out there. And the way you love me? Nothing compares to that. Happy Chocolate Day, babe!`,
  `You are the reason my life is so sweet,
  Just like chocolate, you make everything complete.
  Happy Chocolate Day, sweetheart!`,
  `Every moment with you is so sweet, and just being able to hold your hand means everything to me. `,
  `Just like chocolate, you are irresistible,
  And your love is simply unforgettable.
  Happy Chocolate Day, my love!`,
  `Your love makes life so much sweeter, and having you by my side is the best gift I could ask for. `,
  `You are the chocolate in my life,
  Making every moment sweet and rife.
  Happy Chocolate Day, darling!`,
  `Every moment with you is so sweet, and just being able to hold your hand means everything to me.`,
  `Just like chocolate, you are my favorite treat,
  And your love makes my life complete.
  Happy Chocolate Day, sweetheart!`
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration.
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;

    // Build quote links from chocolateDayQuotes.
    const quotesNr = chocolateDayQuotes.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=chocolate');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = chocolateDayQuotes[i];
      link.appendChild(para);
      quotesDiv.appendChild(link);
    }

    // Add click listener on each quote to save the chosen quote to localStorage.
    const quoteDivs = document.querySelectorAll(".quote");
    quoteDivs.forEach(quote => {
      quote.addEventListener('click', function (e) {
        const chosenQuote = e.target.innerText;
        localStorage.setItem("chosenQuote", chosenQuote);
      });
    });
  })
  .catch(error => console.error('Error loading config:', error));