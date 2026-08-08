import type { IconType } from "react-icons";

type IconProps = {
  IconName: IconType;
  size?: number;
  className?: string;
  loading?: boolean;
  ping?: boolean;
  reduceOpactiyOnHover?: boolean;
  onClick?: () => void;
};

export default function Icon({
  IconName,
  size,
  className,
  loading,
  ping,
  reduceOpactiyOnHover,
  onClick,
}: IconProps) {
  return (
    <>
      <button
        onClick={onClick}
        disabled={loading}
        className={`relative p-3 rounded-full cursor-pointer hover:bg-my-blue ${reduceOpactiyOnHover ? "hover:bg-opacity-30" : "bg-my-blue text-white border-2 border-white hover: drop-shadow-lg"} ${loading && "cursor-wait"} ${className}`}
      >
        {loading ? "Loading" : <IconName size={size} />}

        {ping && (
          <>
            {/* <span className=" flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span> */}

            <span className="absolute -top-1 left-7 w-3 h-3 border-gray-800 rounded-full border-2 bg-my-pink"></span>
            <span className="animate-ping absolute -top-1 left-7 w-3 h-3 border-gray-800 rounded-full bg-my-pink"></span>
          </>
        )}
      </button>
    </>
  );
}
