import { useState } from "react";
import type { NextPage } from "next";
import { useAccount, useNetwork } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { locks, usdc } from "~~/services/unlock/locks";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

const Farmer: NextPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const chainObj = useNetwork();
  const { address } = useAccount();
  const chain = chainObj.chain ? chainObj.chain : getTargetNetwork();

  const { data: usdcBalanceSmall } = useScaffoldContractRead({
    contractName: "USDC",
    functionName: "balanceOf",
    args: [locks[chain!.id as keyof typeof locks]?.small!.address],
  });
  const { data: smallSharesSold } = useScaffoldContractRead({
    contractName: "SmallLock",
    functionName: "totalSupply",
  });
  const { data: maxSmallShares } = useScaffoldContractRead({
    contractName: "SmallLock",
    functionName: "maxNumberOfKeys",
  });

  const { data: usdcBalanceMedium } = useScaffoldContractRead({
    contractName: "USDC",
    functionName: "balanceOf",
    args: [locks[chain!.id as keyof typeof locks]?.medium!.address],
  });
  const { data: mediumSharesSold } = useScaffoldContractRead({
    contractName: "MediumLock",
    functionName: "totalSupply",
  });
  const { data: maxMediumShares } = useScaffoldContractRead({
    contractName: "MediumLock",
    functionName: "maxNumberOfKeys",
  });

  const { data: usdcBalanceLarge } = useScaffoldContractRead({
    contractName: "USDC",
    functionName: "balanceOf",
    args: [locks[chain!.id as keyof typeof locks]?.large!.address],
  });
  const { data: largeSharesSold } = useScaffoldContractRead({
    contractName: "LargeLock",
    functionName: "totalSupply",
  });
  const { data: maxLargeShares } = useScaffoldContractRead({
    contractName: "LargeLock",
    functionName: "maxNumberOfKeys",
  });

  const { writeAsync: withdrawSmall, isLoading: isLoadingSmall } = useScaffoldContractWrite({
    contractName: "SmallLock",
    functionName: "withdraw",
    args: [usdc[chain!.id as keyof typeof usdc], address, usdcBalanceSmall],
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  const { writeAsync: withdrawMedium, isLoading: isLoadingMedium } = useScaffoldContractWrite({
    contractName: "MediumLock",
    functionName: "withdraw",
    args: [usdc[chain!.id as keyof typeof usdc], address, usdcBalanceMedium],
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  const { writeAsync: withdrawLarge, isLoading: isLoadingLarge } = useScaffoldContractWrite({
    contractName: "LargeLock",
    functionName: "withdraw",
    args: [usdc[chain!.id as keyof typeof usdc], address, usdcBalanceLarge],
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  const handleWithdraw = async () => {
    setSubmitting(true);
    await withdrawSmall();
    await withdrawMedium();
    await withdrawLarge();
    setSubmitting(false);
  };

  const usdcBalance = (Number(usdcBalanceSmall) + Number(usdcBalanceMedium) + Number(usdcBalanceLarge)) / 1e6;
  const usdFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

  return (
    <>
      <MetaHeader title="Dashboard | BarnRaise" description="Shop CSA Shares">
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">BarnRaise CSA</span>
          </h1>
          <p className="text-center text-lg">Farmer tip here</p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <h1 className="text-center mb-8">
              <span className="block text-2xl mb-2">Shares Sold</span>
            </h1>
          </div>
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <h2>Small:</h2>
              <p>
                {smallSharesSold?.toString()} of {maxSmallShares?.toString()}
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <h2>Medium:</h2>
              <p>
                {mediumSharesSold?.toString()} of {maxMediumShares?.toString()}
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <h2>Large:</h2>
              <p>
                {largeSharesSold?.toString()} of {maxLargeShares?.toString()}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <h1 className="text-center mb-8">
              <span className="block text-2xl mb-2">Your Balance: {usdFormatter.format(Number(usdcBalance))}</span>
              <button className="btn btn-secondary btn-sm" disabled={submitting} onClick={handleWithdraw}>
                {submitting && <span className="loading loading-spinner loading-xs"></span>}
                Withdraw 💸
              </button>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Farmer;
