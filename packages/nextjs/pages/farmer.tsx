import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Farmer: NextPage = () => {
  const isLoading = false;
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
              <p>5 of 15</p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <h2>Medium:</h2>
              <p>3 of 10</p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <h2>Large:</h2>
              <p>4 of 5</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <h1 className="text-center mb-8">
              <span className="block text-2xl mb-2">Your Balance: $1337.69</span>
              <button className="btn btn-secondary btn-sm" disabled={isLoading} onClick={() => {}}>
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
