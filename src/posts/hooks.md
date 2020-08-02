---
title: "Intro to React Hooks"
date: "2020-08-01"
author: "Alba Rodríguez"
description: "Have you heard a lot about Hooks but you still don't know what they are or what they do? You're in the right place."
---

In May 2020, ThoughtWorks' Technology Radar confirmed that React Hooks is their approach of choice when it comes to manage stateful components in React. <br>
But, wait a minute! Does that mean I need to rewrite all my code and adopt Hooks? **No!**

- Whether you use React Hooks or not, it's completely up to you. The React Team confirmed they have no plans to remove classes and therefore they'll continue to fully support them.<br>
- Hooks and class components work together just fine, so you can start using hooks to build your new components!

###Class components
Before Hooks, if we needed to manage the state of our components or utilise a lifecycle method, we used class-based components, but this approach has some limitations:
####It's hard to reuse logic between components:
To share logic between components, we need to use Higher-Order Components and render props, but this requires us to restructure our components, which makes it harder for developers to follow and write code.
####Complex components are hard to understand:
There's no clear separation of concerns, which makes it very difficult the task of breaking down components into smaller ones.

###What are Hooks?
Hooks are regular JavaScript functions that let you use React features from a function, by simply doing a function call. *This* and *bind* are no longer needed, our code looks clearer and is way more readable and shorter than classes. 

####We can now extract stateful logic from a component
Hooks are fully encapsulated: every time we call a Hook, it gets isolated local state within the component. This makes it easy to share stateful logic among components and we can even [build our own hooks](https://reactjs.org/docs/hooks-custom.html). 
####We can now split components into smaller functions
This will help us manage our project as it gets more and more complex.

###When to use Hooks?
We'll be using hooks with functional components to manage the state of the component. This is great because we won't need to constantly switch between classes, functions, higher order components and render props. We can now use always functions. 

###Can you give me an example?

We'll use **useState** in our example to better understand how this is implemented. <br>
**UseState** is a built-in hook that will help us manage the state of our component. <br><br>
It's used inside our functional component *Example* and it takes the initial state as argument. In our example, it takes 0 as initial value because it's where we'll start our count. We can pass it anything as arguments, it doesn't have to be an object as opposed to classes.  <br><br>
**UseState** returns an array with two elements: the current state and a function to update the state. We can call this function from an event handler or somewhere else. 

    import React, { useState } from 'react';

    function Example() {
    
        const [count, setCount] = useState(0);

        return (
            <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            </div>
        );
    }


We can use **useState** more than once inside a component:
    
    function App() {
    
        const [count, setCount] = useState(0);
        const [task, setTask] = useState([
            {text: 'buy milk', completed: false, dueDate: '2020-07-07'},
            {text: 'write blog', completed: false, dueDate: '2020-07-10'},
            {text: 'workout', completed: true, dueDate: '2020-07-07'}
        ]);
    }

This is definitely a clearer, shorter and declarative approach to write our React components, and I believe it'll be widely adopted by the React community.

There are also Hooks to manage side effects, context and much more but we'll go through them in depth in another post.

All in all, Hooks seem to make developers' lives easier because they help us break down our components into smaller functions and we can now share stateful logic among components and with the community. If you haven't tried them yet, I totally recommend you to give it a go and experiment with them. 
