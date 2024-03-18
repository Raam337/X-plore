import { useState } from "react";
import { sendData } from "../../assets/utils/database";
import "./style.css";
import SearchLocation from "../LocationInput/SearchLocation";

function Input() {
  const [postData, setPostData] = useState({
    name: "",
    postText: "",
    imgData: "",
    place: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
    sendData(postData);
  };

  const handleChange = (e) => {
    const { name: field, value: val } = e.target;
    setPostData({ ...postData, [field]: val });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result;
        setPostData({ ...postData, imgData: imageDataUrl });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLocationSelect = (location) => {
    console.log("Selected location:", location);
    setPostData({ ...postData, place: location.name });
  };

  return (
    <div className="container">
      <form className="border border-1 p-4">
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                onChange={handleChange}
                type="text"
                name="name"
                className="form-control"
                id="nameInput"
              />
              <label htmlFor="nameInput">Name</label>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-floating">
              <textarea
                onChange={handleChange}
                name="postText"
                className="form-control"
                id="postInput"
              ></textarea>
              <label htmlFor="postInput">Post message</label>
            </div>
          </div>
          <div className="locationTag col-md-8">
            <SearchLocation onPlaceSelect={handleLocationSelect} />
          </div>
          <div className="chooseImage col-md-4">
            <div className="form-floating">
              <input
                onChange={handleImageChange}
                type="file"
                name="imgData"
                className="form-control"
                id="imageInput"
                aria-label="Upload"
              />
              <label htmlFor="imageInput">Choose an image</label>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary col-md-8" onClick={handleSubmit}>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export { Input };
