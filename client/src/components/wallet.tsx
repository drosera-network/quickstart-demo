import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Wallet = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className="btn-primary rounded-2xl px-6 py-3 text-sm font-semibold text-white transition-all duration-200"
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className="btn-primary rounded-2xl px-6 py-3 text-sm font-semibold text-white transition-all duration-200"
                  >
                    Wrong Network
                  </button>
                );
              }

              return (
                <div className="flex items-center gap-2">
                  <button
                    onClick={openChainModal}
                    className="btn-primary rounded-2xl px-6 py-3 text-sm font-semibold text-white transition-all duration-200"
                  >
                    {chain.hasIcon && (
                      <span
                        className="mr-2 inline-block"
                        style={{
                          width: 12,
                          height: 12,
                          background: chain.iconBackground,
                          borderRadius: "50%",
                          overflow: "hidden",
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: "100%", height: "100%" }}
                          />
                        )}
                      </span>
                    )}
                    {chain.name}
                  </button>
                  <button
                    onClick={openAccountModal}
                    className="btn-primary rounded-2xl px-6 py-3 text-sm font-semibold text-white transition-all duration-200"
                  >
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default Wallet;
