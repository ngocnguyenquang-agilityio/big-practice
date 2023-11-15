export const Icon = ({
  svg,
  name,
  width = 16,
  height = 16,
}: {
  svg: string;
  name: string;
  width?: number;
  height?: number;
}) => {
  return (
    <img
      src={svg}
      alt={name}
      width={width}
      height={height}
    />
  );
};
