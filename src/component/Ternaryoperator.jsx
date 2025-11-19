import kgf from "../assets/images/download (1).jpg";

const Ternaryoperator = () => {
  const on = true;
  const off = false;
  const paragah="no imgae to show"
  const img="rocky bhai images"

  return (
    <>
      {on ? (
        <div className="teranty">
          <center>
          <img src={kgf} alt="kgf" className="kgfim" />
          <p>{img}</p>
          </center>
        </div>
      ) : (
        <p>{paragah}</p>
      )}
    </>
  );
};

export default Ternaryoperator;
