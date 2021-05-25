import { useQuery } from "react-query";
import "./App.css";

import Button from "@material-ui/core/Button";

const fetchPins = async () => {
  const response = await fetch("http://192.168.1.225/gpio_api/pins/");
  const data = await response.json();
  return data;
};

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
};

function App() {
  const { data, isLoading, error } = useQuery("getAll", fetchPins);
  console.log(data, isLoading, error);

  return isLoading ? (
    <></>
  ) : (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

export default App;
