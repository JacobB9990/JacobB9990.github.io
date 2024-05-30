document.addEventListener('DOMContentLoaded', function () {
    const articlesPerPage = 10;
    let currentPage = 1;
    let articles = [];

    async function loadArticles() {
        try {
            const response = await fetch('articles.json');
            if (!response.ok) {
                throw new Error('Failed to fetch articles');
            }
            articles = await response.json();
            console.log("Articles loaded:", articles); // Check if articles are loaded properly
            displayArticles(currentPage);
        } catch (error) {
            console.error('Error loading articles:', error);
        }
    }

    function displayArticles(page) {
        const start = (page - 1) * articlesPerPage;
        const end = start + articlesPerPage;
        const articlesToDisplay = articles.slice(start, end);

        const articlesContainer = document.getElementById('articles');
        articlesContainer.innerHTML = '';

        articlesToDisplay.forEach(article => {
            // Extracting the title, content, and date from each object in the JSON
            const title = article.title;
            const content = article.content;
            const date = new Date(article.date); // Convert string to Date object

            // Create article container
            const articleElement = document.createElement('article');
            articleElement.classList.add('article');

            // Create title element
            const titleElement = document.createElement('a');
            titleElement.classList.add('article-title');
            titleElement.href = "#";
            titleElement.innerText = title; // Using the extracted title

            // Create content element
            const contentElement = document.createElement('p');
            contentElement.classList.add('article-content');
            contentElement.innerText = content; // Using the extracted content

            // Create date element
            const dateElement = document.createElement('p');
            dateElement.classList.add('article-date');
            dateElement.innerText = `Published on: ${date.toLocaleString()}`; // Display formatted date and time

            // Append elements to article container
            articleElement.appendChild(titleElement);
            articleElement.appendChild(contentElement);
            articleElement.appendChild(dateElement);

            // Append article container to articles container
            articlesContainer.appendChild(articleElement);
        });

        document.getElementById('pageIndicator').innerText = `Page ${currentPage}`;
        document.getElementById('prevPage').disabled = currentPage === 1;
        document.getElementById('nextPage').disabled = end >= articles.length;
    }

    window.changePage = function (direction) {
        currentPage += direction;
        displayArticles(currentPage);
    }

    loadArticles();
});
