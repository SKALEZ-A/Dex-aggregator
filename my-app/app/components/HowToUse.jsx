
import { benefits } from "../constants";
import { Tilt } from "react-tilt";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "@/public/assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "@/public/assets/svg/ClipPath";
import Image from "next/image";
// import benefitIcon1 from "./benefits/icon-1.svg";
import { benefitIcon1 } from "@/public/assets";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Trade Smarter, Not Harder with Marble Protocol."
        />

        <div className="flex flex-wrap gap-10 mb-10">

          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <Tilt
                      options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                      }}
                      className="custom-glass p-5 rounded-2xl sm:w-[360px] w-full min-h-[17rem] "
                    >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

        </Tilt>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
