// utils/markdown.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getMarkdownFiles() {
  const markdownDirectory = path.join(process.cwd(), 'content');
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
