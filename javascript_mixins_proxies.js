// JavaScript Objects - Mixins and Proxies Practical Test

/***********************
 * 1. Mixin Basics
 * Create a mixin named `canWalk` that adds a `walk()` method.
 * Then create an object `person` and apply the mixin.
 ***********************/

// Your code here

/***********************
 * 2. Multiple Mixins
 * Create two mixins: `canEat` and `canSleep`.
 * Apply both to an object named `animal` and call both methods.
 ***********************/

// Your code here

/***********************
 * 3. Mixin with Shared State
 * Create a mixin `trackable` that stores a list of events in an array.
 * Implement methods `addEvent()` and `getEvents()`.
 * Apply it to an object `logger` and test the behavior.
 ***********************/

// Your code here

/***********************
 * 4. Proxy Basics
 * Create an object `user` with properties `name` and `age`.
 * Create a proxy that logs every get and set operation on the user object.
 ***********************/

// Your code here

/***********************
 * 5. Validation with Proxies
 * Create a proxy that prevents setting the `age` property to a negative number.
 ***********************/

// Your code here

/***********************
 * 6. Hiding Private Properties
 * Use a proxy to prevent access to any property that starts with `_` (underscore).
 * Example: `_password` should be inaccessible.
 ***********************/

// Your code here

/***********************
 * 7. Proxy as a Wrapper
 * Create a function `makeObservable(obj)` that wraps any object with a proxy
 * and calls a `handler()` every time a property is set.
 ***********************/

// Your code here

/***********************
 * 8. Proxy with has trap
 * Create a proxy for an object that always returns false when using the `in` operator,
 * except for the property `"id"`.
 ***********************/

// Your code here

/***********************
 * 9. Mixin on Class Prototype
 * Create a mixin `canFly` with a fly method.
 * Apply it to a class `Bird` and demonstrate that all instances can use it.
 ***********************/

// Your code here

/***********************
 * 10. Proxy and Reflect
 * Rewrite a proxy set handler using Reflect.set instead of direct assignment.
 ***********************/

// Your code here
