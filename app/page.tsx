"use client";
import insertUSer from "@/backend/service";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { EmailIcon } from "@/components/icons/emailIcom";
import { Logo } from "@/components/logo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col justify-center items-center pt-24">
        <section className="relative overflow-x-hidden p-mobile sm:p-desktop w-full min-h-[650px] bg-bg-reverse text-text-reverse font-custom flex justify-center items-center sm:items-start flex-col gap-6">
          <h1 className="text-4xl sm:text-7xl font-bold uppercase font-custom-titre">Active Gaming</h1>
          <h2 className="w-full md:w-1/2 font-custom-paragraph text-2xl sm:text-4xl text-center sm:text-left">
            Dans <span className="text-button-reverse">E-SPORT</span> il y a <span className="text-button-reverse">SPORT</span> !
          </h2>
          <p className="w-full md:w-1/2 font-custom-paragraph text-lg sm:text-xl text-center sm:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, eaque impedit et voluptatum excepturi natus.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row w-max">
            <div className="w-fit px-6 py-2 bg-bg text-text rounded cursor-pointer">Télécharger Active Gaming</div>
            <div className="w-full sm:w-fit px-6 py-2 bg-transparent text-text-reverse border-custom-reverse border-2 rounded cursor-pointer text-center">{`Plus d'informations`}</div>
          </div>
          <div className="absolute top-1/2 right-0 w-fit transform -translate-y-1/2 translate-x-1/4 hidden md:block">
            <Logo sizew={800} sizeh={500} className="w-[55vw] h-auto" />
          </div>
        </section>
        <section className="w-full min-h-[450px] p-mobile sm:p-desktop bg-bg text-text font-custom-paragraph flex justify-start items-start flex-col gap-6">
          <div className="flex justify-between items-center gap-6 w-full">
            <h2 className="font-custom-titre w-fit block text-4xl font-bold">Actualités</h2>
            <a href="/" className="w-fit px-6 py-2 bg-transparent text-text border-custom border-2 rounded hidden sm:block">
              Tout voir
            </a>
          </div>
          <div className="w-full flex flex-col sm:flex-row flex-wrap justify-start items-center gap-4 sm:gap-[2%] text-text-reverse font-custom-paragraph">
            <a href="/" className="h-52 w-full sm:w-[49%] lg:w-[32%] my-4 sm:my-0 bg-bg-reverse flex rounded">
              <div className="w-2/5 bg-button-reverse h-full rounded"></div>
              <div className="pl-5 py-5 pr-2 flex flex-col justify-between">
                <h3 className="uppercase font-custom-titre text-2xl font-bold">Active gaming 3.0 est dispo !</h3>
                <p>Découvrir ses nouvelles fonctionnalités</p>
              </div>
            </a>
            <a href="/" className="h-52 w-full sm:w-[49%] lg:w-[32%] sm:my-4 my-0 bg-bg-reverse flex rounded">
              <div className="w-2/5 bg-button-reverse h-full rounded"></div>
              <div className="pl-5 py-5 pr-2 flex flex-col justify-between">
                <h3 className="uppercase font-custom-titre text-2xl font-bold">Active gaming 3.0 est dispo !</h3>
                <p>Découvrir ses nouvelles fonctionnalités</p>
              </div>
            </a>
            <a href="/" className="h-52 w-full sm:w-[49%] lg:w-[32%] my-4 sm:my-0 bg-bg-reverse flex rounded">
              <div className="w-2/5 bg-button-reverse h-full rounded"></div>
              <div className="pl-5 py-5 pr-2 flex flex-col justify-between">
                <h3 className="uppercase font-custom-titre text-2xl font-bold">Active gaming 3.0 est dispo !</h3>
                <p>Découvrir ses nouvelles fonctionnalités</p>
              </div>
            </a>
            <a href="/" className="w-fit px-20 py-2 bg-transparent text-text border-custom border-2 rounded sm:hidden block">
              Tout voir
            </a>
          </div>
        </section>

        {/* <form action="#" method="GET" className="w-full sm:w-1/3">
            <div className="relative flex items-center gap-4">
              <input type="email" name="email" id="email" required className="peer w-full p-3 rounded bg-pink-500" />
              <label htmlFor="email" className="flex items-center gap-2 absolute top-3 left-3 w-full pointer-events-none peer-focus:hidden peer-valid:hidden">
                <EmailIcon size={24} className="stroke-light" />
                Adresse mail
              </label>
              <input type="submit" value="S'INSCRIRE" className="py-3 px-5 bg-light rounded text-dark font-semibold cursor-pointer" />
            </div>
          </form> */}
        {/* <section className="flex gap-10 px-20">
          <article className="flex flex-col gap-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quasi tempora hic doloribus minus eos, aperiam perspiciatis quas vero animi.</p>
            <button className="border border-black px-4 py-2 w-fit transform transition-all duration-300 hover:scale-110">En savoir plus</button>
          </article>
          <article className="flex flex-col gap-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quasi tempora hic doloribus minus eos, aperiam perspiciatis quas vero animi.</p>
            <button onClick={insertUSer} className="border border-black px-4 py-2 w-fit transform transition-all duration-300 hover:scale-110">
              En savoir plus
            </button>
          </article>
        </section> */}
      </main>
      <Footer></Footer>
    </>
  );
}
