// Create the <!DOCTYPE html> declaration
var docType = document.implementation.createDocumentType('html', '', '');

// Create the <html> element
var html = document.createElement('html');

// Create the <head> element
var head = document.createElement('head');

// Create the <script> element for jQuery
var jQueryScript = document.createElement('script');
jQueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';

// Create the <script> element for your todo-script.js
var todoScript = document.createElement('script');
todoScript.type = 'text/javascript';
todoScript.src = 'todo-script.js';

// Create the <link> element for the stylesheet
var stylesheetLink = document.createElement('link');
stylesheetLink.rel = 'stylesheet';
stylesheetLink.href = 'style.css';
stylesheetLink.type = 'text/css';

// Append the scripts and stylesheet to the <head>
head.appendChild(jQueryScript);
head.appendChild(todoScript);
head.appendChild(stylesheetLink);

// Create the <body> element
var body = document.createElement('body');

// Create the <div> with class "todo-content"
var todoContent = document.createElement('div');
todoContent.className = 'todo-content';

// Create the <h2> element
var h2 = document.createElement('h2');
h2.style.textAlign = 'center';
h2.textContent = 'TO DO List Using jQuery';

// Create the <div> with class "todo-input"
var todoInput = document.createElement('div');
todoInput.className = 'todo-input';

// Create the <input> element for text input
var input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter Something Here..';

// Create the <button> element with class "add-todo"
var addButton = document.createElement('button');
addButton.className = 'add-todo';
addButton.textContent = 'Add';

// Append the input and button to the "todo-input" div
todoInput.appendChild(input);
todoInput.appendChild(addButton);

// Create the <div> with class "error"
var errorDiv = document.createElement('div');
errorDiv.className = 'error';

// Create the <div> with class "todo-list"
var todoListDiv = document.createElement('div');
todoListDiv.className = 'todo-list';

// Append the elements to the respective parent elements
todoContent.appendChild(h2);
todoContent.appendChild(todoInput);
todoContent.appendChild(errorDiv);
todoContent.appendChild(todoListDiv);

body.appendChild(todoContent);

// Append the <head> and <body> to the <html>
html.appendChild(head);
html.appendChild(body);

// Append the <!DOCTYPE html> and <html> to the document
document.appendChild(docType);
document.appendChild(html);
