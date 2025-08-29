
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: getElementById() is a JavaScript DOM method. It manipulates the DOM to retrieve a single ID from the HTML. getElementsByClassName is a method that can retrieve multiple elements by Class from HTML through DOM. QuerySelector() returns the first element in the document with the specified CSS selector. If no match is found, null is returned.The querySelectorAll() JavaScript method selects elements from an HTML document that match a CSS selector and returns a Nodelist of them.

2. How do you **create and insert a new element into the DOM**?
Answer: We will create the element with document.createElement ‍appendChild and insert the element with ‍append.

3. What is **Event Bubbling** and how does it work?
Answer: Event bubbling is a process where after a click on a specific HTML element, the event propagates upward through the Document Object Model (DOM) hierarchy to its parent elements.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Event delegation is a technique that allows a child element to be triggered by adding an event to the parent element. It takes less load, can be handled dynamically, and provides better performance, such as not having to add event listeners to all elements.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer: preventDefault() stops the browser's default behavior. stopPropagation() stops the event from going to the parent during bubbling or capturing.



