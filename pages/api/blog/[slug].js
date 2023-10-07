// pages/api/blog/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'blogs');

export default (req, res) => {
  const { slug } = req.query; // Get the slug from the route parameter

  if (!slug) {
    res.status(400).json({ error: 'Slug is required' });
    return;
  }

  const fileName = `${slug}.md`; // Assuming the blog file is named as slug.md
  const filePath = path.join(blogsDirectory, fileName);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const post = {
      data,
      content,
    };

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ error: 'Blog post not found' });
  }
};
