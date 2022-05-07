# react-custom-hook

In this mini project we show a use case for a CUSTOM hook.

We create a hook "useStateArray" which can be used to create array states together with the CRUD functions (add, update, delete).

Usually we update state arrays by manipulating a COPY of the array. 

Using the useStateArray we can use the given functions (add, update, delete) which do the creation & mutation of the copy under the hood for us.

That simplifies the management of arrays quite a bit and keeps the code in the components for state manipulation way more lean.

Enjoy!
