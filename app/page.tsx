import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="flex min-h-screen flex-col justify-center items-center p-16">
        <section className="p-20">hello world !</section>
        <section className="flex gap-10 px-20">
          <article className="flex flex-col gap-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quasi tempora hic doloribus minus eos, aperiam perspiciatis quas vero animi.</p>
            <button className="border border-black px-4 py-2 w-fit">En savoir plus</button>
          </article>
          <article className="flex flex-col gap-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quasi tempora hic doloribus minus eos, aperiam perspiciatis quas vero animi.</p>
            <button className="border border-black px-4 py-2 w-fit">En savoir plus</button>
          </article>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
