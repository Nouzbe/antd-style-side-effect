This repo aims at providing a simple example for <Issue link>

### Summary of the issue

Antd's css resources affect elements that are not necessarily rendered by antd.
These side-effects are grouped in [antd-design/components/style/core/base.less](https://github.com/ant-design/ant-design/blob/master/components/style/core/base.less).

Even though I believe that libraries should not do side-effects, I don't have any real problem with these, except for one:

```
*,
*::before,
*::after {
  box-sizing: border-box; // 1
}
```

This one in particular makes the integration of `antd` in an already existing application quite complex, because it affects the layout, as this repository illustrates.

### Reproduction

- Install by running `yarn` or `npm install`.
- Start by running `yarn start` or `npm run start`.
- Notice that the app is simply an orange div taking up 100% of your browser's window height.
- Uncomment <link to line>
- Notice that the app shrinked and does not take up 100% of the height any more.
