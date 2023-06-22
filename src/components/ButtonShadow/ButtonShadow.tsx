interface ButtonShadowProps {
    text: string;
    path: string;
}

const ButtonShadow = ({ text, path }:ButtonShadowProps) => {
  return (
    <a href={path} className='flex justify-center items-center font-semibold text-sm w-[117px] h-[44px] rounded-[10px] text-center border-2 border-borderShadow text-borderShadow hover:bg-borderShadow hover:text-white'>
      {text}
    </a>
  )
}

export default ButtonShadow
