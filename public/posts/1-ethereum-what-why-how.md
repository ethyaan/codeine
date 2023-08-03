---
author: Ehsan Aghaei
authorURL: https://github.com/ethyaan
title: "Ethereum, What? Why? How?"
context: "The overall view of what Ethereum is and how it works"
date: "2023-07-31"
image: "1-ethereum.jpg"
---

In this post we are going to have an overall overview of Ethereum Network which is a very popular Blockchain Project.
We are going to mainly answer these questions, What is Ethereum?, Why Ethereum?, How Ethereum works?

The focus is to not deep dive into technicals to keeping this as simple as possible but in some points it might be little bit technical.

--excerpt--

I’m trying to make this article simple as possible but for your reference this article has some prerequisites so I suggest to make sure you know about below list of subject before you start reading this article.

- Decentralized meaning in IT world
- What is Blockchain?
- Computing or Virtual Machines

## What Is Ethereum?
Ethereum can have different meanings to different people depending on their knowledge like as I describe it below from simplest explanation to the most technical one.

Ethereum is a blockchain project with a token named Ether and it has more functionality and flexibility than it’s parent Bitcoin and since it has a large community and second place in market capitalization it’s very popular.
Ethereum is a **Decentralized BlockChain Network** with ability to run smart contracts that can handled by Ethereum virtual machine or EVM;
Ethereum is an open source & permission-less public BlockChain Network with distributed data source that also offers computing resources on the same network through virtual machines.
I know this is a little bit different from what you’ve expected but YES, Ethereum is not what 90% of the peoples knows, It’s not an asset, It’s something bigger that has a value token which at the same time is an asset too this is only a part of the Ethereum and not whole of the story.

All of the above explanations at the end have the same meaning as the Ethereumis the newer version of blockchain network like Bitcoin.
The Innovation of Ethereum is that It’s gives us this ability to use it’s **resources for computing purposes**, for example like other virtual machines on the network **it allows us to run programs and piece of codes on those virtual machines and it guarantees their execution and their security**. On the other hand Bitcoin does not offer any code execution on it’s network nodes to its users.

**Vitaik Buterin** is the person who was arguing in favor of **scripting** on the Bitcoin network and he published a whitepaper that eventually became Ethereum in 2013.

2014 Viralik with Doctor Gavin wood co-founded the Ethereum network and they have published the Yellow paper that was explaining the implementation details of Ethereum.

In 2015 they released the TestNest version of Ethereum which was for developers to test and report feedbacks and issues along that, the name of this version was Olympics.
In the same year they released the Beta version which was named Frontier.

2016 “homestead” version released which was the first version and during the time Eteherum released many updates on it’s network and one of the most important ones ahead is ETH.2 or Serenity.

## Why Ethereum?
Ethereum is very similar to Bitcoin, Both of these BlockChains have their own value Token which In case of Ethereum it is **ETHER (ETH)**.

In comparison to the Bitcoin BlockTime which is 10 Minutes **Ethereum Block time is only 14 Seconds.** Also block size on Bitcoin is max 1MB and **Ethereum block size is ~2KB**.

About scripting support of Bitcoin, it supports scripting but in a very limited way, for example it doesn’t support loops which is one of the key functionalities in software and programming. But in Ethereum you can write smart contracts with Solidity language which gives you a lot of flexibility.

Ethereum has an EVM (Ethereum Virtual Machine ) feature which is a very powerful feature.

The main reason for Ethereum Network’s popularity is three things.

Ethereum is going to start using Proof of Stake instead of proof of work, which now they are on proof of work consensus model yet and this feature is in test and going to be live soon.
Ethereum can execute smart contracts.
by using the advantages of smart contracts we have Dapps (Decentralized applications) which are the next generation of online applications, (can be a simple application or complex one like DEX or even a Game)


## How does Ethereum work?
Like Bitcoin it has the same structure and blockchain features like being decentralized, safe and secure, value token and … + many new features and upgrades which amongst them there are two which I like to discuss most.

Ability to run code on Nodes in a very flexible way or Smart Contracts by help of EVM
proof of stake instead of proof of work(atm of writing this we are still on POW)

### **Let’s talk about EVM and smart contracts, Wonder how smart contracts work?**

Smart contract is a piece of code that can be written in multiple languages but on Ethereum network Solidity is the most commonly used programming language to write smart contracts. The code lives on the network nodes and can enforce some rules or perform some actions. So the smart contract actually is a bunch of rules and actions and their conditions for execution.

Example: consider I want to buy a product from a seller through a contract.

I as a buyer deposit the product money to the contract and the seller sees that money is available in the contract, the seller ships the goods and shares the receipts to contract, once I as buyer receive the product I trigger the contract to release the asset for the seller.

We can utilize smart contracts for many reasons as we want but executing them is not free and it might charge you some fees depending on the action that it does.
We can execute smart contracts through Ethereum wallets. The most complex contracts are managed by Dapps and not wallets.

So where does this contract executed exactly in nodes? I mean nodes are some bunch of computers with different specification and how does this piece of code runs perfectly in all of them?
Well the answer is that EVM is responsible for this and this code or contract is executed inside the EVM which is Virtual machine, and since this is the virtual machine of Ethereum network it always has the same specification and configuration because it’s virtual.

Now we roughly know what smart contracts are and how they work on this network, let’s check what is proof of works and Proof of Stake.

## Proof of Work(POW)

Currently Bitcoin uses Proof of Work for the security of it’s network which in this consensus model Miners have to validate the transactions and group the transactions to a block, and miner has to provide the proof of work into the block as well,
To generate the proof of work miners have to solve a puzzle, this puzzle can only be solved with a brute force action with possible solutions to find the final solution. The solution is then included in the block as the proof of work,
So multiple computers and miners are in competition to find the solution and the first one who finds the solution will get a reward. This is the main reason why Bitcoin or Ethereum mining are so resource consuming like the Internet, CPU, GPU, RAM, Electricity.

The difficulty of this puzzle also changes, as mentioned before the average block generation time is around 10 minutes, if a block gets generated in 8 minute due to many transactions the puzzle difficulty will be higher for the next block to ensure that the block gets generated in around the same 10 minutes time not earlier or later.
Describing the puzzle itself and the hashing algorithm and protocols are not subject to this document because they are way too technical to be included here.

## Proof Of Stake

The goal of proof of stake is the same as proof of work to validate the transactions and blocks but with this difference that in this model not all nodes are doing this puzzle solving and calculation, only one node will do this and that node will be selected by the network through an algorithm and strategy. And the stakes of each node can decide changes of getting picked for validation and reward.

Unlike Proof of Work (PoW), where participants (miners) solve complex mathematical puzzles to compete for the right to add a new block, PoS selects block validators based on the number of coins they hold and are willing to "stake" as collateral.

One critical aspect of PoS is the concept of "slashing." If a validator is found to behave maliciously or attempt to double-spend coins, a portion or all of their staked coins can be forfeited or "slashed" as a punishment. This penalty serves as a deterrent against dishonest behavior, encouraging validators to maintain the network's security and integrity.

Overall, Proof of Stake provides an alternative and energy-efficient consensus mechanism for blockchain networks. It aligns the interests of participants with the network's security and encourages them to hold and stake coins to participate in block validation.
