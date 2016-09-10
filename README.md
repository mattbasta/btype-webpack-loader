# btype-webpack-loader

A Webpack loader for BType files

## Installation

```sh
npm install --save-dev btype-webpack-loader
```

In your Webpack configuration:

```
{
    module: {
        loaders: [
            {
                test: /\.bt$/,
                loader: 'btype-webpack-loader'
            }
        ]
    }
}
```

## Notes

- The BType source will always be compiled to JS, not asm.js or another compile target.
- Loading with Webpack does not support the BType runtime. BType files are treated as libraries, not standalone files.
