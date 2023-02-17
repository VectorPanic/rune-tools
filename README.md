# Rune Tools
A *command line application* (CLI) for creating and managing *Rune* ([rune-sdk](https://github.com/VectorPanic/rune-sdk)) based projects.

## How to use

rune-tools can be executed with two possible flags:

- `rune-tools --help`: To print the man page.
- `rune-tools --version`: To print current version of rune-tools.

Rune-tools contains three subcommands:

- `create [-a=APP] [-d=DEV] [-b=BUILD]`: Create new projects. This includes tedious tasks such as creating folders and file structures.
  - `-a, --application`: App-ID, example: `myApp`.
  - `-d, --developer`: Developer-ID, example: `vectorpanic`.
  - `-b, --build`: Build version, example: `1.0.0`.
- `update`: Updates the project's Rune version to the latest build.
- `compile [-r]`: Compiles data files (*images, audio files, XML/JSON files, etc..*) into a bundle.
  - `-r, --resource`: Include URI, not Base64.

## Installation

Install with npm:

```bash
npm install -g rune-tools
```

Or download the [source code](https://github.com/VectorPanic/rune-tools) and use `npm link` to create a symlink from rune-tools to npm's global folder. Example:

```bash
npm link ./rune-tools
```

## Example

The following command *creates* a new project folder named `MyApp`, by developer `com.example` of version `1.0.0`.

```bash
rune-tools create -a MyApp -d com.example -b 1.0.0
```

Then navigate into the `MyApp` directory and run `npm update` to download the *Electron* dependency. Use `npm test` to run the `MyApp` project:

```bash
cd ./MyApp
npm update
npm test
```

To update to the latest build of Rune (SDK), run the following command:

```bash
rune-tools update
```