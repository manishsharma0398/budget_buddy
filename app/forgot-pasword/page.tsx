import Link from "next/link";
import type { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="grid h-screen w-screen place-items-center bg-slate-800 px-4 text-sm font-medium">
      <div className="w-full max-w-md rounded-lg bg-slate-700/30 shadow">
        <form className="p-4 md:p-5 lg:p-6 flex flex-col gap-5 text-white">
          <span className="block font-normal text-4xl">
            Reset your password
          </span>
          <span className="text-sm font-normal">
            To reset your password, enter your email below and submit. An email
            will be sent to you with instructions about how to complete the
            process.
          </span>

          <input
            className="focus:border-purple-400 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400 mt-5"
            placeholder="email@example.com"
          />

          <button className="flex items-center justify-center gap-x-2 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-300 transition hover:text-purple-400">
            <svg
              style={{ color: "rgb(203, 213, 225)" }}
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                fill="#cbd5e1"
              />
            </svg>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
