import Buttons from "./component./Buttons";
import OutlineChat from "./component./Chat/OutlineChat";
import Floating from "./component./FloatingLabel/Floating";
import Signup from "./component./Form/Signup";
import Grid from "./component./Grid/Grid";
import Navbar from "./component./Navbar";
import Profile from "./component./Profile";
import ProfileHover from "./component./ProfileHover";
import CallCard from "./component./card/CallCard";
import CardButton from "./component./card/CardButton";
import CardImage from "./component./card/CardImage";
import DefaultCard from "./component./card/DefaultCard";
import Ecommerce from "./component./card/Ecommerce";
import PricingCard from "./component./card/PricingCard";
import Transition from "./component./transistion/Transition";

function App() {
  // useEffect(() => {
  //   const handleClick = (events) => {
  //     if (navbarRef.current&&!navbarRef.current.contains(events.target)) {
  //       setIsimport aziz from "./assets/aziz.png";Visiable(false);
  //     }
  //   };
  //   document.addEventListener("click", handleClick);
  // }, []);
  return (
    <>
      <Navbar title="My App" />
      <Floating />
      <div className="flex">
        <Profile />
        <ProfileHover />
      </div>
      <Signup />
      <Buttons />
      <div className="grid md:grid-cols-2 xl:grid-cols-4  grid-flow-col-dense">
        <DefaultCard />
        <CardButton />
        <CardImage />
        <Ecommerce />
        <CallCard />
        <PricingCard />
      </div>
      <div>
        <OutlineChat />
      </div>

      <Grid />
      <Transition />
    </>
  );
}

export default App;
