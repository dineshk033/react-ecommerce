const Header = () => {
  return (
    <div className="row bg-primary align-items-center">
      <div className="col-md-3 d-flex justify-content-center align-items-center p-3">
        <h4 className="text-light">Co</h4>
        <h4 className="text-warning">mart</h4>
      </div>
      <div className="col-md-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="search_productFilter"
            placeholder="search"
          />
          <span className="input-group-text material-icons">search</span>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-sm btn-light me-5">
          Login
        </button>
        <span role="button" className="material-icons text-light me-5">
          favorite
        </span>
        <span role="button" className="material-icons text-light">
          shopping_cart
        </span>
      </div>
    </div>
  );
};

export default Header;
