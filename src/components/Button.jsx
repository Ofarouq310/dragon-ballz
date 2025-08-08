import clsx from "clsx"

export default function Button({title, image, containerClass}) {
  return (
    <button className={clsx("flex items-center gap-1 px-5 py-2 font-uppercase font-robert-medium text-md group relative text-black w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50", containerClass)} 
    >
      <img src={image} alt="One Star Dragon Ball" className="w-6" />
      {title}
    </button>
  )
}
