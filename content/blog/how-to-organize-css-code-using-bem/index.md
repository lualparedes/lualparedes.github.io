---
title: How to Organize CSS Code Using BEM
date: "2020-12-06T16:14:01.667Z"
description: "Learn the pros and cons of using the Block-Element-Modifier (BEM) methodology to organize your CSS code."
---

John Doe is an amazing web developer, he has been in the field for more than 3 years and has worked on a lot of projects. During a typical Monday afternoon he's tasked with a simple UI modification in an element in the home page of the website of a client.

John has all the necessary frontend knowledge to make the change in a matter of minutes, even seconds. He opens his editor, navigates to the file containing the code and quickly gets to the block containing the styles he needs to modify and is expecting to finish the change in no time.

However, upon further inspection, he realizes that even though the one element that he needs to modify doesn't have anything to do with the container of the container of the wrapper of the main section, for whatever reason, the styles of the element are attached to the styles of that distant parent element.

This puts John in a situation where he has to [fight the high level of specificity](https://css-tricks.com/strategies-keeping-css-specificity-low/) of the styles being applied to the component in order to make the simple change that he expected to do in a matter of seconds.

After a longer than expected battle with the simple block of code, he manages to accomplish the task with an even more specific selector that looks ugly as fuck and makes styles harder to modify in the future, but... gets the job done.

If you've ever found yourself in a similar scenario as John, chances are that you've been left wondering whether there's a way to organize CSS styles that allows you to minimize the time you spend fighting specificity battles to accomplish simple changes.

The good news is that this problem has solutions, and in this post I'm going to be talking about one of the simplest and most popular ones: the Block-Element-Modifier methodology, or BEM for short.

## What Is BEM

Two of the most important general best practices that have passed the test of time in computer engineering are: loose coupling and namespacing identifiers.

Loose coupling refers to the practice of modularizing the programming code as much as possible for the sake of reducing the chances of breaking several sections of the code after implementing some changes in a specific place of the code.

John's scenario is an example of tight-coupling, since the code defining the styles of an element deep into the document tree was tied somehow to elements several levels above.

Namespacing refers to the practice of grouping a set of identifiers (the names of functions, variables, classes, etc.) into several scopes or "spaces" to make sure that two different things don't have the same name (name collision).

A typical example of name collision in CSS is when you use the same class name in two different contexts and end up breaking the UI as a result of unintentionally overriding the styles defined in one context with the styles defined later on the other context.

**BEM allows us to keep our style rules loosely coupled and create name spaces**, through the 3 concepts that define the methodology:

### Blocks

A *block* is an element in the UI that carries semantic meaning regardless of the context. But what's semantic meaning? You can think of it as the functionality that a component offers inside an interface, take for example:

```html
<button>Some Label <span>Icon</span></button>
```

You can change the label of the button to something like "Donate" or "Submit" and place the "Donate button" as a CTA in a navbar and the "Submit button" at the end of a form, which are two different contexts.

However, the `button` keeps carrying the meaning "click me and some action will fire", the action will depend on the context, but the general UI meaning stays the same, and as a user you don't need to take clues from the context to derive that UI meaning.

Any other element that carries intrinsic semantic meaning is seen as a block in BEM and gets assigned a flat class to define its style rules. Using the same example:

```html
<button class="btn">Some Label <span>Icon</span></button>
```

Notice that:
- *Blocks* can be as simple as a button element, or as complex as a navbar, a form or even a main.
- Blocks can contain other blocks, e.g. a "donate button" *block* can be inside a navbar *block*.
- Blocks inside other blocks are **NOT** tied to parent blocks. Whenever you need to style a UI component that carries intrinsic semantic meaning, a new **separate** block must be created to declare the styles, this maintains specificity conveniently low and contributes to keeping our CSS rules decoupled.

### Elements

An *element* is a UI component whose semantic meaning depends on the context. Take for example:
```html
<button class="btn">Some Label <span>Icon</span></button>
```
and
```html
<p>Dolor quisquam illum fugit <span>officia enim</span> Suscipit sapiente.</p>
```

The `span` inside the button is used to wrap an icon, whereas the `span` in the paragraph is used to apply style rules to a particular section of the text, which are vastly different UI meanings.

This means that the `span` doesn't carry an intrinsic semantic meaning in the UI, since the only way to know the UI function that it represents is by taking clues from the context.

Whenever the user finds himself in a situation in which knowing the UI meaning of an element depends on the context, we're in the presence of a BEM *element*.

Style rules applied to *BEM elements* are scoped to the particular *BEM block* (context) they belong in. One of the most popular naming conventions used is `<block>__<element>` though `__` can be substituted by any other separator that makes sense to you.

Applying the convention to our example:
```html
<button class="btn">Some Label <span class="btn__icon">Icon</span></button>
```

```html
<p class="content-paragraph">
  Dolor quisquam illum fugit <span class="content-paragraph__special-text">officia enim</span> Suscipit sapiente.
</p>
```


Notice that:
- An *HTML element* is not the same as a *BEM element*. For instance, we could have:
```html
<div class="card">
  <h3 class="card__title">Card Title</h3>
  <p class="card__content">
    Amet dolores temporibus assumenda maxime molestias.
  </p>
</div>
```
and
```html
<h3 class="linkable-header">
  Some Title
  <span class="linkable-header__icon">#</span>
</h3>
```
which is a scenario in which the `h3` *HTML element* is a *BEM element* in the card context, but it's a *BEM block* in another context.

### Modifiers

*Modifiers* are variants in both *blocks* and *elements*. They allow you to specify style rules for special cases using the syntax `<block>--<modifier>` if the modification affects a *block* or `<block>__<element>--<modifier>` if the modification affects an *element*.

Here's how we'd use it to create, for example, button variants:
```css
.btn {
  padding: 8px 12px;
  border-radius: 4px;
  color: white;
}

.btn--default {
  background: blue;
}

.btn--danger {
  background: red;
}
```

It's recommended to use the `--` separator since it is the standard separator used for modifiers, however, feel free to substitute it with anything that makes sense to you. Indeed, `--` itself is a variation of the original `_` separator used by BEM creators at Яндекс (Yandex) [[src](https://en.bem.info/methodology/quick-start/#modifier)].


## Caveats

BEM offers a simple methodology to write cleaner CSS that makes our projects more maintainable, however, as any other tool, using it comes with a few downsides that we must take into account.

### Verbose Classes

Namespacing classes based on *BEM blocks* requires you to prepend the name of the block scope to every single element living inside that namespace, not to mention that if some of the elements have variants, their name would get even bigger.

### Some Code Repetition

Composing style rules by combining several classes is a common pattern used outside BEM. Its popularity stems from preventing repetition of common style rules across different components.

Consider the following example:

```html
<section class="some-section">
  Consectetur ipsum recusandae <span class="special-text">eos autem quos</span> Commodi a error provident.
</section>
<section class="another-section">
  Ipsum beatae quos <span class="special-text">excepturi voluptatum</span> dicta doloribus Quibusdam vel dicta.
</section>
```
```css
.special-text {
  /* ... */
}
```

Without using BEM, a simple class is enough to apply the styles that we intend for "special text", however, if we were to BEMify the previous code we'd end up with something like this:

```html
<section class="some-section">
  Consectetur ipsum recusandae <span class="some-section__special-text">eos autem quos</span> Commodi a error provident.
</section>
<section class="another-section">
  Ipsum beatae quos <span class="another-section__special-text">excepturi voluptatum</span> dicta doloribus Quibusdam vel dicta.
</section>
```
```css
.some-section__special-text {
  /* some styles */
}

.another-section__special-text {
  /* the same styles from the block above */
}
```

Which clearly forces us to repeat the style rules for the "special text".

That said, using this type of utility classes is not the only way to achieve composability when writing CSS, since we can declare mixins for style rule composition using tools like [SASS](https://css-tricks.com/snippets/sass/bem-mixins/) and [PostCSS](https://github.com/postcss/postcss-mixins).

## Conclusion

BEM is a simple, yet handy methodology that can help us write better CSS code. It forces us to see the UI as *blocks* that can be used to define namespaces and keep a healthy level of modularity in our CSS.

It also comes with a few caveats, as any other methodology, but in general, it's worth giving it a try.
