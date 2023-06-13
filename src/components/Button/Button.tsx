import { Link } from 'react-router-dom'

interface ButtonProps {
    text: string;
    isShadow?: boolean;
    path: string;
}

const Button = ({ text, isShadow = false, path }: ButtonProps) => {
  const classButton = 'flex justify-center items-center font-semibold text-sm w-[117px] h-[44px] rounded-[10px] text-center ' + (isShadow ? 'border-2 border-borderShadow text-borderShadow' : 'text-white bg-azulito')

  return (
    <Link to={path} className={classButton}>
      {text}
    </Link>
  )
}

export default Button
