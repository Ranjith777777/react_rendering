import kgf from "../assets/images/download (1).jpg";
import leo from "../assets/images/download (2).jpg";

const Ternaryoperator = () => {
  const on = true;
  const value = null;
  const fallbackText = "Image not available";
  const imgText = "Rocky Bhai Image";
  const para = "KGF tells the rise of Rocky, a boy born into poverty who dreams of becoming the most powerful man in the world...";

  return (
    <>
      <h1 className="optional">Ternary Operator & Optional</h1>
      {on ? (
        <div className="rocky">
          <center>
            {value ?? <img src={kgf} alt="kgf" />}
            <p>{imgText}</p>
            <p>{para}</p>
          </center>
        </div>
      ) : (
        <p>{fallbackText}</p>
      )}
    </>
  );
};

export default Ternaryoperator;
