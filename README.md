
# Events for scrollstart & scrollstop

[![NPM version](https://img.shields.io/npm/v/scroll-start-stop-events)](https://www.npmjs.com/package/scroll-start-stop-events)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/scroll-start-stop-events?label=size)](https://bundlephobia.com/result?p=scroll-start-stop-events)
[![GitHub license](https://img.shields.io/github/license/formfcw/scroll-start-stop-events)](./LICENSE)

Simple and lightweight package to apply `scrollstart` and `scrollstop` events, which are triggered at the beginning and the end of a `scroll` event.



## Installation

```bash
npm i scroll-start-stop-events
```
or

```bash
yarn add scroll-start-stop-events
```

## Usage

Import `scroll-start-stop-events` to apply `scrollstart` and `scrollstop` events to the `window` object.

```js
import 'scroll-start-stop-events'
```

Add event listeners:

```js
window.addEventListener('scrollstart', scrollstartHandler);
window.addEventListener('scrollstop', scrollstopHandler);
```

Remove event listeners:

```js
window.removeEventListener('scrollstart', scrollstartHandler);
window.removeEventListener('scrollstop', scrollstopHandler);
```

## API

For more control import the default function from `scroll-start-stop-events/api`.

```js
import applyScrollStartStopEvents from 'scroll-start-stop-events/api'

applyScrollStartStopEvents(window, 200, 'isScrolling')
```

Parameters:
- `element` … the element to apply the scroll events to (default: `window`)
- `stopDelay` … the delay in `ms` after the `scrollstop` event should fire, when scrolling stops (default: `200`)
- `isScrolling` … the name of the property that is attached to the `element` – will be `true` while scrolling (default: `'isScrolling'`)

To check if the `element` is currently scrolling, simply use its property `element.isScrolling`
