import Input from "../Input/Input";

// eslint-disable-next-line react/prop-types
const Form = ({ onSubmit }) => {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const name = event.target[0].value;
    const email = event.target[1].value;

    onSubmit({ name, email });
  };

  return (
    <form
      onSubmit={safeSubmit}
      className="flex flex-col items-center justify-center h-full -mt-20 gap-10 mx-5"
    >
      <Input type="text" required placeholder="Insira seu nome..." />
      <Input type="email" required placeholder="Insira seu email..." />

      <button type="submit" className="alura-button">
        Seguir
      </button>
    </form>
  );
};

export default Form;
