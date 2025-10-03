<div align="center" id="top">
    <img src="https://raw.githubusercontent.com/Bracketed/Bracketed-Packages/main/assets/LogoText.png" alt="Bracketed logo" width="800"/>
    Team Bracketed - <a href="https://bracketed.co.uk" >Website</a> | <a href="https://bracketed.co.uk/discord" >Discord</a> | <a href="https://github.com/Bracketed" >Github</a>
</div>

<br>

<h2 align="center" >@bracketed/logger</h2>

An alternative to your run-of-the-mill node console logging functions!
This is a package built from the source code of [@sapphire/framework](https://www.npmjs.com/package/@sapphire/framework) & [@sapphire/plugin-logger](https://www.npmjs.com/package/@sapphire/plugin-logger) to allow usage of Sapphire's logger features in regular Node.js, full credit to the authors of the pieces of code that this package is made from.

<h2>What is this?</h2>

\- A Logger package built from [@sapphire/framework](https://www.npmjs.com/package/@sapphire/framework) & [@sapphire/plugin-logger](https://www.npmjs.com/package/@sapphire/plugin-logger) that uses [colorette](https://www.npmjs.com/package/colorette) for styling.

<h2>Summary (Directory)</h2>

-   [Installation](#Installation)
      <!--truncate-->
    -   [Yarn](#YarnInstall)
    -   [Npm](#NpmInstall)
-   [Usage](#Usage)
-   [Contribution](#Contribution)
-   [ChangeLog](#versionlog)

<h2 id="Installation">Installation</h2>

Install via `yarn` or `npm`:

<p id="YarnInstall">Yarn:</p>

```sh
yarn add @bracketed/logger
```

<p id="NpmInstall">Npm:</p>

```sh
npm install --save @bracketed/logger
```

<h2 id="Usage">Usage</h2>

```ts
// ESM
import { Logger, LogLevel } from '@bracketed/logger';
const console = new Logger();

console.info('Hello World!');
console.debug('Hello World!');
console.warn('Hello World!');
console.error('Hello World!');
console.fatal('Hello World!');
console.trace('Hello World!');
console.write(LogLevel.Info, 'Hello World!');
```

```ts
// CJS
const { Logger, LogLevel } = require('@bracketed/logger');
const console = new Logger();

console.info('Hello World!');
console.debug('Hello World!');
console.warn('Hello World!');
console.error('Hello World!');
console.fatal('Hello World!');
console.trace('Hello World!');
console.write(LogLevel.Info, 'Hello World!');
```

<h1 id="Contribution">Contribution & Help</h1>

Feel free to contribute to this project, join our [discord](https://bracketed.co.uk/discord) and help us with future development of Project Bracketed.
Please also notify us of errors within our projects as we may not be aware of them at the time.

<br>

<div align="center" style="font-weight: bold">
    <h2>Thanks for using our packages!</h2>
    <img src="https://github.com/Bracketed/Branding/blob/main/Banners/LogoBannerTextMini.png?raw=true" alt="Bracketed logo" width="900" style="border-radius: 25px" />
    Team Bracketed - <a href="https://bracketed.co.uk" >Website</a> | <a href="https://bracketed.co.uk/discord" >Discord</a> | <a href="https://github.com/Bracketed" >Github</a> | <a href="https://twitter.com/teambracketed" >Twitter</a> | <a href="#top" >Back To The Top</a>
    <br>
    <br>
    <img src="https://discordapp.com/api/guilds/1041758035355369542/widget.png?style=banner2" alt="Discord Banner" href="https://bracketed.co.uk/discord"/>
</div>
