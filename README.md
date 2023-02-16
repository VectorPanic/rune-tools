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

Download the source code and use `npm link` to create a symlink from rune-tools to npm's global folder. Example:

```bash
$ npm link ./rune-tools
```