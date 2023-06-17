const FormNoRef = () => {
  console.count("FormNoRef also renders... once at least");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.colorCode.value);

  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="colorTitle">title: </label>
        <input id="colorTitle" type="text" required />
        <br />
        <br />
        <label htmlFor="colorCode">code: </label>
        <input id="colorCode" type="color" required />
        <br />
        <select name="rating" id="rating">
          <option value="bad">bad</option>
          <option value="regular">regular</option>
          <option value="good">good</option>
          <option value="veryGood">very good</option>
        </select>
        <br />
        <label htmlFor="neutral">Neutral</label>
        <input type="radio" name="temp" id="neutral" value="neutral"
        />
        <label htmlFor="cold">Cold</label>
        <input type="radio" name="temp" id="cold" value="cold" />
        <label htmlFor="hot">Hot</label>
        <input type="radio" name="temp" id="hot" value="hot" />
        <br />
        <input type="submit" value={"add"} />
      </form>

    </div>
  );
};

export default FormNoRef;