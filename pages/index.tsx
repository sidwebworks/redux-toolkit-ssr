import type { NextPage } from "next";
import { useTypedSelector, wrapper } from "../utils/redux";
import { INCREMENT, DECREMENT } from "../utils/redux/actions";
import { useDispatch, useStore } from "react-redux";

const sectionStyles = { display: "grid", height: "100vh", width: "100%", placeItems: "center" };

const Home: NextPage = (props) => {
  
  console.log("State on render", useStore().getState(), props);

  const count = useTypedSelector<number>((state) => state.count);

  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(INCREMENT(2));

  const handleDecrement = () => dispatch(DECREMENT(1));

  return (
    <section style={sectionStyles}>
      <div style={{ textAlign: "center" }}>
        <div>{count}</div>
        <button onClick={handleIncrement}>Increment +2</button>
        <button onClick={handleDecrement}>Decrement -1</button>
      </div>
    </section>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  /**
   * Increment count by 5 on server side
   */
  store.dispatch(INCREMENT(5));

  console.log("State on server", store.getState());

  return {
    props: {
      name: "Sid",
    },
  };
});

export default Home;
