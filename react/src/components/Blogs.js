/* eslint-disable jsx-a11y/alt-text */
import "./styles/blogs.scss";

export default function Blogs(props) {
  return (
    <div>
      <sector id="blog" class="blog">
        <div className="blog__item">
          <img src={`../images/${props.image}`} className="image" />
          <div className="blog__item__text">
            <h4 className="title">{props.title}</h4>
            <p>{props.description}</p>
            <button class="btn"> click</button>
          </div>
        </div>
      </sector>
    </div>
  );
}
