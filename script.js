document.getElementById('scrapeButton').addEventListener('click', () => {
  // scrapePage();

  

  chrome.scripting.executeScript({
    target: { tabId: chrome.tabs.getCurrent().id },
    function: scrapePage
  });
  jokeElement.innerHTML = "hello";
});

window.addEventListener("load", windowLoaded, false);

function windowLoaded() {
    alert(document.documentElement.innerHTML);
}

function scrapePage() {
  const innerHTML = document.body.innerHTML;
  fetch('http://localhost:8000/receive-data/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ innerHTML }),
  })
  .then(response => response.json())
  .then(data => {
    const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = "hello";
    console.log(data.message);
  });
}
