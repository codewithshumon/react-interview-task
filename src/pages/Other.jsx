import LandingPageVideo from "../components/landing/LandingPageVideo";
import LandingPageVideoMulti from "../components/landing/LandingPageVideoMulti";
import LandingPageYT from "../components/landing/LandingPageYT";

const Other = () => {
  return (
    <div>
      <LandingPageYT />
      <h1 className="text-3xl font-bold underline ">Hello world!</h1>
      <LandingPageVideo />
      <h1 className="text-3xl font-bold underline ">Hello world!</h1>
      <LandingPageVideoMulti />
    </div>
  );
};

export default Other;
