import React from 'react'

import { Button } from 'pumbaui'
import 'pumbaui/dist/index.css'

const App = () => {
  return (
    <React.Fragment>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="test">Test Button</Button>
      <Button type="link">Link Button</Button>
    </React.Fragment>
  )
}

export default App
