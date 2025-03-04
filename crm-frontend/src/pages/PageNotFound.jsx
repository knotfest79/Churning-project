import { useMoveBack } from "../../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <div>
      <h1>The page you are looking could not be found!!</h1>
      <button onClick={moveBack}>Go back</button>
    </div>
  );
}

export default PageNotFound;
