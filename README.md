# pumbaui

> Simple ui buttons

[![NPM](https://img.shields.io/npm/v/pumbaui.svg)](https://www.npmjs.com/package/pumbaui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save pumbaui
```

## Usage

```jsx
import React, { Component } from 'react'

import {Button} from 'pumbaui'
import 'pumbaui/dist/index.css'

class Example extends Component {
  render() {
    return (
      <React.Fragment>
        <Button type='primary'>Primary Button</Button>
        <Button>Default Button</Button>
        <Button type='dashed'>Dashed Button</Button>
        <Button type='test'>Test Button</Button>
        <Button type='link'>Link Button</Button>
      </React.Fragment>
    )
  }
}
```

## License

MIT © [kemalege](https://github.com/kemalege)
