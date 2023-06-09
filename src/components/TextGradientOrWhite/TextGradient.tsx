interface TextGradientOrWhiteProps {
  text: string;
  isGradient?: boolean;
  size?: string;
}

const TextGradientOrWhite = ({ text, isGradient = false, size = ' text-[2.5rem]' }: TextGradientOrWhiteProps) => {
  const classTitle = 'font-medium ' + (isGradient ? ' bg-gradient-to-r from-primary from-22% via-secondary via-50% to-primary to-77%  bg-clip-text text-transparent' : 'text-white ') + size

  return (
    <span className={classTitle}>{text}</span>
  )
}

export default TextGradientOrWhite
