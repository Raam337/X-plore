import { useState } from "react"
import { sendData } from "../../assets/utils/database";
import "./style.css"
function Input(prop) {
const [postData, setPostData] = useState({
    name:"",
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
        <fieldset disabled={!prop.status}>
        <div className="row g-2 col-5">
            <div className="input-group mb-3 text-left">
                <span className="input-group-text" id="basic-addon1">@</span>
                <span className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">sdasd</span>
            </div>
        </div>
        <div className="form-floating mb-3">
            <textarea onChange={handleChange} name="postText" className="form-control" id="postInput"></textarea>
            <label htmlFor="postInput">Post message</label>
        </div>
        <div className="row g-2 mb-3">
            <div className="col-md form-floating"> 
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">#</span>
                    <input type="text" className="form-control" placeholder="Tag place" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <div className="col-md"> 
                <input onChange={handleImageChange} type="file" name="imgData" className="form-control" id="imageInput" aria-label="Upload"/>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
        </fieldset>
    </form>
)
}

export {Input}