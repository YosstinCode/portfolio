interface TextGradientOrWhiteProps {
  text: string;
  isGradient?: boolean;
  size?: string;
}

const TextGradientOrWhite = ({ text, isGradient = false, size }: TextGradientOrWhiteProps) => {
  const lg = 'text-[1.75rem] lg:text-[2.5rem]'
  const lg2 = 'text-[2.5rem]'
  const sm = 'text-2xl lg:text-2xl'

  size = size === 'sm' ? sm : size === 'lg' ? lg : lg2

  const classTitle = size + ' font-medium lg:text-left text-center ' + (isGradient ? ' bg-gradient-to-r from-primary from-22% via-secondary via-50% to-primary to-77%  bg-clip-text text-transparent' : 'text-white ')

  return (
    <span className={classTitle}>{text}</span>
  )
}

export default TextGradientOrWhite
