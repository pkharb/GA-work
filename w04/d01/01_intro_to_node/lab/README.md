## The Guest List (Bonus)

1. Create a new directory in your workspace called `guest-list`
2. within this directory, create a file called `index.js`
3. initialize this as a node app with a `package.json` file by running `npm init`
4. install the third party `prompt` package (`npm install prompt`), and read a little bit of the [documentation](https://github.com/flatiron/prompt)

Using the `prompt` package *and* the built in `fs` package: 

Write a program that prompts a user in the terminal for a name of a person. 

When a user enters a person's name in the terminal, it will add the name to a file called `guestlist.txt`, with a line break.

This way, the next time the program is run, the next name will appear in `guestlist.txt` on the next line, etc.