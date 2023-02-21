export function Price({ data }) {
  console.log("data", data);
  return (
    <>
      {data.map((element, i) => (
        <p key={i}>
          {element.map((e, i) => (
            <span style={{}} key={i}>{e}</span>
          ))}
        </p>
      ))}
    </>
  );
}
