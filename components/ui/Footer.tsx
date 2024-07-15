import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { useStateContext } from "@/context/StateContext";

const Footer = () => {
  const {language} = useStateContext()
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      {language === 'en' ? <>
        <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:aleksandrgaranin89@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      </> : <>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Готовы вывести <span className="text-purple">свое</span> цифровое присутствие на новый уровень?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        Свяжитесь со мной сегодня, и давайте обсудим, как я могу помочь вам достичь ваших целей.
        </p>
        <a href="mailto:aleksandrgaranin89@gmail.com">
          <MagicButton
            title={language === 'en' ? "Let's get in touch": "Давайте свяжемся"}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      </>} 
      
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Aleksandr Garanin
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.url} target="_blank" ><img src={info.img} alt="icons" width={20} height={20} /></a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;