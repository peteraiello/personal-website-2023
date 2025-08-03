---
title: 'What is the role of ARIA in web accessibility? Part 2 - Properties'
featured: false
date: '2025-08-03T12:00:00'
external: false
draft: false
tags: [HTML, Accessibility, ARIA]
excerpt: 'Continuing on the series on ARIA, this post takes a look at property attributes'
buttonLink: '/posts/what-is-the-role-of-aria-in-web-accessibility-part-2'
---

I will continue my analysis of the role of ARIA in web accessibility in this blog post. In the last post, I focused on ARIA roles, including their similarities and differences to semantic HTML, as well as their multiple categories ("landmarks" and "widgets"). In part 2 of this series on the topic of ARIA, I'll focus on a new category of ARIA attributes, known as **ARIA properties**. I will examine common ARIA attributes that fall into the category of ARIA properties, as well as their uses in the form of practical examples. My aim is the same as previous posts: to educate myself on modern accessible standards and share this knowledge with other developers.

### What are ARIA Properties?

ARIA properties and states are additional ARIA attributes. They can be applied to your markup to make your webpage more accessible (in particular for screen readers). ARIA properties provide more context for an element or an event. A basic example is this:

```
<button aria-label="Click the button to submit form">Click here</button>
```

With the addition of the `aria-label` attribute (an ARIA property), it's clear to see the action performed by clicking the button.

ARIA states are similar to ARIA properties; however, they provide more granular information about the component. For example, an aria state value can be applied to see the status of a button.

```
<button aria-expanded="true">Toggle button</button>
```

In the example above, we can see that the current state of the toggle button is set to expanded (open).

One key difference between states and properties is that states are associated with being dynamic, which means they can change value based on interactions, whereas properties tend to be fixed (stay the same).

<table>
<tr>
<th>Name</th>
<th>Description</th>
<th>Examples</th>
<th>Fixed / Dynamic</th>
</tr>
<tr>
<td>Roles</td>
<td>Predefined attributes that help identify what an element is used for. Come in multiple categories, i.e. landmark roles and widget roles.</td>
<td><code>role="header"</code> <code>role="navigation"</code> <code>role="tablist"</code></td>
<td>Tendency to be fixed</td>
</tr>
<tr>
<td>States</td>
<td>Attributes that provide granular information on the state of a component and its subparts, i.e. if an accordion element is open, or a tab is active.</td>
<td><code>aria-selected="false"</code>, <code>aria-selected="true"</code> <code>aria-disabled="false"</code></td>
<td>Dynamic, based on user interaction</td>
</tr>
<tr>
<td>Properties</td>
<td>Help indicate the result of an action or provide additional context for the purpose of an purpose.</td>
<td><code>aria-label="Click here to submit form"</code> <code>aria-labelledby="section-title-3"</code></td>
<td>Tendency to be fixed</td>
</tr>
</table>
 
  
Firstly, let's consider one of the most essential attributes of ARIA properties: `aria-label`. `aria-label` is a text-based attribute that can be used for descriptions of an element, including any actions that it may perform. It can be applied to many different interactive and form-based HTML elements, including links, buttons, inputs and iFrames. There are also a few elements which would be invalid to use with an `aria-label`, including strong tags and code blocks.

**Example: Social media icons with no text**

```
<ul>
<li><a href="www.facebook.com/profile123" target="_blank" aria-label="Click to view our Facebook profile"><span id="facebook-icon"></span></a></li>
<li><a href="www.linkedin.com/profile123" target="_blank" aria-label="Click to view our LinkedIn profile"><span id="linkedin-icon"/></span></a></li>
<li><a href="www.instagram.com/profile123" target="_blank" aria-label="Click to view our Instagram profile"><span id="instagram-icon" /></span></a></li>
</ul>
```

In this example, the link text for the social media icons is missing, so there would normally be no means of seeing the action performed by clicking them. However, by applying an `aria-label` to each icon, we can describe this action, making the site a lot easier to navigate.
  
`aria-label` can also to be applied to form elements. Most developers are aware that to create a valid HTML form, you need to provide labels for each form element. However, you can also use an `aria-label` individually.

**Example of a form that uses `aria-label` on its inputs:**

```
<form>
<input type="tel" id="phone-number" aria-label="Enter your phone number" />
<input type="email" id="signup" aria-label="Enter your email" />
<button>Submit</button>
</form>
```

A note of caution on using `aria-label`: always prioritise semantic markup over additional ARIA attributes. For example:
1. Don't use an `aria-label` on an image if alt text is available.
2. Use HTML labels instead of `aria-label` on form elements, if you can.
3. If possible, use link and button text instead of `aria-label`.
### A Note on "ARIA Labelledby"

`aria-labelledby` is another ARIA attribute which falls under the category of an ARIA property. It's very similar to "label" in that its purpose is to provide more context to an element via a description. However, it differs in its variation and priorities. It's essentially used when some pre-existing text is suitable as the accessible text for an element.

**Example of using a heading tag as the accessible text**

```
<h1 id="sect-title">Read more about polar bears in the Arctic</h1>
<button aria-labelledby="sect-title">Click here</button>
```

In the example above, the section title is applied to the button, which describes the action (i.e. a link to an article to read more about polar bears). There's no need to create a new bespoke label, as the title is more than sufficient. In this case scenario, using the title for the accessible text of the button is considered best practice. Note that you can also concatenate the accessible text through a combination of IDs.

**Example of combining multiple IDs:**

```
<h1 id="sect-title">Read more about the Arctic's deadliest creatures</h1>
<h2 id="subtitle">Polar Bears</h2>
<button aria-labelledby="subtitle sect-title">Click here</button>
```

Expected output for screen readers: "Read more about the Arctic's deadliest creatures Polar Bears".

One last point about `aria-labelledby`: it takes priority over all other options. For example, let's say you have an image that provides alt text, an ARIA label attribute and also an `aria-labelledby` attribute. The accessible text for the image will always be the `aria-labelledby` text!

```
<h3 id="sect-title">A polar bear with a white coat, sitting at the waters edge</h3>
<img alt="A polar bear at the edge of the water" aria-label="A polar bear sitting at the edge of the water" aria-labelledby="sect-title" />
```

Expected accessible text for image: A polar bear with a white coat, sitting at the water's edge.
### Conclusion and next blog post

In conclusion, ARIA properties are essential HTML attributes for screen readers. They can provide more information about the elements on the page, including their contexts and actions. A word of caution: like with all ARIA attributes, they should be used sparingly and not instead of proper semantic HTML markup. In the next and final blog post on this topic, I'll take a look at ARIA state attributes, which provide granular information about the status of UI elements such as tabs and accordions. Stay tuned!



