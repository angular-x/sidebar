<a href="https://github.com/angular.x">
  <img
    src="https://avatars.githubusercontent.com/u/228049771?s=250&u=685bb186a6db698ce291ea8e3d066c708678bd47&v=4"
    title="@angular.x/sidebar - An Angular library for sidebar."
  />
</a>

## @angular.x/sidebar

<!-- npm badge -->
[![npm version][package-npm-badge-svg]][package-npm-badge]
[![GitHub issues][package-badge-issues]][package-issues]
[![GitHub license][package-badge-license]][package-license]

[![GitHub forks][package-badge-forks]][package-forks]
[![GitHub stars][package-badge-stars]][package-stars]

An **Angular** library for sidebars.

## Table of contents

- [Demo](#demo)
- [Installation](#installation)
- [Api](#api)
  - Component
    - [`Sidebar`](#sidebar)
  - Token
    - [`SIDEBAR_CONFIGURATION`](#sidebar_configuration)
  - Interface
    - [`SidebarConfiguration`](#sidebarconfiguration)
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)

## Demo

You can find a demo of the package in the [demo](https://github.com/angular-x/sidebar/tree/main/demo) folder.

## Installation

```bash
npm install @angular.x/sidebar --save-peer
```

## Api

```typescript
import {
  // Component.
  Sidebar,
  // Token.
  SIDEBAR_CONFIGURATION,
  // Interface.
  SidebarConfiguration
} from '@angular.x/sidebar';
```

### Component

### `Sidebar`

```typescript
import { Sidebar } from '@angular.x/sidebar';
```

### Token

### `SIDEBAR_CONFIGURATION`

```typescript
import { SIDEBAR_CONFIGURATION } from '@angular.x/sidebar';
```

### Interface

### `SidebarConfiguration`

```typescript
import { SidebarConfiguration } from '@angular.x/sidebar';
```

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [4Fund](https://4fund.com/bruubs)
- [DonorBox](https://donorbox.org/become-a-sponsor-to-the-angular-package?default_interval=o)
- [GitHub](https://github.com/sponsors/angular-package/sponsorships?sponsor=sciborrudnicki&tier_id=83618)
- [Ko-fi](https://ko-fi.com/sterblack)
- [OpenCollective](https://opencollective.com/sterblack)
- [Patreon](https://www.patreon.com/checkout/angularpackage?rid=0&fan_landing=true&view_as=public)
- [PayPal](https://paypal.me/sterblack)
- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- ~~[Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)~~

or via Trust Wallet

- [BNB](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)
- [BTC](https://link.trustwallet.com/send?coin=0&address=bc1qnf709336tfl57ta5mfkf4t9fndhx7agxvv9svn)
- [ETH](https://link.trustwallet.com/send?coin=60&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)
- [USDT (BEP20)](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94&token_id=0x55d398326f99059fF775485246999027B3197955)
- [XLM](https://link.trustwallet.com/send?coin=148&address=GAFFFB7H3LG42O6JA63FJDRK4PP4JCNEOPHLGLLFH625X2KFYQ4UYVM4)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular.x ([license][package-license])

<!-- This package: angular.x  -->
  <!-- GitHub: badges -->
  [package-badge-issues]: https://img.shields.io/github/issues/angular-x/sidebar
  [package-badge-forks]: https://img.shields.io/github/forks/angular-x/sidebar
  [package-badge-stars]: https://img.shields.io/github/stars/angular-x/sidebar
  [package-badge-license]: https://img.shields.io/github/license/angular-x/sidebar
  <!-- GitHub: badges links -->
  [package-issues]: https://github.com/angular-x/sidebar/issues
  [package-forks]: https://github.com/angular-x/sidebar/network
  [package-license]: https://github.com/angular-x/sidebar/blob/master/LICENSE
  [package-stars]: https://github.com/angular-x/sidebar/stargazers
<!-- This package -->

<!-- Package: angular.x -->
  <!-- npm -->
  [package-npm-badge-svg]: https://badge.fury.io/js/@angular.x%2Fsidebar.svg
  [package-npm-badge]: https://badge.fury.io/js/@angular.x%2Fsidebar

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
