const items = [
  {
    title: "What is RemoteCord?",
    answer:
      "RemoteCord is a remote access solution that integrates with Discord, allowing you to control your devices and transfer files seamlessly.",
  },
  {
    title: "How does RemoteCord work?",
    answer: `RemoteCord is essentially a Discord bot that is able to securely access a device and relay information from it back to Discord. It uses a client app that runs on the device you want to access, which communicates with the bot to provide remote access.\n
      The devices you add are called "clients".`,
  },
  {
    title: "Can my client be used by more than one user?",
    answer:
      "Yes. Using our friend system, you can add multiple users and allow them different levels of access to your client (eg. User1 has full control, User2 can only download files). You can also remove users & their permissions at any time.",
  },
  {
    title: "How do I install RemoteCord?",
    answer: `To install RemoteCord, follow these steps:\n\n
        1. Join our Discord server: This allows the bot to send you direct messages.\n
        2. Activate your Discord account: Locate the RemoteCord bot and send it the \`/activate\` command via direct message.\n
        3. Download and install the RemoteCord Client App: Log in to the app using your Google Account.\n
        4. Find your Client ID: In the app, locate your unique Client ID. Use the command \`/add <client_id>\` in Discord to friend your client. (Ensure you accept the friend request on the client.)\n
        5. Connect to your client: Run the command \`/connect\` in Discord and select the client you just added.\n
        6. You're all set!: You can now use RemoteCord to access your devices and transfer files seamlessly.`,
  },
  {
    title: "Is RemoteCord secure?",
    answer: `Yes, RemoteCord uses industry standard state-of-the-art security practices to ensure that your files and information are secure and private.\n
      Additionally, the client app can be used to grant or revoke permission to any user the client is friends with.\n
      RemoteCord does not store any of your files or information, and all data is encrypted during transmission.`,
  },
  {
    title: "What platforms does RemoteCord support?",
    answer:
      "The bot itself is available for any platform, but the client app is only available for Windows.",
  },
];

export const FAQ: React.FC = () => {
  return (
    <div
      id="faq"
      className="relative w-full px-6 pt-10 pb-8 mt-8 ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-xl sm:px-10"
    >
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
            FAQ
          </h2>
          <p className="mt-3 text-lg text-amber-50 md:text-xl">
            Questions you may have about our service.
          </p>
        </div>
        <div className="mx-auto mt-8 grid divide-y divide-neutral-700 md:max-w-[50%]">
          {items.map((item, index) => (
            <div key={index} className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>{item.title}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-400 whitespace-pre-line">
                  {item.answer}
                </p>
              </details>
            </div>
          ))}
          {/* <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> How does the billing work?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
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
          </div> */}
        </div>
      </div>
    </div>
  );
};
