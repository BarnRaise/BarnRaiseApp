import Link from "next/link";
import Avatar from "./Avatar";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const User: NextPage = () => {
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
            <Link href="https://app.unlock-protocol.com/checkout?id=3e99322a-1252-4a38-8e1c-dfd50d49127b">
              <button className="btn btn-secondary btn-lg">
                {/* <BugAntIcon className="h-8 w-8 fill-secondary" /> */}
                <p>Small</p>
                <br />
                <p>$20</p>
              </button>
            </Link>
            <Link href="https://app.unlock-protocol.com/checkout?id=54e3a393-a567-4160-8d11-534d8848f22a">
              <button className="btn btn-secondary btn-lg">
                {/* <SparklesIcon className="h-8 w-8 fill-secondary" /> */}
                <p>Medium</p>
                <br />
                <p>$30</p>
              </button>
            </Link>
            <Link href="https://app.unlock-protocol.com/checkout?id=b33c304d-475f-411a-9e91-07fcc9e9ae22">
              <button className="btn btn-secondary btn-lg">
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
