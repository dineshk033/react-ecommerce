import CardTemplateTwo from "../../../shared/components/card/card-template-2";

const SearchProductList = ({ data }) => {
  return (
    <div className="row gy-4 gx-3">
      {data.map((el) => (
        <div key={el.id} className="col-md-3">
          <CardTemplateTwo {...el} />
        </div>
      ))}
    </div>
  );
};

export default SearchProductList;
