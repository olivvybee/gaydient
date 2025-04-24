# Gaydient

A simple web app for customising and copying the code for pride flag CSS
gradients.

## Contributing

Pull requests are very welcome! Feel free to add new flags or make improvements
in general.

### Adding new flags

Flags are stored in
[`src/data/gradients.json`](https://github.com/olivvybee/gaydient/blob/main/src/data/gradients.json)
as an array of objects containing a name and an array of hex codes. Add new ones
by adding new elements to the array.

### Running locally

This is a React app that uses `pnpm` for dependencies. Run `pnpm install` to
install the dependencies, then use `pnpm dev` to run the app.

It's a plain React app on top of Vite. CSS modules are used for styles. It's
literally a single page app, so there's no routing framework necessary.

The settings panel is handled using `zustand` (it's essentially a React context
that doesn't require a context provider).
