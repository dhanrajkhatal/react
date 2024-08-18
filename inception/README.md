React.createElement : return an object which will be use to create an html structure it is not return an actual html structure
it takes 3 argument 1. html tag 2. properties 3. content of element it can be string other child element or array of elements 

ReactDOM.createRoot : it takes the html element as input to create root object which further use to render the react element inside it

Rect is not written inside JSX 
JSX make coding easy but we can also write code using React.createElement 

while including scripts in index.html script must be in sequence 1st include the CDN of react before including your scripts

you can put CDN scripts before the root tag inside head tag but cannot add the scripts which you have write before root because it will trough error while creating DOM element as it will not found container to create root element 

if you put anything inside <div id="root">[[anything]]</div> after render call on root DOM element it will replace everything inside the div of root id element