import Image from "next/image";
import Link from "next/link";
import Avatar from "./Avatar";
import type { NextPage } from "next";
import { useAccount, useNetwork } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { locks, usdc } from "~~/services/unlock/locks";
import { getTargetNetwork, notification } from "~~/utils/scaffold-eth";

const User: NextPage = () => {
  const chainObj = useNetwork();
  const { address } = useAccount();
  const chain = chainObj.chain ? chainObj.chain : getTargetNetwork();

  const { data: isManagerSmall } = useScaffoldContractRead({
    contractName: "SmallLock",
    functionName: "isLockManager",
    args: [address],
  });

  const { data: isManagerMedium } = useScaffoldContractRead({
    contractName: "MediumLock",
    functionName: "isLockManager",
    args: [address],
  });

  const { data: isManagerLarge } = useScaffoldContractRead({
    contractName: "LargeLock",
    functionName: "isLockManager",
    args: [address],
  });

  const checkSelfBuy = (isManager: boolean) => {
    if (isManager) {
      notification.error("Cannot buy your own shares!");
    }
  };

  return (
    <>
      <MetaHeader title="Shop CSA Shares | BarnRaise" description="Shop CSA Shares">
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree&display=swap" rel="stylesheet" />
      </MetaHeader>
      <Avatar role="Community Member" href="/farmer" bgColor="#5B3130" switchRole="Farmer" avatar="/UserAvatar.png" />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="">
            <span className="block text-6xl">Welcome to</span>
            <span className="hidden lg:flex items-center gap-2 shrink-0">
              <span className="text-8xl text-lime-500">
                Bar
                <span className="inline-flex relative w-14 h-14 top-1">
                  <Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.svg" />
                </span>
                Raise
              </span>
            </span>
            <span className="block text-2xl mt-2">Get started by selecting your desired share size!</span>
          </h1>
        </div>

        <div className="flex-grow bg-base-100 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row text-base-200 text-xl px-10 py-3 rounded-2xl font-regular mt-5">
            <div className="flex flex-col px-5 py-8 text-center items-center max-w-xs rounded-2xl bg-base-300 text-base-200 h-64 w-80">
              <h1 className="text-xl px-10">Small Boxes</h1>
              <p className="text-base">
                Small boxes contain enough produce to feed a family of <b>4 adults</b> for approximately{" "}
                <b>2 to 3 days</b>.
              </p>
              <Link href={isManagerSmall ? "" : locks[chain!.id as keyof typeof locks]?.small!.checkout || "/"}>
                <button
                  className="btn btn-lg bg-secondary text-base-200 hover:bg-base-200 hover:text-secondary border-0"
                  onClick={() => checkSelfBuy(isManagerSmall!)}
                >
                  <p>Buy Now</p>
                  <br />
                  <p>$20</p>
                </button>
              </Link>
            </div>
            <div className="flex flex-col px-5 py-8 text-center items-center max-w-xs rounded-2xl bg-base-300 text-base-200 h-64 w-80">
              <h1 className="text-xl px-10">Medium Boxes</h1>
              <p className="text-base">
                Medium boxes contain enough produce to feed a family of <b>4 adults</b> for approximately{" "}
                <b>6 - 7 days</b>.
              </p>

              <Link href={isManagerMedium ? "" : locks[chain!.id as keyof typeof locks]?.medium!.checkout || "/"}>
                <button
                  className="btn btn-lg bg-secondary text-base-200 hover:bg-base-200 hover:text-secondary border-0"
                  onClick={() => checkSelfBuy(isManagerMedium!)}
                >
                  <p>Buy Now</p>
                  <br />
                  <p>$30</p>
                </button>
              </Link>
            </div>
            <div className="flex flex-col px-5 py-8 text-center items-center max-w-xs rounded-2xl bg-base-300 text-base-200 h-64 w-80">
              <h1 className="text-xl px-10">Large Boxes</h1>
              <p className="text-base">
                Large boxes contain enough produce to feed a family of <b>7 adults</b> for approximately{" "}
                <b>6 - 7 days</b>.
              </p>
              <Link href={isManagerLarge ? "" : locks[chain!.id as keyof typeof locks]?.large!.checkout || "/"}>
                <button
                  className="btn btn-lg bg-secondary text-base-200 hover:bg-base-200 hover:text-secondary border-0"
                  onClick={() => checkSelfBuy(isManagerLarge!)}
                >
                  <p>Buy Now</p>
                  <br />
                  <p>$40</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
