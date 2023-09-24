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
      <div className="flex flex-col flex-grow pt-10 width-full">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">BarnRaise CSA</span>
          </h1>
          <p className="text-center text-lg">Get started by selecting your desired share size.</p>
        </div>

        <div className="flex-grow bg-base-200 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <Link href={isManagerSmall ? "" : locks[chain!.id as keyof typeof locks]?.small!.checkout || "/"}>
              <button className="btn btn-secondary btn-lg" onClick={() => checkSelfBuy(isManagerSmall!)}>
                {/* <BugAntIcon className="h-8 w-8 fill-secondary" /> */}
                <p>Small</p>
                <br />
                <p>$20</p>
              </button>
            </Link>
            <Link href={isManagerMedium ? "" : locks[chain!.id as keyof typeof locks]?.medium!.checkout || "/"}>
              <button className="btn btn-secondary btn-lg" onClick={() => checkSelfBuy(isManagerMedium!)}>
                {/* <SparklesIcon className="h-8 w-8 fill-secondary" /> */}
                <p>Medium</p>
                <br />
                <p>$30</p>
              </button>
            </Link>
            <Link href={isManagerLarge ? "" : locks[chain!.id as keyof typeof locks]?.large!.checkout || "/"}>
              <button className="btn btn-secondary btn-lg" onClick={() => checkSelfBuy(isManagerLarge!)}>
                {/* <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" /> */}
                <p>Large</p>
                <br />
                <p>$40</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
