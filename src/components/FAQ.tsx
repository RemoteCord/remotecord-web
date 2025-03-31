const items = [
  {
    title: "How does it work?",
    answer:
      "RemoteCord is a Discord bot that allows you to access your devices and transfer files from anywhere in the world. It uses a secure connection to ensure that your data is safe and private.",
  },
  {
    title: "What is RemoteCord?",
    answer:
      "RemoteCord is a remote access solution that integrates with Discord, allowing you to control your devices and transfer files seamlessly.",
  },
  {
    title: "Is RemoteCord secure?",
    answer:
      "Yes, RemoteCord uses end-to-end encryption to ensure that your data is secure and private.",
  },
  {
    title: "How do I install RemoteCord?",
    answer:
      "You can install RemoteCord by inviting the bot to your server and following the setup instructions provided in the documentation.",
  },
  {
    title: "What platforms does RemoteCord support?",
    answer:
      "The bot itself is available for any platform, but the client app is only available for Windows.",
  },
];

export const FAQ: React.FC = () => {
  return (
    <div className="relative w-full bg-[#1213148a] px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
            FAQ
          </h2>
          <p className="mt-3 text-lg text-amber-50 md:text-xl">
            Frequenty asked questions
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> How does the billing work?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-400">
                Springerdata offers a variety of billing options, including
                monthly and annual subscription plans, as well as pay-as-you-go
                pricing for certain services. Payment is typically made through
                a credit card or other secure online payment method.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};
