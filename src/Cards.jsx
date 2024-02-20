export function Cards() {
  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-title">Card Title</div>
          <div className="card-body">
            <div className="card-body-category">Created By</div>
            <div className="card-body-category">Date Created</div>
            <div className="card-body-category">Due Date</div>
            <div className="card-body-category">Status</div>
            <div className="card-body-category">Type</div>
            <div className="card-body-category">Description</div>
            <div className="btn-wrapper">
              <button className="btn btn-edit">
                <i className="fas fa-pencil-alt"></i>
              </button>
              <button className="btn btn-complete">
                <i className="fas fa-check"></i>
              </button>
              <button className="btn btn-delete">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-title">Card Title</div>
          <div className="card-body">
            <div className="card-body-category">Created By</div>
            <div className="card-body-category">Date Created</div>
            <div className="card-body-category">Due Date</div>
            <div className="card-body-category">Status</div>
            <div className="card-body-category">Type</div>
            <div className="card-body-category">Description</div>
            <div className="btn-wrapper">
              <button className="btn btn-edit">
                <i className="fas fa-pencil-alt"></i>
              </button>
              <button className="btn btn-complete">
                <i className="fas fa-check"></i>
              </button>
              <button className="btn btn-delete">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-title">Card Title</div>
          <div className="card-body">
            <div className="card-body-category">Created By</div>
            <div className="card-body-category">Date Created</div>
            <div className="card-body-category">Due Date</div>
            <div className="card-body-category">Status</div>
            <div className="card-body-category">Type</div>
            <div className="card-body-category">Description</div>
            <div className="btn-wrapper">
              <button className="btn btn-edit">
                <i className="fas fa-pencil-alt"></i>
              </button>
              <button className="btn btn-complete">
                <i className="fas fa-check"></i>
              </button>
              <button className="btn btn-delete">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="btn">New Card</button>
    </>
  );
}