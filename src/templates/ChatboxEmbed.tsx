import { useState } from "react";


const ChatboxEmbed = () => {
    const [isOpen, setIsOpen] = useState(false);
    // @ts-ignore
    return (
        <div className="fixed bottom-[10px] right-[10px] z-[9999]">
            {isOpen ? (
                <div className="relative bottom-[-10px] right-[-10px] h-[500px] w-[400px] md:bottom-0 md:right-0">
                    <iframe
                        src="https://app.chaindesk.ai/agents/cmblnbfju03bzf5km5oj9ktas/iframe"
                        width="100%"
                        height="100%"
                        style={{ border: "none" }}
                        allow="clipboard-write"
                        title="Chaindesk Chat"
                    />
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute right-1 top-1 flex size-8 items-center justify-center rounded-full bg-red-500 text-white shadow-lg"
                        aria-label="Close chat"
                    >
                        ×
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="rounded-full bg-red-800 px-4 py-2 text-white shadow-md hover:bg-red-700"
                >
                    Chat bot
                </button>
            )}
        </div>
    );
};

export default ChatboxEmbed;