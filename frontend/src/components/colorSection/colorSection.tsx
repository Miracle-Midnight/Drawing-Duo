function ColorSection(props: any) {
  return (
    <div className="grid grid-cols-2 my-2">
      <div className="mr-2">{props.number}</div>
      <div
        className="w-10 h-6"
        style={{
          backgroundColor: `rgba(${props.red},${props.green},${props.blue})`,
        }}
      ></div>
    </div>
  );
}

export default ColorSection;
