import LandingPageVideo from "../components/other/LandingPageVideo";
import LandingPageVideoMulti from "../components/other/LandingPageVideoMulti";
import LandingPageYT from "../components/other/LandingPageYT";

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
