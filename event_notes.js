------------------------------------
I'm using a keypress listener eg..

addEventListener("keypress", function(event){

  }
however, this doesn't seem to detect a backspace which erases text.. is there a different listener I can use to detect this?

KeyPress event is invoked only for character (printable) keys,
KeyDown event is raised for all including nonprintable such as Control, Shift, Alt, BackSpace, etc.

The keyboard events occur in this order: keydown, keyup, keypress

The problem with backspace probably is, that the browser will navigate back on keyup and thus your page will not see the keypress event.
----------------------------------------

----------------------------------------
ide.addEventListener("keypress", keycheck(event)) will always execute keycheck(event) right away. And this is bad because event isn't defined, and your handler wont be called on keypress.

What you're looking for is this:

ide.addEventListener("keypress", function (event) {
    keycheck(event)); // binds to the input ^
});
And that can be reduced to:

ide.addEventListener("keypress", keycheck);
because you can actually reference a function like a variable in JavaScript (it's awesome).
---------------------------------------------------

-----------------------------------------------------------
many times you’ll want to start functions when a user clicks a link, enters a form, scrolls, moves his or her mouse over an object, or does something else. These actions are called events. You can set specific functions to run when the user performs an event. These functions “listen” for an event and then initiate the function. - See more at: http://idratherbewriting.com/javascript/events-and-listeners-javascript/#sthash.OKhOT29R.dpuf
The following are common events:

-onload //when the page loads
-onclick //when a user clicks something
-onmouseover //when a user mouses over something
-onfocus //when a user puts the cursor in a form field
-onblur //When a user leaves a form field
**Note that each event listener begins with on and is entirely lowercase. - See more at: http://idratherbewriting.com/javascript/events-and-listeners-javascript/#sthash.OKhOT29R.dpuf
------------------------------------------------------------

-------------------------------------------------------------
A more common way to integrate the event listeners is by identifying the element and adding the event listener as a method. The general format for doing this is as follows:

myelement.onclick = function() {
//run your event handler code...
};
n this example, myelement would be a variable that refers to a specific style on your page.
Note that the word function is written without a name because its code is specified in the code block that immediately follows.
Also note that the statement ends with a semicolon ; after the closing curly brace }.

-------------------------------------------------------------
EVENT HANDLER
-------------------------------------------------------------

If your event handler refers to a specific element on the page, and you call your script before the element loads, the script won’t work because the element isn’t available at the time the script runs.

You could insert the script before the closing body tag to ensure the elements load first, but let’s say you need your script to run earlier — before the element loads. You can use the prepareEventHandlers function to load the function when the page loads.
First, add the prepareEventHandlers function:

//declare the function
function prepareEventHandlers() {
//get a specific page ID and assign it as a variable
var specialSection = document.getElementById("specialSection");
//initiate this function when the ID is clicked
specialSection.onclick = function() {
alert("Hello World");
}
}

Now call the prepareEventHandlers function when the window loads:

window.onload = function() {
prepareEventHandlers();
}

Using this technique, the event will be loaded and ready even if it is referenced before the element it’s listening for. Note that you can call the window.onload function only once per page.

---------------------------------------------------------------
TIMER
--------------------------------------------------------------

You can add events that have a time delay. For example, if you want a pop-up message to appear after the user has been on the page for 10 seconds, you can do this through the setTimeOut method.
For example, let’s say you have a simple message:

function welcomeVisitor() {
alert("Welcome to the site");
}
However, you don’t want this message to appear until the user has been on the page for a while. You delay the action through the setTimeOut function:

setTimeOut(welcomeVisitor,8000);
The setTimeOut function has two parameters. The first allows you to call a function (which we declared earlier), and the second refers to the timer. The function will not be called for 8000 milliseconds.
There are other timer functions, such as setInterval, that initiate the function at the interval you specify.

--------------------------------------------------------------

--------------------------------------------------------------

addEventListener() registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events (such as XMLHttpRequest).

SYNTAX

target.addEventListener(type, listener[, useCapture]);

type
A string representing the event type to listen for.

listener
The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.

useCapture --Optional
If true, useCapture indicates that the user wishes to initiate capture. After initiating capture, all events of the specified type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. Events which are bubbling upward through the tree will not trigger a listener designated to use capture.
--------------------------------------------------------------
--------------------------------------------------------------
FULL LISTING OF HTML DOM EVENTS
--------------------------------------------------------------

http://www.w3schools.com/jsref/dom_obj_event.asp

--------------------------------------------------------------
ANOTHER EXAMPLE http://stackoverflow.com/questions/9671995/javascript-custom-event-listener
--------------------------------------------------------------

var evt = document.createEvent("Event");
evt.initEvent("myEvent",true,true);

// custom param
evt.foo = "bar";

//register
document.addEventListener("myEvent",myEventHandler,false);

//invoke
document.dispatchEvent(evt);

--------------------------------------------------------------
GENERATING CUSTOM JAVASCRIPT EVENTS
--------------------------------------------------------------

http://www.kaizou.org/2010/03/generating-custom-javascript-events/




