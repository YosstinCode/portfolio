import { Link } from 'react-router-dom'

interface ButtonProps {
    text: string;
    path?: string;
}

const Button = ({ text, path = '#' }: ButtonProps) => {
  return (
    <Link to={path} className='flex justify-center items-center font-semibold text-sm w-[117px] h-[44px] rounded-[10px] text-center text-white bg-azulito hover:bg-azulitoHover'>
      {text}
    </Link>
  )
}

export default Button
