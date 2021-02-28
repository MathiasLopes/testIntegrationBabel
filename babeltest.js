console.log("nous allons tenter de réaliser du code compiler par BABEL");

let someValues = [1, 4, 7, 3, 2]

someValues.forEach((element) => {
    console.log(element);
});

console.log("j'essaie de logger un new Error : ", new Error());

var babel = ReactEnvironment.Current.Babel;
// Transpiles a file
// You can instead use `TransformFileWithSourceMap` if you want a source map too.
var result = babel.TransformFile("foo.js");
// Transpiles a piece of code
var result = babel.Transform("class Foo { }");