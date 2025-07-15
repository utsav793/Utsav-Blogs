let isDarkMode = false;

document.getElementById("toggleBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    isDarkMode = !isDarkMode;
});

let likeCount = 0;
document.getElementById("likeBtn").addEventListener("click", () => {
    likeCount++;
    document.getElementById("likeCount").innerText = likeCount;
});

function sharePost() {
    alert("Link copied to clipboard!");
}

function addComment() {
    const comment = document.getElementById("commentInput").value;
    if (comment.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = comment;
        document.getElementById("commentList").appendChild(li);
        document.getElementById("commentInput").value = "";
    }
}

function searchPosts() {
    const input = document.getElementById("searchBox").value.toLowerCase();
    const articles = document.querySelectorAll("article");
    articles.forEach(article => {
        const text = article.innerText.toLowerCase();
        article.style.display = text.includes(input) ? "block" : "none";
    });
}