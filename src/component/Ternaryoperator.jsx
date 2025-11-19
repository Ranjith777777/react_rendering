import kgf from "../assets/images/download (1).jpg";
import leo from "../assets/images/download (2).jpg";


const Ternaryoperator = () => {
  const on =true;
  const off = false;
  const value=null
  const paragah="images not show or not avaiable "
  const img="rocky bhai images"

  return (
    <>
      {on ? (
        <div className="teranty">
          <center>
          {value ?? <img src={kgf} alt="kgf" className="kgfim" />}
           
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
