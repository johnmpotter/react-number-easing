Forked project - using React.Component

## Usage.

```jsx
import NumberEasing from './react-number-easing.jsx';

<NumberEasing
  value={15}
  speed={300}
  ease='quintInOut' />
```

### Props

* `value`: The value that you want to display at the end of the animation.
* `[speed]`: How fast do you want to finish the animation? Defaults to 500ms.
* `[useLocaleString]`: Should use `toLocaleString()`?
* `[ease]`: The easing equation for the animation. Defaults to `quintInOut`. You can choose from [mattdesl/eases](https://github.com/mattdesl/eases/blob/master/index.js).

# Development

* Git clone or download
* npm install
* npm start
* go to localhost:3000 in a browser

