export default function Posts(props) {
  return (
    <div className="grid-items">
      <h4 className="title"> {props.title}</h4>
      <p className="content">{props.description}</p>
      <button className="dark"> click</button>
    </div>
  );
}
