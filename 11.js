function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Static search and suggestion data
const searchResults=[
  {title:"Africana hotel", url: "11.html",description:"the africana resort"},
  { title: "Hotel near me", url: "", description: "Get in touch with us." },
  { title: "Hotel affordable in this area", url: "", description: "Get in touch with us." },
  { title: "Hotels in Embu", url: "", description: "Get in touch with us." },
  { title: "Dan Mwangi", url: "", description: "Here is Dan Mwangi" },
  { title: "Dan Mwangi photos", url: "55.html", description: "Here is Dan Mwangi" },
  { title: "Dan Mwangi highschool", url: "44.html", description: "Here is Dan Mwangi" },
  { title: "Dan Mwangi  wife", url: "66.html", description: "Here is Dan Mwangi" },
  { title: "Dan Mwangi education", url: "", description: "Here is Dan Mwangi" },
  { title: "Dan Mwangi networth", url: "", description: "Here is Dan Mwangi" },
  { title: "Dan Mwangi family and siblings", url: "77.html", description: "Here is Dan Mwangi family and siblings" },
];
function showSuggestions() {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const suggestionsContainer = document.getElementById("suggestions");

  suggestionsContainer.innerHTML = "";

  if (query) {
    const matchingSuggestions = searchResults.filter(result => result.title.toLowerCase().includes(query));
    if (matchingSuggestions.length > 0) {
      suggestionsContainer.style.display = "block";
      matchingSuggestions.slice(0, 9).forEach(suggestion => {
        const suggestionDiv = document.createElement("div");
        suggestionDiv.classList.add("suggestion");
        suggestionDiv.textContent = suggestion.title;
        suggestionDiv.onclick = () => displaySingleResult(suggestion.title);
        suggestionsContainer.appendChild(suggestionDiv);
      });
    } else {
      suggestionsContainer.style.display = "none";
    }
  } else {
    suggestionsContainer.style.display = "none";
  }
}

function displaySingleResult(selectedTitle) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  const selectedResult = searchResults.find(result => result.title === selectedTitle);
  if (selectedResult) {
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");

    const title = document.createElement("h3");
    title.textContent = selectedResult.title;

    const urlDiv = document.createElement("div");
    urlDiv.classList.add("result-url");
    const link = document.createElement("a");
    link.href = selectedResult.url;
    link.textContent = selectedResult.url;
    link.target = "_blank";
    urlDiv.appendChild(link);

    const description = document.createElement("p");
    description.textContent = selectedResult.description;

    resultDiv.appendChild(title);
    resultDiv.appendChild(urlDiv);
    resultDiv.appendChild(description);
    resultsContainer.appendChild(resultDiv);
  }

  document.getElementById("suggestions").style.display = "none";
  document.getElementById("search-bar").value = selectedTitle;
}
