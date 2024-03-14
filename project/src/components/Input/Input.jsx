import { useState } from "react"
import { sendData } from "../../assets/utils/database";

function Input() {
const [postData, setPostData] = useState({
     postText:"",
     imgData: "",
     place:""
});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(postData);
        sendData(postData);
    }

    const handleChange = (e) => {
        const {name:field, value:val} = e.target;
        setPostData({...postData, [field]:val})
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const imageDataUrl = reader.result;
            setPostData({...postData,imgData:imageDataUrl});
          };
          reader.readAsDataURL(file);
        }
      };


return (
    <form className="border border-1 p-4" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
            <textarea onChange={handleChange} name="postText" className="form-control" id="postInput"></textarea>
            <label htmlFor="postInput">Post message</label>
        </div>
        <div className="row g-2 mb-3">
            <div className="col-md form-floating"> 
                <input onChange={handleChange} type="text" name="place" className="form-control" id="placeInput"/>
                <label htmlFor="placeInput">Tag a place</label>
            </div>
            <div className="col-md"> 
                <input onChange={handleImageChange} type="file" name="imgData" className="form-control" id="imageInput" aria-label="Upload"/>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
    </form>
)
}

export {Input}