const Figma: React.FC = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 384"
    width="1em"
    height="1em"
    fill="currentColor"
    preserveAspectRatio="xMidYMid"
    role="img"
    {...props}
  >
    <path d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z" />
    <path d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z" />
    <path d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z" />
    <path d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z" />
    <path d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64 28.672-64 64-64 64 28.672 64 64Z" />
  </svg>
)

export default Figma
