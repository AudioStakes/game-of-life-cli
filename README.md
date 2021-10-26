# game-of-life-cli

A Node.js CLI application of Conway's Game of Life that supports specifying the display strings of alive and dead cells.

## Install

```bash
$ npm install --global game-of-life-cli
```

## Usage

```bash
$ game-of-life-cli --help

Usage: game-of-life-cli [options]

A Node.js CLI application of Conway's Game of Life that supports specifying the display strings of alive and dead cells.

Options:
  -c, --columnCount <number> Specify the number of columns on the board (default: 15)
  -r, --rowCount <number>    Specify the number of rows on the board (default: 15)
  -t, --time <number>        Specify the time interval on the order of milliseconds to step to the next generation (default: 500)
  -a, --alive <string>       Specify the display string of alive cells (default: '■')
  -d, --dead <string>        Specify the display string of dead cells (default: '□')
  -h, --help                 Display help for command
```

## Demo

`$ game-of-life-cli`

![life_default](https://user-images.githubusercontent.com/15713392/137268572-e8ba069b-3cf5-4ad0-a466-1397bb338857.gif)


You can specify the display strings of alive and dead cells.

`$ game-of-life-cli --alive 😃 --dead 👻`

![life_custom](https://user-images.githubusercontent.com/15713392/137269341-17ab8b97-5041-4e2f-a9a0-deef270138a1.gif)
