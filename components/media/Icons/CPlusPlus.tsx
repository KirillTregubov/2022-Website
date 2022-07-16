import { useId } from 'react'

const CPlusPlus: React.FC = (props) => {
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
            d="M255.987 84.59c-.002-4.837-1.037-9.112-3.13-12.781-2.054-3.608-5.133-6.632-9.261-9.023-34.08-19.651-68.195-39.242-102.264-58.913-9.185-5.303-18.09-5.11-27.208.27-13.565 8-81.48 46.91-101.719 58.632C4.071 67.6.015 74.984.013 84.58 0 124.101.013 163.62 0 203.141c0 4.73.993 8.923 2.993 12.537 2.056 3.717 5.177 6.824 9.401 9.269 20.24 11.722 88.164 50.63 101.726 58.631 9.121 5.382 18.027 5.575 27.215.27 34.07-19.672 68.186-39.262 102.272-58.913 4.224-2.444 7.345-5.553 9.401-9.267 1.997-3.614 2.992-7.806 2.992-12.539 0 0 0-79.018-.013-118.539"
            fill="#fff"
          />
          <path
            d="M249.135 148.636h-9.738v9.74h-9.74v-9.74h-9.737V138.9h9.737v-9.738h9.74v9.738h9.738v9.737ZM128 58.847c31.135 0 58.358 16.74 73.17 41.709l.444.759-37.001 21.307c-7.333-12.609-20.978-21.094-36.613-21.094-23.38 0-42.333 18.953-42.333 42.332a42.13 42.13 0 0 0 5.583 21.003c7.297 12.738 21.014 21.33 36.75 21.33 15.659 0 29.325-8.51 36.647-21.153l.241-.423 36.947 21.406c-14.65 25.597-42.228 42.851-73.835 42.851-31.549 0-59.084-17.185-73.754-42.707-7.162-12.459-11.26-26.904-11.26-42.307 0-46.95 38.061-85.013 85.014-85.013Zm75.865 70.314v9.738h9.737v9.737h-9.737v9.74h-9.738v-9.74h-9.738V138.9h9.738v-9.738h9.738Z"
            fill="#000"
          />
        </mask>
      </defs>
      <path mask={`url(#${id})`} fill="currentColor" d="M0 0h256v288H0z" />
    </svg>
  )
}

export default CPlusPlus
