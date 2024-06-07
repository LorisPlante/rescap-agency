import { ComponentPropsWithoutRef } from "react";

export const DiscordIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 25 25" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2226 16.0405C15.6079 16.5285 16.0702 17.0808 16.0702 17.0808C18.9084 16.9909 20 15.1287 20 15.1287C20 10.9934 18.1507 7.64154 18.1507 7.64154C16.3014 6.25455 14.542 6.29308 14.542 6.29308L14.3622 6.49856C16.5454 7.16636 17.5599 8.12955 17.5599 8.12955C16.2243 7.39753 14.9144 7.03794 13.6944 6.89667C12.7697 6.79393 11.8836 6.81962 11.1002 6.92236C11.0329 6.92236 10.9754 6.93214 10.9106 6.94317C10.9012 6.94478 10.8916 6.94641 10.8819 6.94804C10.4324 6.98657 9.34076 7.15352 7.96661 7.75712C7.49144 7.97544 7.20891 8.12955 7.20891 8.12955C7.20891 8.12955 8.27483 7.11499 10.5865 6.44719L10.4581 6.29308C10.4581 6.29308 8.69863 6.25455 6.84932 7.64154C6.84932 7.64154 5 10.9934 5 15.1287C5 15.1287 6.07877 16.9909 8.91695 17.0808C8.91695 17.0808 9.39213 16.5028 9.7774 16.0148C8.14641 15.5268 7.52997 14.4994 7.52997 14.4994C7.52997 14.4994 7.65839 14.5893 7.88956 14.7177C7.9024 14.7306 7.91524 14.7434 7.94093 14.7563C7.96019 14.7691 7.97945 14.7787 7.99872 14.7884C8.01798 14.798 8.03724 14.8076 8.05651 14.8205C8.37757 15.0003 8.69863 15.1415 8.99401 15.2571C9.52055 15.4626 10.1498 15.6681 10.8819 15.8093C11.845 15.9891 12.9752 16.0534 14.2081 15.8222C14.8116 15.7195 15.4281 15.5397 16.0702 15.27C16.5197 15.103 17.0206 14.859 17.5471 14.5123C17.5471 14.5123 16.905 15.5653 15.2226 16.0405ZM10.0985 11.0837C9.36645 11.0837 8.78853 11.7258 8.78853 12.5092C8.78853 13.2926 9.37929 13.9347 10.0985 13.9347C10.8305 13.9347 11.4084 13.2926 11.4084 12.5092C11.4212 11.7258 10.8305 11.0837 10.0985 11.0837ZM14.786 11.0837C14.0539 11.0837 13.476 11.7258 13.476 12.5092C13.476 13.2926 14.0668 13.9347 14.786 13.9347C15.518 13.9347 16.0959 13.2926 16.0959 12.5092C16.0959 11.7258 15.518 11.0837 14.786 11.0837Z"
      />
      <path d="M12.5249 24.263H12.4715C5.79699 24.263 0.366699 18.8327 0.366699 12.1582V12.1048C0.366699 5.43028 5.79699 0 12.4715 0H12.5249C19.1994 0 24.6297 5.43028 24.6297 12.1048V12.1582C24.6297 18.8327 19.1994 24.263 12.5249 24.263ZM12.4715 0.821278C6.24952 0.821278 1.18798 5.88281 1.18798 12.1048V12.1582C1.18798 18.3802 6.24952 23.4417 12.4715 23.4417H12.5249C18.7469 23.4417 23.8084 18.3802 23.8084 12.1582V12.1048C23.8084 5.88281 18.7469 0.821278 12.5249 0.821278H12.4715Z" />
    </svg>
  );
};
