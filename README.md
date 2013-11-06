### Research

This is really simple information, but should also be a good intro into what to use and what Javascript can access based on its placement on the page.

# \<script\> in head or body?

The script should be placed in different parts of the HTML depending on the need. If it's in the head, it runs on load. If you're going to work with the document, put it in the body, right before the closing tag.

# Difference between *document*, *window*, and *screen*

Type each of these into the browser console:

```javascript
console.dir(window)
console.dir(document)
console.dir(screen)
```

It lists all of the attributes of each object. Why is this important? Each object (window, document, and screen) all have access to different information about the user's window in the browser, the page elements themselves, and the user's screen. If you want to manipulate the HTML on the page, use *document*. If it involves anything about the open window in the browser (such as history, height, etc), *window* should be used. If it involves display information, then use *screen*. Each object has different built in methods. .getElementById() is a document method. .alert() is a window method. 
