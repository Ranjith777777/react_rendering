const Number = () => {
  const values = Array.from({ length: 10 }, (_, i) => ({
    a: i + 1,
    b: 2,
    result: (i + 1) * 2,
  }));

  return (
    <>
      <h1 className="multiple">Multiple</h1>
      {values.map((item, index) => (
        <p key={index} className="number">
          {item.a} * {item.b} = {item.result}
        </p>
      ))}
      <hr />
    </>
  );
};

export default Number;
