---
title: 'What is the role of ARIA in web accessibility?'
featured: false
date: '2025-07-27T17:47:00'
lastEdited: '2025-08-04T09:00:00'
external: false
draft: false
tags: [HTML, Accessibility, ARIA]
excerpt: 'In this blog post, I will look at the importance of ARIA in web accessibility with a focus on ARIA roles.'
buttonLink: '/posts/what-is-the-role-of-aria-in-web-accessibility'
---

Continuing the series of getting Chat GPT to ask questions about web development, this blog post will look at ARIA and why it's important to web accessibility. The first thing we need to know about ARIA is that it stands for **Accessible Rich Internet Applications** and is a technical specification created by W3C (World Wide Web Consortium) to make websites and other applications easier to use for people with disabilities.

As developers, we have a tendency to get caught up in how a website looks and neglect other user groups, such as those with visual impairments. 

On this note, writing this post is intended to help me understand more about building inclusive interfaces and possibly even help educate others. 

Along with knowing what ARIA means, it's also important to know that it comes in different forms (the main focus of this blog post will be on ARIA roles): 

- **Roles**: describe the purpose of an element, i.e. "navigation". Their purpose is similar to semantic HTML. 
- **States**: The condition of an element, i.e. "disabled", "expanded", which can be useful when developing interactive UI. 
- **Properties**: Provide more context. For example, `aria-label` and `aria-labelledby`. For example, we can add an `aria-label` attribute to a button, as a description of what it will do. 

### Why is ARIA important to accessibility?

One of the best descriptions of why ARIA is so important to web accessibility can be found in Chapter Two of the book *Practical Web Inclusion and* Accessibility by Ashley Firth:

> If you were to navigate around a site comprised solely of `<div>` tags, you'd simply hear a screen reader read out the content, without helpfully signposting what part of the page you're on.

Expanding on this idea, most of us are aware that the structure of a webpage is normally organised using visual design. However, if you were to turn off CSS, you would no longer see these styles applied, and you would gain insight into some of the challenges that visually impaired users face. In addition to semantic HTML, ARIA can also be applied to help solve this issue. 

### What are ARIA roles?

There are multiple types of ARIA roles. Widget roles are for interactivity, whereas landmark roles are for structure. Landmark roles are very similar to semantic HTML in that they both help describe the content of the section. However, there are a few things to be aware of when using them, which we'll discuss in this blog post.  

#### Examples of landmark Roles and when to use them

Landmark roles help provide context for what the section can be used for. Some ARIA roles include "banner", "navigation", "search", "contentinfo" and "main". If "navigation" was applied to an element, then we would be forgiven for expecting a group of links. Here are more examples of how we might use landmark roles in our markup. 

```html
<div role="complementary"></div><!-- Sidebar section-->
<div role="banner"></div><!-- Header section -->
<div role="contentinfo"></div><!-- Footer section-->
<div role="navigation"></div><!--Navigation section-->
```

#### Implicit mapping of HTML elements

Be aware that you don't have to add ARIA roles to all your markup. The reason for this is something known as *implicit mapping*, where the roles for semantic elements are added automatically. With this in mind, it's considered best practice to use the appropriate HTML tag, rather than apply its landmark equivalent. 

```html
<!-- Example 1. Just a plain ol' div -->
<div><!-- Nav markup --></div>
<!-- Example 2. ARIA role applied -->
<div role="navigation"><!-- Nav markup --></div>
<!-- Example 3. Semantic HTML tag and ARIA role -->
<nav role="navigation"><!-- Nav markup --></nav>
<!-- Example 4. Best practice -->
<nav><!-- Nav markup --></nav>
```

### Widget roles and interaction

In addition to landmark roles, which help separate the sections of content, there are also *widget roles*, which refer to different UI elements and their components. Take a look at this example, for a tabbed interface using generic markup:

```html
<div>
	<button>Learn more about Accessibility</button>
	<button>Learn more about Web Sustainability</button>
	<button>Learn more about React</button>
</div>
```

In the example below, we're applying ARIA widget roles. Using these, we can dramatically enhance the markup and help screen readers distinguish it between a random group of buttons and tabbed UI. 

It's worth taking a look at [W3C's](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) (World Wide Web Consortium) documentation for different design patterns. 

```html
<div role="tablist">
	<button role="tab">Learn more about Accessibility </button>
	<button role="tab">Learn more about Web Sustainability</button>
	<button role="tab">Learn more about Artificial Intelligence</button>
</div>
```

### Conclusion and note of caution 

In conclusion, ARIA is a technical specification to help make web applications more accessible. ARIA roles, like other ARIA attributes, should be used sparingly. ARIA roles can also help with interaction, as in the case of Tabs and other UI. It's best to refer to the W3C documentation spec for each pattern.

The last note on using ARIA is a word of caution. When developers change the default role of an element, this is known as *overriding the role*. 

```html
<nav role="button"></nav>
```

In the example above, we're applying a role of "button" to a nav element, essentially overriding the ARIA role. Perhaps we intended for the nav to open a responsive burger menu? However, the effect on the user experiencing the website through a screen reader will be confusion. ARIA misuse of this kind should always be avoided. 

In the next article, we'll dig deeper into those other ARIA attributes, properties and states, with practical examples of where to apply them. 