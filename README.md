# MeteorJS + Preact + Vite

## Features:

- Preact is auto imported in all .jsx files by default, so you don't need to keep writing `import { h } from 'preact'` in every file.
- Alias for `react` and `react-dom` is set to `preact/compat` so you can use any react library without any issues. There is no need to install `preact-compat` separately.
- Using Vite for faster development and production builds. Thanks to [Akryum](https://github.com/Akryum) for the [vite:bunlder](https://github.com/Akryum/meteor-vite)

TODO:

- [x] Add `react-meteor-data` to fetch data from Meteor
- [ ] Add Vite SSR
