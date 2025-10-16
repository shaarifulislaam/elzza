const SvgIcon = ({
  size = "1em",
  color = "currentColor",
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
    width={size}
    height={size}
    className={className}
  >
    <g clip-path="url(#a)">
      <mask
        id="b"
        style="mask-type:luminance"
        width="14"
        height="14"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill={color} d="M14 0H0v14h14V0z" />
      </mask>
      <g mask="url(#b)">
        <path
          fill={color}
          fillRule="evenodd"
          d="M7.5 0h-1v4.428L4.841.322l-.927.375 1.702 4.212-3.212-3.212-.707.707 3.078 3.078L.785 3.74l-.4.917L4.607 6.5H0v1h4.607L.385 9.344l.4.917 3.99-1.743-3.078 3.078.707.707 3.212-3.212-1.702 4.212.927.375L6.5 9.572V14h1V9.572l1.659 4.106.927-.375-1.702-4.212 3.212 3.212.707-.707-3.078-3.078 3.99 1.743.4-.917L9.393 7.5H14v-1H9.393l4.222-1.844-.4-.917-3.99 1.743 3.078-3.078-.707-.707-3.212 3.212L10.086.697 9.159.322 7.5 4.428V0z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill={color} d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
);

export { SvgIcon };
