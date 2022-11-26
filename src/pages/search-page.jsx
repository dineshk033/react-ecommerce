import FilterSection from "../features/search-page/components/filter-section";
import SearchProductList from "../features/search-page/components/search-product-list";

const SearchPage = () => {
  return (
    <>
      <div className="row my-3 justify-content-end">
        <div className="col-md-3">
          <select
            defaultValue="REL"
            className="form-select"
            aria-label="Sort By"
          >
            <option value="REL">Sort by Relevance</option>
            <option value="ASC">Sort By ASC</option>
            <option value="DESC">Sort By Desc</option>
          </select>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-3">
          <FilterSection />
        </div>
        <div className="col-md-9">
          <SearchProductList />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
