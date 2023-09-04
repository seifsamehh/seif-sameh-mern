import Image from "next/image";
import localFont from "next/font/local";
const myFont = localFont({
  src: "../public/fonts/BrittanySignature.ttf",
  display: "swap",
});

const Footer = () => {
  function get_current_year(): number {
    const today = new Date();
    return today.getFullYear();
  }
  const currentYear = get_current_year();
  return (
    <footer className="w-full flex justify-between items-center py-6 min-[290px]:flex-wrap md:flex-nowrap">
      <div className="left">
        <h2 className={`${myFont.className} text-3xl`}>Seif Eldin Sameh</h2>
      </div>
      <div className="right">
        <p>&copy; Copyright {currentYear}. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
