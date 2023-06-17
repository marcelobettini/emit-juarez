import "./App.css";
import Greeter from "./components/Greeter";
function App() {
  const users = [{ userName: "HarryPotter", role: "recontra admin" }, { userName: "Dart Vader", role: "más pistola que Harry" }, { userName: "Pedro Flintstone", role: "quarryman" }, { userName: "Pedro Flintstone", role: "superuser" }];

  return (
    <>
      <header>
        <h1 className="titleTomato">Hola Mundo</h1>
        <p>Este es nuestro primer componente de React</p>
      </header>
      <main>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ratione dolor. Iste, alias odit. Voluptates architecto autem porro ipsa quam iure, dolorum excepturi quia sapiente eum sed provident vel blanditiis.
          Sunt distinctio ducimus voluptates, odit maiores nihil voluptatibus itaque aliquid rerum nostrum fuga alias iste beatae provident, ea et iure saepe necessitatibus. Optio culpa magnam id iure nisi vitae vero.
          Sapiente similique dolor dicta officia, nobis, dignissimos porro placeat consectetur sequi aliquam quam dolores earum eum? Sit repellendus tempora totam autem minima aspernatur eligendi, ab numquam corrupti, ipsum quas repudiandae.</p>
        <br />

        <section>
          {users.map((usr, idx) => <Greeter key={idx} user={usr} />
          )}
        </section>
      </main>



    </>
  );
}

export default App;
