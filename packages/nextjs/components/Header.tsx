import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useIsMounted } from "usehooks-ts";
import { useAccount, useBalance, useNetwork, useSwitchNetwork } from "wagmi";
import { ArrowsRightLeftIcon, Bars3Icon, BugAntIcon, ChevronDownIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { enabledChains } from "~~/services/web3/wagmiConnectors";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      passHref
      className={`${
        isActive ? "bg-secondary shadow-md" : ""
      } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
    >
      {children}
    </Link>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  const { setUiChain, uiChain } = useGlobalState();
  const { isConnected, address: connectedAddress } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const isMounted = useIsMounted();

  useEffect(() => {
    (async () => {
      if (isConnected && chain?.id) {
        setUiChain(chain);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected, chain?.id]);

  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  const navLinks = <></>;

  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 flex flex-row-reverse"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              {navLinks}
            </ul>
          )}
        </div>
        <span className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <span className="text-6xl text-lime-500">
            Bar
            <span className="inline-flex relative w-14 h-14 top-1">
              <Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.svg" />
            </span>
            Raise
          </span>
        </span>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
        <div className="dropdown dropdown-end hidden md:block">
          <label tabIndex={0} className="btn btn-success btn-sm dropdown-toggle">
            <span>{uiChain.name}</span>
            <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 mt-1 shadow-lg bg-base-100 rounded-box ">
            {enabledChains.map(chain => (
              <li key={chain.id}>
                <button
                  className="menu-item"
                  type="button"
                  onClick={() => {
                    setUiChain(chain);
                    if (isConnected) {
                      switchNetwork?.(chain.id);
                    }
                  }}
                >
                  <ArrowsRightLeftIcon className="h-6 w-4 ml-2 sm:ml-0" />
                  <span className="whitespace-nowrap">
                    Switch to <span>{chain.name}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <FaucetButton />
      </div>
    </div>
  );
};
