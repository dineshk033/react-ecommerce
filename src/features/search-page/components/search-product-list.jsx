import CardTemplateTwo from "../../../shared/components/card/card-template-2";

const SearchProductList = () => {
  return (
    <div className="row gy-4 gx-3">
      {Array(20)
        .fill(1)
        .map((_, el) => (
          <div key={el.toString()} className="col-md-3">
            <CardTemplateTwo />
          </div>
        ))}
    </div>
  );
};

export default SearchProductList;
