import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join, extname, parse, dirname } from 'path';
import { fileURLToPath } from 'url';
import MarkdownIt from 'markdown-it';

const markdownIt = MarkdownIt(); // Initialize the markdown-it instance

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to read files recursively
function readFiles(dir) {
    const files = readdirSync(dir);
    const articles = []; // Array to store article data

    files.forEach(file => {
        const filePath = join(dir, file);
        const stats = statSync(filePath);

        if (stats.isDirectory()) {
            readFiles(filePath); // Recursive call for subdirectories
        } else if (stats.isFile() && extname(file) === '.md') {
            // Read file content
            const markdownContent = readFileSync(filePath, 'utf8');

            // Parse Markdown content
            const htmlContent = markdownIt.render(markdownContent);

            // Extract filename without extension
            const fileName = parse(file).name;

            // Get file creation date and time in UTC
            const fileStats = statSync(filePath);
            let fileDate = fileStats.birthtime;

            // Convert to UTC-4
            fileDate.setHours(fileDate.getHours() - 4);

            // Add article object to articles array with title, content, and date under the "date" key
            articles.push({ title: fileName, content: markdownContent, date: fileDate });
        }
    });

    // Write articles data to JSON file
    const articlesFilePath = join(__dirname, '..', 'articles.json'); // Adjust the path to the parent directory
    writeFileSync(articlesFilePath, JSON.stringify(articles, null, 2), 'utf8');
    console.log('Articles data has been written to articles.json');
}

// Start reading files from the parent directory
const articlesDirectory = join(__dirname, '..', 'articlesMD'); // Adjust the path to the parent directory
readFiles(articlesDirectory);
