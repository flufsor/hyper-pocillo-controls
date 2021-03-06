# hyper-pocillo-controls
Pocillo-themed window controls for [Hyper](https://github.com/zeit/hyper).

A plugin that makes the close, minimize, and maximize buttons look like the [Pocillo GTK Theme](https://github.com/UbuntuBudgie/pocillo-gtk-theme) window controls, replacing the Windows 10-themed window controls. This plugin has been thoroughly tested in Ubuntu and Windows 10, and works with both `v1.4.8` (old stable) and the `v2.0.0` canary and stable versions.

Based on the [Pocillo GTK Theme](https://github.com/UbuntuBudgie/pocillo-gtk-theme) source, this plugin aims to match the built-in theme shipped with [Ubuntu Budgie](https://ubuntubudgie.org) 18.04 LTS. You're ~welcome~ encouraged to fork this project and modify it if you need to tinker with the colors, or create a PR if I missed something that needs fixing.

This plugin is heavily inspired by my other window controls project for Hyper: [hyper-arc-dark-controls](https://github.com/moso/hyper-arc-dark-controls), which is why you'll see a lot of similar code between those two projects.

![screenshot](https://dev.moso.io/hyper/hyper-pocillo-controls/screenshot.png)

### Note

Besides theming the window controls, this plugin is also theming the window header of the Hyper window. And while it's designed to work perfectly with the `hyperterm-atom-dark`-theme, it also integrates fine with vanilla-themed Hyper. However, I cannot take every theme and plugin into account.
If the plugin doesn't look great on `xyz`-theme, then please do create an issue and I will look into it. But since I don't own a Mac, I cannot test the plugin on every OS, although it's been tested on Linux and Windows 10 which is what I have available.

### Changelog

**1.0.0**
- Stable release
- Documentation changes

**1.0.0-beta**
- Added check for `showWindowControls: 'left'` ([`5cb13e8`](https://github.com/moso/hyper-pocillo-controls/commit/5cb13e8a8541250a1c04efb797cf7a4847eed28e)).
- Added check for `showWindowControls: false` ([`90f38d8`](https://github.com/moso/hyper-pocillo-controls/commit/90f38d8771ef3d205e06c366cf1f2a5ddafcebd9)).
- Added variables instead of static values ([`424e3a6`](https://github.com/moso/hyper-pocillo-controls/commit/2ff955397f424e3a6d4ecd220e928d0a90a087d7)).

**1.0.0-alpha**
- Initial commit.

### Install

**Hyper store**:

```
hyper i hyper-pocillo-controls
```

**Manually**:

1. Open Hyper's preferences with `Ctrl+,` (or manually at `~/.hyper.js`) with your editor.
2. Update your list of plugins to include `hyper-pocillo-controls`, like so:

        plugins: [
            'hyper-pocillo-controls'
        ],

3. Reload (`Ctrl+Shift+R`) or restart Hyper and voila!

**hpm (1.4.8)**:

1. Install using `hpm i hyper-pocillo-controls`
2. Reload (`Ctrl+Shift+R`) or restart Hyper and voila!

### Configuration

You can configure the window controls like you would in your `~/.hyper.js`.

- `showWindowControls: true` - default, will display the window controls on the right.
- `showWindowControls: 'left'` - will display the window controls to the left, like on a Mac.
- `showWindowControls: false` - will disable the window controls and only theme the header.

### To Do

- Config for Pocillo Light.
- Create a check to see if the window is focused, and add a class if not, so the window controls will be "faded" like on real window controls.


### Related
- [hyper-arc-dark-controls](https://github.com/moso/hyper-arc-dark-controls)
- [hyper-dark-scrollbar](https://github.com/moso/hyper-dark-scrollbar)

### License

- The code is released under the MIT license
- The inline SVGs are licensed under CC BY-SA 4.0
