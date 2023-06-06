import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomGreeting } from "../redux/greetingsSlice";

function Greeting() {
  const { greeting, status } = useSelector((store) => store.greetings);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (status === "failed") return;
    dispatch(getRandomGreeting());
  }, [dispatch]);

  if (!greeting) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}

export default Greeting;
