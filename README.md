# BarnRaise

## Summary

BarnRaise is a DAO that revolutionizes the concept of community-supported agriculture (CSA), empowering small farms and bringing together local communities. Members of the DAO can purchase shares to support local farms with little additional cost or effort from the farmer.

!["Gif Demo of BarnRaise"](BanRaiseDemo.gif)

[Demo video](https://youtu.be/5SrnX9IHObs)


## Description

Small farms in the US have long grappled with funding challenges, exacerbated by the modern industrialization of agriculture and the dominance of large corporations. In the 1990s, small farms accounted for nearly 50% of US food production; today, that number has dwindled to a mere 25%.

Enter community-supported agriculture (CSA), a potential remedy for these farmers. CSA operates on a simple premise: consumers pay a subscription fee at the start of the planting season, and in return, receive regular boxes of fresh produce throughout the harvest season. This arrangement benefits farmers by providing upfront capital for expenses like seeds, while also mitigating the risk of poor harvests.

However, CSA can be burdensome for farmers, especially during the busy pre-season. Coupled with the increasing median age of farmers, this model's scalability and sustainability face uncertainty. Furthermore, the traditional CSA model offers consumers limited insight into the risks they share in exchange for variable food quantities and quality.

This is where BarnRaise steps in, leveraging the potential of Web3 to revitalize the CSA model and create mutual benefits for all involved parties.

In its current iteration for this hackathon, our focus centers on membership and payment infrastructure for an on-chain CSA. Our application utilizes Unlock Protocol to enable consumers to purchase three distinct share boxes across three compatible chains: Celo, Base, and Gnosis Chain. Customers can acquire these boxes using either USDC or traditional fiat, thanks to Unlock's seamless integration with Stripe for farmer-friendly crypto onboarding.

Looking forward, we're just beginning to explore the expansive possibilities offered by Unlock Protocol memberships. We plan to introduce additional perks for subscribers, including discounts at local restaurants, exclusive event access, and membership in a private Discord community. On a grander scale, BarnRaise aims to evolve into a DAO-of-DAOs, uniting numerous local sub-DAOs with a shared vision of creating fairer and more engaging food economies.

Harnessing the potential of Web3, our DAO will enable contributions of time and capital to support not just one farm but an interconnected network of farms. This approach enhances resilience and fosters a stronger sense of community among a group of dedicated farmers. BarnRaise is set to revolutionize CSA, making it not just a community-supported venture but a Web3-powered movement for the future.

## How It's Made

Our project was meticulously crafted with attention to detail and a focus on user experience. We harnessed the design assets from Nouns DAO in Figma, ensuring a visually captivating interface that resonates with users. Even our logo proudly bears the Nounified touch! On the frontend, we relied on scaffold.eth as our foundation, integrating components from Material UI, RainbowKit, and TailwindCSS to create an elegant and seamless user interface. Under the hood, we employed Scaffold-ETH 2 for the frontend application and Unlock Protocol's Lock contracts on the backend. Notably, each subscription tier—small, medium, and large box—functions as a Lock NFT contract, skillfully deployed and configured via the Unlock dashboard. It's worth mentioning that we ventured into a bit of hacky territory with Scaffold-ETH to facilitate chain switching, albeit our "switch networks" dropdown selector encountered a hiccup along the way. For a smoother experience, we recommend adjusting chains directly in your wallet and connecting exclusively to the three chains we've deployed to.

## Contracts

### Gnosis Chain
Small box: 0x1ab8ada45bd1988c48f3361f110fb5b9e53ecdc3
Medium box: 0x6c16091bb527b8a30ed97611440c149f019748e7
Large box: 0x03ce835db6fb64797e635c17555880966f6441e0

### Celo
Small box: 0x1ab8ada45bd1988c48f3361f110fb5b9e53ecdc3
Medium box: 0x92c6c51313a7d43c7eae7fa6251da7603d62111b
Large box: 0x2e118d67423606e513be076d7b0e9d95d63e644d

### Base
Small box: 0x4a2f88603aba4c87f200e8949806f94c818821c2
Medium box: 0x7f6c45ff6fd07024d3580de780127e5a292aee41
Large box: 0xc68e4740f19476dacfa96f216ce46ea9c5579da3

----------------------------

# 🏗 Scaffold-ETH 2

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a>
</h4>

🧪 An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Debug Contracts tab](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/1171422a-0ce4-4203-bcd4-d2d1941d198b)

## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`

## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
