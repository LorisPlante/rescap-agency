import { ComponentPropsWithoutRef } from "react";

export const UserIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 28 29" fill="none" {...props}>
      <rect x="0.75" y="1.25" width="26.5" height="26.5" rx="13.25" strokeWidth="2" />
      <path
        d="M23.3337 25V22.6667C23.3337 21.429 22.842 20.242 21.9668 19.3668C21.0917 18.4917 19.9047 18 18.667 18H9.33366C8.09598 18 6.909 18.4917 6.03383 19.3668C5.15866 20.242 4.66699 21.429 4.66699 22.6667V25M18.667 8.66667C18.667 11.244 16.5777 13.3333 14.0003 13.3333C11.423 13.3333 9.33366 11.244 9.33366 8.66667C9.33366 6.08934 11.423 4 14.0003 4C16.5777 4 18.667 6.08934 18.667 8.66667Z"
        strokeWidth="2"
      />
    </svg>
  );
};
