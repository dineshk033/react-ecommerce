import CardTemplateOne from "../../../shared/components/card/card-template-one";

const CardList = ({ title, image }) => {
  return (
    <div className="row row-cols-10 mt-5 gx-3">
      <div className="card col-md-2 d-flex align-items-center justify-content-center">
        <div className="fs-5 mb-2 text-center">{title}</div>
        <button className="btn btn-primary">view all</button>
      </div>
      {Array(5)
        .fill(1)
        .map((_, idx) => {
          return (
            <div key={idx} className="col-md-2">
              <CardTemplateOne thumbnail={image(640, 480, true)} />
            </div>
          );
        })}
    </div>
  );
};

export default CardList;
CardList.defaultProps = {
  title: "Show all Shoe's",
};
