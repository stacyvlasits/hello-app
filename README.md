# hello-app
Sample Share App

Hello App is an App for the [Buildrs Share BIM platform](https://github.com/buildrs/Share).  It is intended to be used by developers as a demonstration of the basic architercture of an App.

## Install
Hello App requires a working installation of the Buildrs Share platform. 
To use it, add it as an npm dependency of your installation of Buildrs Share.

```
# Add hello-app as a dependency to your Buildrs Share installation 
> yarn add @stacyvlasits/hello-app

```

## Usage
app.jsx
```
import React from 'react';
import HelloApp from 'from 'stacyvlasits/hello-app';';


function App() {
    return (
        <HelloApp />
    );
}

export default App;
```
