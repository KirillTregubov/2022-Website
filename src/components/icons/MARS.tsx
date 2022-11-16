import Image from 'next/image'
import png from './MARS.png'

const MARS: React.FC = (props) => (
  <Image
    width={24}
    src={png}
    {...props}
    alt=""
    className={
      'contrast-150 grayscale transition-[filter] duration-200 dark:contrast-200 ' +
      props.className
    }
  />
)

export default MARS
