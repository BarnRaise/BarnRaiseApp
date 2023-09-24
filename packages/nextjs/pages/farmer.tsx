import Avatar from "./Avatar";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Farmer: NextPage = () => {
  const isLoading = false;
  return (
    <>
      <MetaHeader title="Dashboard | BarnRaise" description="Shop CSA Shares">
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree&display=swap" rel="stylesheet" />
      </MetaHeader>
      <Avatar role="Farmer" href="/user" bgColor="#40494E" switchRole="Community Member" avatar="/FarmerAvatar.png" />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">BarnRaise CSA</span>
          </h1>
        </div>

        <div className="flex-grow bg-base-200 w-full mt-16 px-8">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <h1 className="text-center mb-8">
              <span className="block text-2xl mb-2">Shares Sold</span>
            </h1>
          </div>
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row py-10">
            <div className="flex flex-col px-5 py-8 text-center items-center max-w-xs rounded-2xl bg-base-300 text-base-200">
              <h1 className="text-xl px-10">Small Boxes</h1>
              <b className="text-3xl">4 of 15</b>
            </div>
            <div className="flex flex-col px-5 py-8 text-center items-center max-w-xs rounded-2xl bg-base-300 text-base-200">
              <h1 className="text-xl px-10">Medium Boxes</h1>
              <b className="text-3xl">3 of 10</b>
            </div>
            <div className="flex flex-col px-5 py-8 text-center items-center max-w-xs rounded-2xl bg-base-300 text-base-200">
              <h1 className="text-xl px-10">Large Boxes</h1>
              <b className="text-3xl">4 of 5</b>
            </div>
          </div>
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <h1 className="text-center mb-8">
              <span className="block text-2xl mb-2">Your Balance: $1337.69</span>
              <button className="btn btn-secondary btn-sm" disabled={isLoading}>
                {isLoading && <span className="loading loading-spinner loading-xs"></span>}
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
