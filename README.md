HTMLSourceIncluder
==================
[![Build Status](https://travis-ci.org/edgy360/HTMLSourceIncluder.svg?branch=develop)](https://travis-ci.org/edgy360/HTMLSourceIncluder)

A basic Node.js utility for managing HTML code.

The purpose of this utility is to provide a simple way of quickly including static files on multiple pages (for example, a footer or sidebar), saving the process of manually editing multiple files.

## Installation

This project is still in a very early development stage. To install it, please clone this directory and install using npm.

```
sudo npm install -g .
```

You will need at least Node.js version 0.8.0. 0.6.0 is unsupported due to the lack of `existsSync` in the `fs` module.

Installation using npm is not required. See below for how to run the includer manually.

## Usage

After installing, you should have the `htmlsi` command (short for HTMLSourceIncluder).

To use the includer, simply run the command in the base of the directory that you want to process.

You can also use it without npm installation. Just run `includer.js` from `src`.

### Directory Structure

At the moment the includer requires a specific directory name of `include` for any included files and `source` for files that are to be processed.

 * Base Directory
   * source
   * include
   * *output*

In the future there should be paramaters that allow different names to be specified.

### Including Files

To include files, simply reference them using the include syntax below.

```
<!-- INCLUDE file.html -->
```

### Output

The script will process any files from the source directory and save them to the `output` directory. If this does not exist then it will be created.

## Branches

[Git flow](https://www.atlassian.com/git/workflows#!workflow-gitflow) is used on this repositry. `master` contains the latest stable release of the project. General development takes place in the `develop` branch.

## Contributing

Contributions are welcomed to this project. Please see the [GitHub Fork a Repo guide](https://help.github.com/articles/fork-a-repo) for the process.

Pull requests should be made to the `develop` branch.
