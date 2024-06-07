import { TwitchIcon } from "./icons/twitchIcon";
import { InstagramIcon } from "./icons/instagramIcon";
import { TiktokIcon } from "./icons/tiktokIcon";
import { XIcon } from "./icons/xIcon";
import { DiscordIcon } from "./icons/discordIcon";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10 md:gap-14 lg:gap-20 bg-bg-reverse text-text-reverse font-custom-paragraph text-sm w-full py-11 px-[5vw] h-fit">
      <ul className="flex flex-col gap-3">
        <li className="font-bold text-xl pb-3 uppercase">Service client</li>
        <li>
          <a href="/">Nous contacter</a>
        </li>
        <li>
          <a href="/">FAQ</a>
        </li>
      </ul>
      <div className=" w-1/3 md:w-[1px] h-[1px] md:h-20 bg-bg"></div>
      <ul className="flex flex-col gap-3">
        <li className="font-bold text-xl pb-3 uppercase">Informations pratique</li>
        <li>
          <a href="/">Mentions légales</a>
        </li>
        <li>
          <a href="/">Protection des données</a>
        </li>
      </ul>
      <div className=" w-1/3 md:w-[1px] h-[1px] md:h-20 bg-bg"></div>
      <ul className="flex flex-col gap-3">
        <li className="font-bold text-xl pb-3 uppercase">Nous suivre</li>
        <li className="flex gap-3">
          <a href="/">
            <InstagramIcon size={32} className="fill-bg" />
          </a>
          <a href="/">
            <TiktokIcon size={32} className="fill-bg" />
          </a>
          <a href="/">
            <XIcon size={32} className="fill-bg" />
          </a>
          <a href="/">
            <DiscordIcon size={32} className="fill-bg" />
          </a>
          <a href="/">
            <TwitchIcon size={32} className="fill-bg" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
