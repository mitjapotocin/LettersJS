### Instructions:

#### Initialize LettersJS with Letters.init(options)

Options:

-   selector (mandatory)
-   lettersOver: list of letter that are on top starting with 1 (optional) Default value is every other letter.

##### Example:

```
Letters.init({
	selector: '.yourContainer',
	lettersOver: [1, 2, 3, 4]
});

```

#### Initialize LettersJS with data-LettersJS atribute

HTML:

```
<div data-LettersJS>SOME TEXT</div>
```

JS:

```
Letters.init();
```
