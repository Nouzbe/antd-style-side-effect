This repo aims at providing a simple example for [ant-design/issues/13436](https://github.com/ant-design/ant-design/issues/13436)

### Summary of the issue

The issue is probably related to [ant-design/issues/13169](https://github.com/ant-design/ant-design/issues/13169)
Antd's css affect elements that are not necessarily rendered by antd.

These side-effects are grouped in [antd-design/components/style/core/base.less](https://github.com/ant-design/ant-design/blob/master/components/style/core/base.less).

Even though I believe that libraries should not do side-effects in general, I don't have any real problem with these, except for one:

```
*,
*::before,
*::after {
  box-sizing: border-box; // 1
}
```

This one in particular makes it hard to integrate Antd in an already existing application, because it affects the layout, as this repository illustrates.

### Reproduction

- Install by running `yarn` or `npm install`.
- Start by running `yarn start` or `npm run start`.
- Notice that the app is simply an orange div taking up 100% of your browser's window height.
- Import Antd's css by uncommenting [src/App.jsx#L3](https://github.com/Nouzbe/antd-style-side-effect/blob/master/src/App.jsx#L3)
- Notice that the app shrinked and does not take up 100% of the height any more.

Of course that's just a simple example. On a real world project, the DOM can easily be a few dozens levels deep, and this can happen at each level, breaking heights and widths recursively.

### What I tried

I tried to add a build step to remove these lines from the css ressources and add instead:

```
*[class^="ant-"],
*[class^="ant-"]::before,
*[class^="ant-"]::after {
  box-sizing: border-box;
}
```

Unfortunately it does not work perfectly: Antd also renders elements that don't have a CSS className (and that are therefore not matchable generically by a selector like the previous one) but that still relie on that box-sizing value to be displayed correctly. And even if it worked, that's pretty advanced and we probably don't want Antd users to have to do this kind of things when they integrate the lib.

Projects could also explicitely define the box-sizing to be "initial" for all their own elements. That would work. But:

- It's a painful thing to do: you basically have to match all your elements. This pain is a potential reason to not choose Antd.
- It's simply not possible for elements that are out of the project's reach: for instance elements that are rendered by other third party libraries.

### Potential fix

I believe that fixing this implies removing this global rule and add `box-sizing: border-box` to each individual element that needs it. I admit that it would be a big change in terms of number of lines.
