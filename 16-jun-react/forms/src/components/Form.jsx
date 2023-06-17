import { useRef } from "react";
const Form = () => {
  const title = useRef();
  const code = useRef();
  const rating = useRef();
  const tempNeutral = useRef();
  const tempHot = useRef();
  const tempCold = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = tempNeutral.current.checked ? "neutral" : tempHot.current.checked ? "caliente" : "frio";
    console.log(
      title.current.value,
      code.current.value,
      rating.current.value,
      temp
    );
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="colorTitle">title: </label>
        <input ref={title} id="colorTitle" type="text" required />
        <br />
        <br />
        <label htmlFor="colorCode">code: </label>
        <input ref={code} id="colorCode" type="color" required />
        <br />
        <select ref={rating} name="rating" id="rating">
          <option value="bad">bad</option>
          <option value="regular">regular</option>
          <option value="good">good</option>
          <option value="veryGood">very good</option>
        </select>
        <br />
        <label htmlFor="neutral">Neutral</label>
        <input ref={tempNeutral} type="radio" name="temp" id="neutral" value="neutral"
        />
        <label htmlFor="cold">Cold</label>
        <input ref={tempCold} type="radio" name="temp" id="cold" value="cold" />
        <label htmlFor="hot">Hot</label>
        <input ref={tempHot} type="radio" name="temp" id="hot" value="hot" />
        <br />
        <input type="submit" value={"add"} />
      </form>

    </div>
  );
};

export default Form;