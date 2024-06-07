import { ComponentPropsWithoutRef } from "react";

export const InstagramIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 25 25" fill="none" {...props}>
      <path d="M12.7915 24.3441H12.7381C6.06359 24.3441 0.633301 18.9138 0.633301 12.2392V12.1859C0.633301 5.51134 6.06359 0.0810547 12.7381 0.0810547H12.7915C19.466 0.0810547 24.8963 5.51134 24.8963 12.1859V12.2392C24.8963 18.9138 19.466 24.3441 12.7915 24.3441ZM12.7381 0.902333C6.51612 0.902333 1.45458 5.96386 1.45458 12.1859V12.2392C1.45458 18.4612 6.51612 23.5228 12.7381 23.5228H12.7915C19.0135 23.5228 24.075 18.4612 24.075 12.2392V12.1859C24.075 5.96386 19.0135 0.902333 12.7915 0.902333H12.7381Z" />
      <path d="M16.3921 5.25977H9.13855C7.13463 5.25977 5.50439 6.89 5.50439 8.89392V15.5299C5.50439 17.5338 7.13463 19.164 9.13855 19.164H16.3921C18.396 19.164 20.0262 17.5338 20.0262 15.5299V8.89392C20.0262 6.89 18.396 5.25977 16.3921 5.25977ZM6.78641 8.89392C6.78641 7.59712 7.84175 6.54179 9.13855 6.54179H16.3921C17.6889 6.54179 18.7442 7.59712 18.7442 8.89392V15.5299C18.7442 16.8267 17.6889 17.882 16.3921 17.882H9.13855C7.84175 17.882 6.78641 16.8267 6.78641 15.5299V8.89392Z" />
      <path d="M12.7651 15.5908C14.6286 15.5908 16.1455 14.0748 16.1455 12.2105C16.1455 10.3462 14.6295 8.83008 12.7651 8.83008C10.9008 8.83008 9.38477 10.3462 9.38477 12.2105C9.38477 14.0748 10.9008 15.5908 12.7651 15.5908ZM12.7651 10.1129C13.9223 10.1129 14.8635 11.0541 14.8635 12.2113C14.8635 13.3685 13.9223 14.3096 12.7651 14.3096C11.608 14.3096 10.6668 13.3685 10.6668 12.2113C10.6668 11.0541 11.608 10.1129 12.7651 10.1129Z" />
      <path d="M16.4586 9.3763C16.9604 9.3763 17.3694 8.96811 17.3694 8.46549C17.3694 7.96287 16.9613 7.55469 16.4586 7.55469C15.956 7.55469 15.5479 7.96287 15.5479 8.46549C15.5479 8.96811 15.956 9.3763 16.4586 9.3763Z" />
    </svg>
  );
};
