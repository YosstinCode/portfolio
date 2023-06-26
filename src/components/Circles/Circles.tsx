interface CirclesProps {
  position: string
  rotate?: boolean
}

const Circles = ({ position, rotate }: CirclesProps) => {
  const rotateCircle = rotate ? ' rotate-180' : ''
  return (
    <div className={' overflow-hidden absolute w-[10.5rem] h-[12.938rem] hidden lg:block ' + position + rotateCircle}>
      <div className='relative w-full max-h-full'>

        <div id='circle1' className='absolute animate-[fade-in_2000ms_ease-out] left-[7.5rem] w-[1.875rem] h-[1.875rem] rounded-full bg-circle1' />
        <div id='circle2' className='absolute animate-[fade-in_1400ms_ease-out] left-5 top-[1.125rem] w-20 h-20 rounded-full bg-circle3 ' />
        <div id='circle3' className='absolute animate-[fade-in_1000ms_ease-out] right-0 top-[3.625rem] w-[3.75rem] h-[3.75rem] rounded-full bg-circle2 ' />
        <div id='circle4' className='absolute top-[6.688rem]   w-[6.25rem] h-[6.25rem] rounded-full bg-circle4 ' />

      </div>
    </div>
  )
}

export default Circles

/* <div id='circle1' className='absolute left-[7.5rem] w-[1.875rem] h-[1.875rem] rounded-full bg-circle1' />
        <div id='circle2' className='absolute left-5 top-[1.125rem] w-20 h-20 rounded-full bg-circle3 ' />
        <div id='circle3' className='absolute right-0 top-[3.625rem] w-[3.75rem] h-[3.75rem] rounded-full bg-circle2 ' />
        <div id='circle4' className='absolute top-[6.688rem] w-[6.25rem] h-[6.25rem] rounded-full bg-circle4 ' /> */

/* circle2 -> top: 7.125rem; */
/* circle3 -> top: 7.625rem; */
/* circle1 -> top: 9rem; */
