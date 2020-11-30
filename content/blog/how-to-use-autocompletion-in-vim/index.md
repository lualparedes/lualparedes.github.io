---
title: How to Use Autocompletion in Vim
date: "2020-11-30T01:09:57.858Z"
description: "A comprehensive guide covering all completion modes available in Vim."
---

One of the coolest features that can make you more productive with Vim is autocompletion.

As with anything else, there are many plugins for this topic, but they toolset that Vim offers out of the box in this regard is powerful on its own.

In this post, we'll be taking a look at how to navigate, accept or reject completion suggestions, and when and how to use each of the submodes that allow you to complete a particular type of words.

## Basic Usage

You can access completion mode using `^X` (<kbd>CTRL</kbd> + <kbd>X</kbd>) either in *insert mode* or in *replace mode*.

Inside this mode you can:
- Select the type of completion you want to perform (the usual thing to do).
- Scroll up and down using `^Y` for scrolling one line up and `^E` for scrolling one line down (just like you'd do in normal mode).
- Keep writing to come back to the regular insert mode.

When you pick the type of completion you want to use, a popup will appear displaying the available completion options, and you can execute any of the following actions:
- Navigate through the completion options using `^P` (**p**revious) and `^N` (**n**ext). Alternatively, you can use the same hotkey combination that you used to enter the submode (`^]`, `^F`, etc.) instead of `^N`, except for `^I`.
- Accept the selected suggestion using `^Y` (**y**es) or just continuing typing. Alternatively, you can use `<ESC>`, but it will also exit insert mode.
- Reject the selected suggestion and exit completion mode using `^E` (**e**xit).

In the following sections we'll be taking a deeper dive into each of the completion types available.

## Completing Whole Lines

Hitting `^L` in completion mode will open a popup with a list of full lines that start with the same characters in the current line before the cursor.

Options considered for completion will include all possible matches in all opened buffers (files), even if they're not part of the current tab, and the display order is backwards starting from the previous line.

## Complete Words Found in Current Buffer

If the word that you want to complete is already found in the file you're editing, you can use `^P`, or `^N` to get a popup with all possible completion options.

The only difference between `^P` and `^N` is the search order, which is forwards for `^N` (**n**ext words) and backwards for `^P` (**p**revious words). Notice that, regardless of the search direction, the set of matches is the same since continues searching until it gets back to the current word, regardless of having hit the end or the beginning of the document while searching.

## Complete Words Using Matches in a Dictionary

You can set up one or several lists of words to be used as your dictionary sources for completion. To do so:
1. Create the file(s) containing the dictionary. For more details on the format of this file check out `:h dictionary`.
2. Set the `dictionary` variable in your `.vimrc` file:
```vim
" you can add more separating the paths with commas
set dictionary={path/to/your/dictionary}
```
3. Enter dictionary completion mode using `^X` to access completion mode and then `^K` for the dictionary completion option.

## Complete Words Using Matches in a Thesaurus

This option is analogous to the dictionary option. To use it:
1. Create the file(s) containing the thesaurus. For more details on the format of this file check out `:h thesaurus`.
2. Set the `thesaurus` variable in your `.vimrc` file:
```vim
" you can add more separating the paths with commas
set thesaurus={path/to/your/thesaurus}
```
3. Enter the thesaurus completion mode using `^X` to access completion mode and then `^T` for the thesaurus completion option.

## Complete Words Using Matches in Current File and Imports/Includes

An *included file* is any file from which you're importing functions, classes and other identifiers to be used in the current file.

The term originates from the syntax used by C to import programming objects from another file, however the tern doesn't only refer to C includes, but also refers to Node's "`require`s", Python's "`import`s" and in general any file whose names get imported using whatever syntax is available in the language being used.

A common completion use case is expanding the names available in the included files. To use this type of completion, you need to follow these steps:
1. Set the `include` variable to a search pattern used to find include/import commands. Since the syntax used for *included files* will vary depending on the language, you may want to set the variable using an auto command (`:h au`) that gets executed only when files written in a specific language are being opened. For instance, for Node projects written in a style where all imports are handled using `require(<module>)`, you could use something like this:
```vim
au FileType javascript set include=require(
```
2. Set the `path` variable to a pattern matching the paths of the directories containing the *included files*. You can use `:checkpath` to verify that all included files were found.
3. Enter the included files completion mode using `^X^I` in insert or replace mode.

## Complete Words Using Tags

A *tag* is an identifier used to label program objects such as functions, methods, and classes.

Tags are located in a *tags file* that can be generated for a project running the following command from the root directory of the project:
```
ctags -R .
```

After creating the tags file, you can access the tag completion submode using `^X^]`.

## Complete File Names

This type of completion is useful for writing import statements and I/O statements fast.

Enter `^X^F` in insert or replace mode to access this completion submode, a popup will show the available file name options to complete the word you started typing.

Notice that:
- Options available are based on the current working directory *in Vim* (which may be different from the current working directory in the terminal where Vim is being run). Use `:pwd` to know the value of this directory.
- The `path` variable is not involved in this type of completion as of Vim 8.0.

## Complete Definitions or Macros

Use this completion mode if you're interested in completing the identifier of a macro (while working on a file written in a language that supports macros) or a similar definition.

You access this submode using `^X^D` in insert or replace mode, and you can modify what Vim considers a definition, by changing the value of the pattern in the variable `define`.

A common customization of `define` is changing the pattern to include *const* type declarations.

## Complete Vim Commands

This type of completion is useful when writing Vim scripts since it allows you to complete any valid Vim command, including commands
added by installed plugins.

Access this completion type using `^X^V` in insert or replace mode.

## Complete Words Using Intelligent Code Completion

Vim also allows you to complete words depending on the context, offering completion suggestions based not only on the text written in the current file and imported files, but also based on the namespace available *for the language being used*.

The official name of this feature inside Vim is *omni completion*, it's usually not enabled by default, but all you need to activate it is to add the following two lines to your `.vimrc`:
```vim
filetype plugin on
set omnifunc=syntaxcomplete#Complete
```
and then just access it using `^X^O` in insert or replace mode.

Most common languages are supported, however, if a language you're using isn't supported yet or if you want to customize the behavior of the omni completion used for a particular language, you can set the `omnifunc` variable to override the function used for this type of completion. For example, you could use an auto command to set the omni function value for a specific filetype as follows:
```vim
au FileType {filetype} set omnifunc={custom omni function}
```

## Complete Words Using Spelling Suggestions

If the `spell` option is active (`:set spell`), you can complete words in the language used for spelling correction using `^X^S` or `^Xs` in insert or replace mode.

Notice that:
- ⚠️ <kbd>CTRL</kbd> + <kbd>S</kbd> suspends display in many Unix terminals. Don't panic if you did it by accident! You can reactivate your display using <kbd>CTRL</kbd> + <kbd>Q</kbd> 😉.
- If there's a spelling error in the line you're editing, the cursor will jump to the misspelled word and the options available for completion will be based on that word instead of the word you were initially editing when you entered this submode.

## Complete Words Using Custom Function

If none of the default completion types satisfies your needs, you can create your own completion function and access it using `^X^U`(**u**ser defined completion) in insert or replace mode. All you need to do is to create a function that matches the format defined in the documentation (`:h complete-functions`), and then set the `completefunc` value to your custom function:
```vim
" .vimrc
set completefunc={your custom function}
```

## Conclusion

Vim completion mode is a powerful tool that can increase your productivity when writing code. Completion options cover most of the common use cases and if you need anything extra, tweaking the basic options or extending them is fairly easy to do.

## References

- `:h ins-completion`.
- [*Include and Path* on Vim Reddit Wiki](https://www.reddit.com/r/vim/wiki/include-and-path).
- [*Omni completion* on Vim Fandom Wiki](https://vim.fandom.com/wiki/Omni_completion)
