
function Input() {


return (
    <form className="border border-1 p-4">
        <div className="form-floating mb-3">
            <textarea className="form-control" id="postInput"></textarea>
            <label htmlFor="postInput">Post message</label>
        </div>
        <div className="row g-2 mb-3">
            <div className="col-md form-floating"> 
                <input type="text" className="form-control" id="placeInput"/>
                <label htmlFor="placeInput">Tag a place</label>
            </div>
            <div className="col-md"> 
                <input type="file" className="form-control" id="imageInput" aria-label="Upload"/>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
    </form>
)
}

export {Input}