# WynnSelectReceivers

自定义元素（Web Elements） wynn-select-receiver 的源代码。

## 测试

在 `app.module.ts` 文件的 `bootstrap` 加上 `TestComponent`，运行 `ng serve --open --port 4201` 可以在 `http://localhost:4201` 看到测试效果。

## Build

编译之前去掉 `app.module.ts` 文件中 `bootstrap` 中的 `TestComponent`。执行 `ng build` 编译项目，输出文件在 `dist/` 目录下。

`dist/` 文件夹下有一个 `test.html` 可以用来测试编译过后的代码。
