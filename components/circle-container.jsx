import { twMerge } from 'tailwind-merge';

export const CircleContainer = ({
  children,
  radius = '30px',
  bgColor,
  fontColor,
  className,
}) => {
  return (
    <div
      className={twMerge(
        'flex items-center justify-center rounded-full',
        className,
      )}
      style={{
        height: radius,
        width: radius,
        backgroundColor: bgColor,
        color: fontColor,
      }}
    >
      {children}
    </div>
  );
};
