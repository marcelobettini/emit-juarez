// import Form from "./components/Form";
import FormNoRef from "./components/FormNoRef";
import Counter from "./Counter";

function App() {
  console.count("App just rendered");


  return (
    <>
      <Counter></Counter>
      {/* <Form /> */}
      <FormNoRef />
    </>
  );
}

export default App;
