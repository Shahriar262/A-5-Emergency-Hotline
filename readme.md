### Answer the following questions clearly:

### 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans: 
  **`Difference between getElementById and getElementsByClassName:`**

  **`getElementById():`** 

  -This method selects an element based on its unique id attribute. In HTML, id attributes are intended to 
   be unique within a document.

  -It returns a single element.

  **`getElementsByClassName():`** 

  -This method selects elements based on their class attribute. Multiple elements in an  HTML document can 
   share the same class name.

  -It returns a `HTMLCollection.`

  **`Difference between querySelector and querySelectorAll:`**

  **`querySelector():`**

  -This method returns the first element within the document that matches the specified CSS selector. 

  -If no elements match the selector, it returns null.

  **`querySelectorAll():`** 

  -It returns `NodeList` by matching CSS selectors. 

  -If no elements match the selector, it returns empty `NodeList.`


### 2. How do you **create and insert a new element into the DOM**?

Ans: 
  **`For creating new element we use "document.createElement()" method.`**

  const newElement = document.createElement('div'); 

  newElement.innerText = 'This is a new element.';

  newElement.innerHTML = '<strong>Important:</strong> This is a new element.';

  newElement.setAttribute('id', 'myNewElement');

  newElement.classList.add('custom-class');

  const parentElement = document.getElementById('container');

  **`For inserting new element we use "appendChild()"`**

  parentElement.appendChild(newElement);

  
### 3. What is **Event Bubbling** and how does it work?

Ans: 
  **`Event Bubbling:`** 
   Event bubbling in JavaScript is a mechanism in the Document Object Model (DOM) event propagation where an event, triggered on an element, propagates upwards through its ancestor elements in the DOM tree. 
  
  **`How "Event Bubbling" works:`**

    -When an element (like a button) is clicked, an event is directed to the element.

    -If an event handler is set for the element, the event handler is triggered.

    -Then the event "bubbles up" to the elements parent.

    -If an event handler is set for the parent, this event handler is triggered.

    -The event continues to bubble, until it reaches the top.

    
### 4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans: 
  **`Event Delegation:`** 
   Event delegation is a powerful technique that simplifies event handling, improves performance, and enhances the flexibility of our code.

  **`Why it is useful:`**

    -Improved Performance and Reduced Memory Usage

    -Efficient Handling of Dynamic Content

    -Simplified Code and Enhanced Maintainability

    -Event Delegation is a useful pattern that allows us to write cleaner code

    -It is useful for easier maintenance


### 5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans:
**`preventDefault() method:`**

  -Prevent the default action of browsers taking on that event.

  -It uses the DOM version of DOM Level 3 Events.

  -It prevents the browser from following a link.

  -It does not return value.

  -It's supported browsers are - chrome, firefox, safari, opera, etc.

  -It's syntax is - `event.preventDefault();`


**`stopPropagation() method:`**

  -Prevent further propagation of current events by parent or child elements.

  -It uses the DOM version of DOM Level 2 Events.

  -It can not stop the default behavior of the browser.

  -It does not have any return type.

  -It's supported browsers are - chrome, firefox, safari, opera, etc.

  -It's syntax is - `event.stopPropagation();`
  