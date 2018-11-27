<img src="https://i.imgur.com/exl28t6.png" width="900" />

--- 

## Learning Objectives

***Build a basic static HTML webpage from scratch***

* Identify common HTML elements 
* Assign attributes to elements 
* Correctly indent content according to the document's hierarchy 

---

## Roadmap

1. What is HTML?
2. HTML in Context
3. Essential HTML5 Boilerplate
4. HTML Fundamentals
5. Exploring Common Elements
6. Nesting
7. *Malformed HTML*
8. *Semantic HTML*

---

# What is HTML?

--- 

## What is HTML

**Definition:**

> HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visual or audible web pages.

**Current Version:** HTML5

---

## HTML in Context

**One of three fundamental technologies on the client side of  a web app...What are the other two?**

--- 

## Three Fundamental Technologies 

**1. HTML**
- Structure & Content

**2. CSS (Cascading Style Sheets)**
- Styling & Layout

**3. JavaScript (ECMAScript)**
- Behavior

---

## HTML (Skeleton)

![](https://img2.cgtrader.com/items/693073/13d52ee7f2/large/human-skeleton-3d-model-max-obj-3ds-fbx-mtl-mat.jpg)

--- 

## CSS & JavaScript (Looks and Behavior)

![](http://dtlon6z3v1kfl.cloudfront.net/wp-content/uploads/2017/07/20211559/chuck-norris-cforce.png)

---

# Let's look at a couple sites to see HTML, CSS, and JS in action...

---

## Essential HTML Boilerplate

```HTML
<!DOCTYPE HTML>
<html>
<head>
    <!-- Metadata goes here! -->
    <title>Cool page title</title>
</head>
<body>
    <!-- Content goes here! -->
</body>
</html>

```

--- 

## Tags
* Commonly have an opening and closing tag name inside angle brackets
* Some tags such as img, br, and meta are called empty tags because they never have content and thus do not need to be closed. 

---

## Elements
* An Element consists of a Tag and its contents (if any), which may include other tags.

```HTML
<p>Have a <em>great</em> day!</p>
```

---

## Elements (Block vs Inline)
* Most elements are defined as either block level or inline elements.
* Block level elements normally display on their own line and take up the full width available to them (they don't allow other elements next to them, unless they are styled to do so). Examples: `<div>`, `<h1>`, `<p>` 
* Inline elements are normally displayed without line breaks and occupy only enough space to contain their contents. Examples: `<span>`, `<td>`, `<img>`

---

## Attributes
* Attributes provide additional information about an element.
* Attributes are placed within the opening tag and are typically name/value pairs separated by an equals sign (=).
* The value should always be put in double-quotes.
* What are some common examples of Attributes?

--- 

## Common Global Attributes

* The most common attribute is class.
* The id attribute is used to target a specific element (or its contents) for styling or JS access. The value of an id attribute should be *unique* in the document. The id attribute is optional and should be used only when necessary - the less we clutter our code, the better. 
* There are a few attributes, such as required checked novalidate and disabled, that stand alone without a value - these are called boolean attributes.

```HTML
<div class="container">
    <div id="1"></div>
    <div id="2"></div>
    <div id="3"></div>
 </div>
 ```
 
---

## Custom Attributes

You can add your own custom attributes too! The HTML5 spec recommends that you prefix them with data-. Developers can use custom attributes to add additional information in the markup. They are commonly used by front-end frameworks.

```HTML 
<div id="ironman" data-power="genius">Tony Stark</div>
```

--- 

## Whitespace

* Multiple spaces created by the spacebar, tab key, and return key are reduced down to a single space between pieces of text.
* One way to create extra spaces is by using the HTML entity 

```
&nbsp;
```

--- 

## Comments 

* You can add comments to an HTML document.
* Comments can span multiple lines and elements in a comment tag will not be rendered.
* Quick hand for comments is typically **Command + Forward Slash** 

--- 

## Exploring Common Elements

Take 10 minutes to quickly research at least 3 of the following common Elements.

`<a>`, `<blockquote>`, `<br>`, `<button>`, `<div>`, `<dl>`, `<form>`, `<h1>..<h6>`, `<img>`, `<input>`, `<link>`, `<ol>`, `<p>`, `<script>`, `<select>`, `<span>`, `<table>`, `<ul>`

--- 

## Nesting

* When an element contains another element, the contained element is considered to be *nested* inside the outer element. The HTML graphic on the next slide, has colored boxes drawn around elements to help visualize the relationship between parent and child elements.
* It is a best practice to indent nested elements. However, contrary to the above graphic, the 'head' and 'body' tags are rarely indented despite being children of the 'html' element.
* Properly indenting elements makes the markup more readable and less prone to errors.
  
--- 

## Nesting

![](https://i.imgur.com/9m8w40Y.png)

---

## Nesting Relationships

* **Descendant / Ancestor:** An element is considered a *descendant* if it is nested anywhere within its *ancestor*.
* **Child / Parent**: An element is considered a *child* if it is a direct descendant of its *parent*.
* **Siblings**: Two or more elements are considered *siblings* if they have the same *parent*.

```HTML
    <div>
        <div>
            <h1>Hello World!</h1>
        </div>
        <div>...</div>
    </div>
```
---

## Malformed HTML

* Proper structure and nesting of elements is important because the browser won't complain - it just won't necessarily display what you are expecting it to.
* One of the possible mistakes is to "overlap" tags instead of nesting them.  Here's an example of malformed HTML:
* Errors in complex HTML can be hard to find so it's not uncommon for developers to use plugins or other tools to help them find errors, no matter what the language.  

```HTML
  <p>This is <strong>important text</p></strong>
```
  
---

## Semantic HTML

* Semantic HTML helps express the **meaning** or purpose of the content in a webpage:
* **Benefits for the developer:**
    * Semantic HTML makes the developer's intentions more clear as to what the developer is trying to accomplish.
* **Benefits for the user:**
    * More accurate web searches via better SEO (search engine optimization).
    * Improves accessibility for the vision impaired because screen readers can do their job better.

--- 

## Semantic HTML
![](https://i.imgur.com/2jxmD28.png)

---

## Exploring Semantic Tags

Pair up and research these semantic tags:

   1. `<section>`
   2. `<article>`
   3. `<aside>`
   4. `<figure>`
   5. `<footer>`
   6. `<header>`
   7. `<main>`
   8. `<nav>`

We'll discuss your findings in 5 minutes.

--- 

### LAB

Write an HTML document that represents your own personal blog using semantic HTML. Focus on structure and include some sample content.  Include attributes such as *class* and *id*, but do not worry about writing any styling.