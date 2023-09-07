// pages/api/blog.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'blogs');

export default (req, res) => {
  const fileNames = fs.readdirSync(blogsDirectory);

  const blogs = fileNames.map((fileName) => {
    const filePath = path.join(blogsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      data,
      content,
    };
  });

  // Sort blogs by date here if needed

  res.status(200).json(blogs);
};