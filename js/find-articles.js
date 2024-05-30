const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it')();

// Function to read files recursively
function readFiles(dir) {
    const files = fs.readdirSync(dir);
    const articles = []; // Array to store article data

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            readFiles(filePath); // Recursive call for subdirectories
        } else if (stats.isFile() && path.extname(file) === '.md') {
            // Read file content
            const markdownContent = fs.readFileSync(filePath, 'utf8');

            // Parse Markdown content
            const htmlContent = markdownIt.render(markdownContent);

            // Extract filename without extension
            const fileName = path.parse(file).name;

            // Get file creation date and time in UTC
            const fileStats = fs.statSync(filePath);
            let fileDate = fileStats.birthtime;

            // Convert to UTC-4
            fileDate.setHours(fileDate.getHours() - 4);

            // Add article object to articles array with title, content, and date under the "date" key
            articles.push({ title: fileName, content: markdownContent, date: fileDate });
        }
    });

    // Write articles data to JSON file
    const articlesFilePath = path.join(__dirname, '..', 'articles.json'); // Adjust the path to the parent directory
    fs.writeFileSync(articlesFilePath, JSON.stringify(articles, null, 2), 'utf8');
    console.log('Articles data has been written to articles.json');
}

// Start reading files from the parent directory
const articlesDirectory = path.join(__dirname, '..', 'articles'); // Adjust the path to the parent directory
readFiles(articlesDirectory);
