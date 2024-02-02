import Hero from "@/components/hero";
import Link from "next/link";

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center mb-52">
      {/* hero section */}
      <Hero
        title="About"
        description="Explore Omni Sushi's About page to uncover the essence of our restaurant, meet our talented staff, and delve into the story behind our commitment to culinary excellence."
        img="https://res.cloudinary.com/dl3qqfbrh/image/upload/v1702218375/about_a8815d011c.png"
        link="menu"
        button="Menu"
      />

      <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col  items-center justify-center">
        <div className="w-full flex  justify-between">
          <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark">
            Omni Sushi
          </h2>
        </div>

        <div className="w-full mt-16">
          <p>
            Welcome to Omni Sushi, where passion for authentic Japanese cuisine
            meets a commitment to exceptional dining. Our story begins with a
            love for crafting exquisite sushi, a journey that led us to
            establish Omni Sushi as a haven for sushi enthusiasts.
          </p>
          <br></br>
          <p>
            At Omni Sushi, we believe in the artistry of each roll, the
            freshness of every ingredient, and the joy of sharing culinary
            experiences. Our menu is a symphony of flavors, showcasing
            traditional favorites and innovative creations that reflect our
            dedication to quality.
          </p>
        </div>

        <div className="w-full flex  justify-between mt-16">
          <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark">
            Staff Members
          </h2>
        </div>

        <div className="flex justify-center items-center mt-16">
          <img
            src="https://res.cloudinary.com/dl3qqfbrh/image/upload/v1703239395/staff_0c818bbe2e.png"
            className="mx-auto block h-20 sm:h-40"
            alt="Your Image"
          />
        </div>

        <div className="flex justify-center items-center mt-16">
          <Link
            href="/staff"
            className="inline-block font-medium text-myOrange underline underline-offset-2 text-base md:text-lg hover:text-myOrangeDark"
          >
            view all
          </Link>
        </div>

        <div className="w-full mt-16">
          <p>
            Behind every dish is our talented and passionate team. Meet the
            faces that bring Omni Sushi to life—each member contributing their
            expertise and creativity to make your dining experience truly
            memorable.
          </p>
          <br></br>
          <p>
            Join us on this culinary adventure, where tradition meets
            innovation, and every bite tells a story. Omni Sushi – Unveiling the
            Extraordinary in Every Sushi Journey.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
