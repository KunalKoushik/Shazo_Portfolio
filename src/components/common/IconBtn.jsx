export default function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  active,
  type,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={` font-mont flex items-baseline justify-center item-center md:gap-2 sm:gap-0 rounded-md text-center md:text-[15px] sm:text-[13px] sm:px-2 sm:py-2 md:px-6 md:py-4 font-bold shadow-[2px_2px_0px_0px_#FFD60A] ${
          active ? "bg-yellow-50 text-black " : "bg-richblack-800"
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline && "text-yellow-50"}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  )
}
