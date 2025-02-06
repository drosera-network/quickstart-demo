"use client";

import React from "react";
import { WagmiProvider } from "wagmi";
import {
  injectedWallet,
  walletConnectWallet,
  braveWallet,
  coinbaseWallet,
  rainbowWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

export const queryClient = new QueryClient();

const wallets = [
  {
    groupName: "Recommended",
    wallets: [
      injectedWallet,
      walletConnectWallet,
      coinbaseWallet,
      braveWallet,
      rainbowWallet,
    ],
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const config = getDefaultConfig({
  appName: "Your App Name",
  projectId: "",
  chains: [],
  wallets,
  ssr: true,
});

export const Web3Provider = ({ children }) => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider locale="en-US">{children}</RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);
