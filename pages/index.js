import HomePage from "../components/Home";
import TopHeader from "../components/TopHeader/topHeader";

const Home = () => {
  return (
    <TopHeader
      title="Be the Story | Join Ather"
      heading="Be the Story | Join Ather"
      description="Moonshots call for all hands on deck, and we're seeking minds that think epic!"
      component={<HomePage />}
    />
  );
};

export default Home;
