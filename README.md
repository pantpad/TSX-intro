# TypeScript - Converting JSX to TSX at COMPONENT Level

## #1 PROPS in TSX

Any components can receive props.

PROPS needs to be TYPED.

How to type props in react component?

- Create TYPE for the component props and define your props there.

//convention for naming the type: componentName+Props -> DemoProps

With this → props of the component will be properly typed.

We get automatic type inference + autocomplete in vscode!

It’s better to destructure props → directly inside the function arguments and assign the type to all of the destructured props.

## #2 STATE in TSX

import state → we want to have a count.

How to type the state explicitly?

open `<>` right after the use state → assign a type.

TS automatically tries to infer the correct type to the state based on the value assigned at start.

If you want / need to specify it explicitly its perfectly fine!

## #3 EVENTS in TSX

Events that users can trigger.

They can be very tricky.

If we have a button and we need to give it a fn onClick, we can pass it inline.

And then we can access the event directly from the function.

The event will be automatically TYPED by TypeScript.

If we want to have the function defined externally, we simple hover on the event element and pass the type definition in our function.

## #4 - FUNCTIONS in TSX

fetchUsers → we want to add arguments to the function = WE NEED TO GIVE TYPES to the arguments!

More arguments = more types !

What about return values inside TSX function?

- Let typescript automatically infer it
- SET IT explicitly after the arguments (): {id: number}

## #5 - HOW to TYPE a REF in TSX

import useRef, create a ref called input.

assign ref to the input + hover on the ref property → it will tell you the correct type to give to the useRef hook!

## #6 - HOW to TYPE CUSTOM HOOKS in TSX.

- Create a customHook ( useDebounce )
- Add TYPES to customHook arguments → :number

By doing so all of the hook is automatically inferred correctly!

EVEN if we use an object as return valued, the debouncedValue property will be of type NUMBER.

THE only time we need to specify things differently is when we have an ARRAY as return value!

- It doesn’t know the array will only have 2 elements in this specific order.

before `as const` → array could return A or B in ANY order.

after `as const` → array RETURNS A in first position, B in second position of the array!

WHY is this usefull? → when using the actual custom hook the types are properly SET.
