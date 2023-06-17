/* eslint-disable react/prop-types */
function Greeter({ user }) {
  return (
    <>
      <h3>Hola</h3>
      <p>El nombre es: {user.userName}</p>

    </>
  );
}

export default Greeter;
