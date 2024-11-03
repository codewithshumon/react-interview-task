import LandingPageVideo from "../components/other/LandingPageVideo";
import LandingPageVideoMulti from "../components/other/LandingPageVideoMulti";
import LandingPageYT from "../components/other/LandingPageYT";
import TrackDivVisibility from "../components/other/TrackDivVisibility";

const Other = () => {
  return (
    <div>
      <LandingPageYT />
      <h1 className="text-3xl font-bold underline ">Hello world!</h1>
      <LandingPageVideo />
      <h1 className="text-3xl font-bold underline ">Hello world!</h1>
      <LandingPageVideoMulti />
      <h1 className="text-3xl font-bold underline ">Track Div Visibility</h1>
      <TrackDivVisibility />
    </div>
  );
};

export default Other;
