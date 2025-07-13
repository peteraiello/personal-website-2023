---
title: 'What are semantic HTML elements, and why are they important?'
featured: false
date: '2025-07-13T16:02:01'
external: false
draft: false
tags: []
excerpt: 'I asked Chat GPT to generate a generic list of questions on web development and answered one on semantic HTML'
buttonLink: '/posts/using-chat-gpt-to-ask-me-some-questions-on-semantic-html'
---

I asked Chat GPT to generate a generic list of questions on web development as a jumping-off point to improve my skills and knowledge. The first question it asked was *"What are semantic HTML elements and why are they important?"*. It's an important question to ask and an interesting subject to refine my knowledge on. I had fun drafting the answer to this question and may even turn these blog posts into a future series of blog posts. 

## What are Semantic HTML Elements?

Semantic HTML elements are essentially HTML elements that help describe the content they are housing. When we think about the layout or the structure of a webpage, the fact is that most of the layout elements we use have an equivalent semantic HTML tag. 

For example, the `<footer>` tag can be used to describe the footer section of the website, the `<section>` tag can be used to wrap the individual modules web page consists of and the `<article>` tag can be used to present the content body of the post (check the page source for this blog post).

In most circumstances, the purpose of the HTML tag is clear. They are either literal describers of the layout element or they are abbreviations. An example of this is heading tags to describe headings, i.e. `<h1><h2><h3>`. Sometimes the names are slightly more abstract, for example, `<aside>` to highlight the content of a sidebar. 

In addition to this, some examples of semantic HTML are more niche and used in more specific contexts. For example, `<address>` can be used for a location, or `<time>` can be used wherever you display a time or date. Using inspect element, you might see the `<time>`  tag used to display the published dates of articles and posts. 

```
<p>I started drafting this article on semantic HTML at <time datetime="2025-07-13"> 13th of July, 2025</time></p>
```

### Why is semantic HTML important?

**Semantic HTML tags are essentially just HTML**; however, the alternative to not following the best practices of semantic HTML is to just use generic containers for all your markup. It is possible to build your entire layout using just `span` and `div` elements, but it's ill-advised as these will offer no indication about the content they contain. 

The additional layout information provided through employing correct semantic HTML is helpful for both **search engines** and **accessibility based users**. Search engines rely on a well-structured layout to understand your site. Accessibility users will view websites through devices such as **screen readers**. Having properly structured webpages will help them navigate websites more easily and improve their user experience. 

In summary, semantic HTML are like the underlying structure and basic building blocks of a web. Awareness of semantic HTML for web developers cannot be understated (especially for projects with specific accessibility requirements) and should always be considered regardless of web framework.

For a comprehensive list of HTML tags and their descriptions: [click here](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements).

---

**Last edited: 13th of July, 2025**