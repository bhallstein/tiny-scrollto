# tiny-scrollto

### Install

```js
npm install -S tiny-scrollto
```

### Use

```js
import {scroll} from 'tiny-scrollto'

scroll(500)
scroll('end')  // Scroll to end of document
```

`tiny-scrollto` also exports a `clamp` utility function:

```js
import {clamp} from 'tiny-scrollto'

const x = clamp(x, 0, 1)  // Clamp x to the range 0-1
```
