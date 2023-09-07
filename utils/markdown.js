// utils/markdown.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const markdownDirectory = path.join(process.cwd(), 'blogs');

export function getMarkdownFiles() {
  const fileNames = fs.readdirSync(markdownDirectory);
  
  return fileNames.map(fileName => {
    const filePath = path.join(markdownDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    return {
      data,
      content,
    };
  });
}


// utils/markdown.js
// ...

export function getMarkdownFilesSortedByDate() {
  const markdownFiles = getMarkdownFiles();
  
  // Sort the files by date in descending order (most recent first)
  const sortedFiles = markdownFiles.sort((a, b) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    return dateB - dateA;
  });
  
  return sortedFiles;
}
