// Exercise 1
// ----------------
// Structure the following sentence:
// "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up".
// The result should be:
// "Properties, a set of immutable values, are passed to a component's renderer as properties in its  HTML tag. A component cannot directly modify any properties passed to it, but can be passed callback functions that do modify values. This mechanism's promise is expressed as properties flow down; actions flow up"
// (Commas are also accepted as a division between the words.)
console.warn("\nChallenge-Exercise 1:\n ");

let text = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";

// one solution is with replace and a regular expression including the global flag (g)
console.log(text.replace(/\$/g, " "));
// or use relpaceAll to find and replace all $ signs for example
console.log(text.replaceAll("$", " "));