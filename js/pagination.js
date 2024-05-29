document.addEventListener('DOMContentLoaded', function () {
    const articlesPerPage = 10;
    let currentPage = 1;
    const articles = [
        { title: "Article 1", content: "Content for article 1" },
        { title: "Article 2", content: "Content for article 2" },
        { title: "Article 3", content: "Content for article 3" },
        { title: "Article 4", content: "Content for article 4" },
        { title: "Article 5", content: "Content for article 5" },
        { title: "Article 6", content: "Content for article 6" },
        { title: "Article 7", content: "Content for article 7" },
        { title: "Article 8", content: "Content for article 8" },
        { title: "Article 9", content: "Content for article 9" },
        { title: "Article 10", content: "Content for article 10" },
        { title: "Article 11", content: "Content for article 11" },
        { title: "Article 12", content: "Content for article 12" },
        // Add more articles here as needed
    ];

    function displayArticles(page) {
        const start = (page - 1) * articlesPerPage;
        const end = start + articlesPerPage;
        const articlesToDisplay = articles.slice(start, end);

        const articlesContainer = document.getElementById('articles');
        articlesContainer.innerHTML = '';

        articlesToDisplay.forEach(article => {
            const articleElement = document.createElement('article');
            const titleElement = document.createElement('a');
            titleElement.href = "#";
            titleElement.innerText = article.title;
            const contentElement = document.createElement('p');
            contentElement.innerText = article.content;

            articleElement.appendChild(titleElement);
            articleElement.appendChild(contentElement);
            articlesContainer.appendChild(articleElement);
        });

        document.getElementById('pageIndicator').innerText = `Page ${currentPage}`;
        document.getElementById('prevPage').disabled = currentPage === 1;
        document.getElementById('nextPage').disabled = end >= articles.length;
    }

    function changePage(direction) {
        currentPage += direction;
        displayArticles(currentPage);
    }

    // Initial display
    displayArticles(currentPage);
});
