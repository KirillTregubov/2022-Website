import { useId } from 'react'

const C: React.FC = (props) => {
  const id = useId()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 288"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid"
      role="img"
      {...props}
    >
      <defs>
        <mask id={id}>
          <path
            d="M255.987 85.672c-.002-4.843-1.037-9.122-3.129-12.794-2.055-3.612-5.134-6.638-9.262-9.032-34.081-19.67-68.195-39.28-102.264-58.97-9.185-5.307-18.091-5.114-27.208.27-13.565 8.008-81.481 46.956-101.719 58.689C4.071 68.665.015 76.056.013 85.663 0 125.221.013 164.777 0 204.336c.002 4.736.993 8.932 2.993 12.55 2.056 3.72 5.177 6.83 9.401 9.278 20.239 11.733 88.164 50.678 101.726 58.688 9.121 5.387 18.027 5.579 27.215.27 34.07-19.691 68.186-39.3 102.272-58.97 4.224-2.447 7.345-5.559 9.401-9.276 1.997-3.618 2.99-7.814 2.992-12.551 0 0 0-79.094-.013-118.653"
            fill="#fff"
          />
          <path
            d="m154.456 126.968 39.839.281c0-16.599-16.802-57.249-64.973-57.249-30.691 0-71.951 19.512-71.951 75.61 0 56.097 40.447 74.39 71.951 74.39 51.017 0 63.21-35.302 63.21-55.252l-38.007-2.173s1.017 23.075-25.406 23.075c-24.39 0-28.46-29.878-28.46-40.04 0-15.447 5.493-40.244 28.46-40.244 22.968 0 25.337 21.602 25.337 21.602"
            fill="#000"
          />
        </mask>
      </defs>
      <path mask={`url(#${id})`} fill="currentColor" d="M0 0h256v288H0z" />
    </svg>
  )
}

export default C
