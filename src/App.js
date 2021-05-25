import { useQuery } from "react-query";
import "./App.css";

const fetchPins = async () => {
  const response = await fetch("http://192.168.1.225/gpio_api/pins/");
  const data = await response.json();
  return data;
};

function App() {
  const { data, isLoading, error } = useQuery("getAll", fetchPins);
  console.log(data, isLoading, error);

  return isLoading ? <></> : <div className="App">{data[0].pin_num}</div>;
}

export default App;
