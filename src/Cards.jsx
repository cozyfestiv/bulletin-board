export function Cards() {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-title">Card Title</div>
        <div className="card-body">
          <div className="card-body-category">Created By</div>
          <div className="card-body-category">Status</div>
          <div className="card-body-category">Type</div>
          <div className="card-body-category">Description</div>
          <button className="btn btn-edit">Edit Card</button>
        </div>
      </div>
      <button className="btn">Add Card</button>
    </div>
  );
}
