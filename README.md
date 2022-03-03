# Javascript And React Patterns

# Contents

* **[Overview](#overview)**
* **[Design Patterns](#design)**
  - [Introduction](#design)
  - [Singleton Pattern](#singleton)



<a name="overview"></a>
## Overview
<a name="design"></a>
## Introduction
Design patterns are reusable solutions to commonly occurring problems in software design.

One reason for this is that they help us build upon the combined experience of many developers that came before us and ensure we structure our code in an optimized way, meeting the needs of problems we're attempting to solve.

Design patterns also provide us a common vocabulary to describe solutions. This can be significantly simpler than describing syntax and semantics when we're attempting to convey a way of structuring a solution in code form to others.

Over the past couple of years, the web development ecosystem has changed rapidly. Whereas some well-known design patterns may simply not be as valuable as they used to be, others have evolved to solve modern problems with the latest technologies.

<a name="singleton"></a>
## Singleton Pattern
Singletons are classes which can be instantiated once, and can be accessed globally. This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.




### Mandates or Requirements
In the GoF book, the applicability of the Singleton pattern is described as follows:

There must be exactly one instance of a class, and it must be accessible to clients from a well-known access point.
When the sole instance should be extensible by subclassing, and clients should be able to use an extended instance without modifying their code.


### Example Use Case
  - React State management
    In React, we often rely on a global state through state management tools such as Redux or React Context instead of using Singletons. Although their global state behavior might seem similar to that of a Singleton, these tools provide a read-only state rather than the mutable state of the Singleton. When using Redux, only pure function reducers can update the state, after a component has sent an action through a dispatcher.

    Although the downsides to having a global state don't magically disappear by using these tools, we can at least make sure that the global state is mutated the way we intend it, since components cannot update the state directly.






