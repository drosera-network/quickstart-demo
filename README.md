# Create Drosera App

This repo is for quickly bootstrapping a new Drosera project. It includes instructions for creating your first trap, deploying it to the Drosera network, and hooking up a Next.js frontend.

[![view - Documentation](https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge)](https://dev.drosera.io "Project documentation")

## Configure dev environment
    curl -L https://foundry.paradigm.xyz | bash
    foundryup
    
    # The trap-foundry-template utilizes node modules for dependency management
    # install Bun (optional)
    curl -fsSL https://bun.sh/install | bash
    
    # install node modules
    bun install
    
    # install vscode (optional)
    # - add solidity extension JuanBlanco.solidity
    
    # install drosera-cli
    curl -L https://app.drosera.io/install | bash
    droseraup
## Quick Start

**Hello World Trap**
The drosera.toml file is configured to deploy a simple "Hello, World!" trap. Ensure the drosera.toml file is set to the following configuration:

First, fund your Holesky wallet address. To do this, create a custom testnet in your wallet and populate it with the following:

Network name - Holesky
Default RPC URL - https://ethereum-holesky-rpc.publicnode.com
Chain ID - 17000
Currency Symbol - ETH

![](https://paper-attachments.dropboxusercontent.com/s_4AC1DC79B3FC61B2CC5DEFCDA1A8C24EB736D94F373298D910A2F45485CEC851_1739090651556_Screen+Shot+2025-02-09+at+9.44.05+AM.png)


After creating the testnet account, fund the account with the Holesky testnet faucet from [here](https://drosera-network.github.io/trap-faucet-example/). 

Copy the account's private key and store it in the `drosera.toml` or include it directly into the command.


    response_contract = "0xdA890040Af0533D98B9F5f8FE3537720ABf83B0C"
    response_function = "helloworld(string)"

To deploy the trap, run the following commands:

    # Compile the Trap
    forge build
    
    # Deploy the Trap
    DROSERA_PRIVATE_KEY=<private_key> drosera apply

After successfully deploying the trap, the CLI will add an `address` field to the `drosera.toml` file.

![](https://paper-attachments.dropboxusercontent.com/s_4AC1DC79B3FC61B2CC5DEFCDA1A8C24EB736D94F373298D910A2F45485CEC851_1739090965485_Screen+Shot+2025-02-09+at+9.49.20+AM.png)


Congratulations! You have successfully deployed your first trap!

**Response Trap**
You can then update the trap by changing its logic and recompiling it or changing the path field in the `drosera.toml` file to point to the Response Trap.

The Response Trap is designed to trigger a response at a specific block number. To test the Response Trap, pick a future block number and update the Response Trap.

Specify a response contract address and function signature in the drosera.toml file to the following:


    response_contract = "0xdA890040Af0533D98B9F5f8FE3537720ABf83B0C"
    response_function = "responseCallback(uint256)"

Finally, deploy the Response Trap by running the following commands:


    # Compile the Trap
    forge build
    
    # Deploy the Trap
    DROSERA_PRIVATE_KEY=0x.. drosera apply


![](https://paper-attachments.dropboxusercontent.com/s_4AC1DC79B3FC61B2CC5DEFCDA1A8C24EB736D94F373298D910A2F45485CEC851_1739091810342_Screen+Shot+2025-02-09+at+10.03.18+AM.png)

    Note: The `DROSERA_PRIVATE_KEY` environment variable can be used to deploy traps. You can also set it in the drosera.toml file as `private_key = "0x.."`.
## Testing

Example tests are included in the `tests` directory. They simulate how Drosera Operators execute traps and determine if a response should be triggered. To run the tests, execute the following command:


    forge test


