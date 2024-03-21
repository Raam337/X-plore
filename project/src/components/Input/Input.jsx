import { useState, useEffect } from "react"
import { sendData } from "../../assets/utils/database";
import "./style.css"
import SearchInput from "../LocationInput/SearchInput";
import SearchLocation from "../LocationInput/SearchLocation";
function Input({authData}) {
const [postData, setPostData] = useState({
    name:"",
    postText:"",
    imgData: "",
    place:"",
    icon:""
});

const [submitState,setSubmitState] = useState({
    name:"",
    postText:"",
    imgData: "",
    place:"",
    icon:""
});


    useEffect(() => {
        console.log(submitState, "---usestate---");
        if(!submitState.name == "") sendData(submitState); 
      }, [submitState]);
      
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(authData);
        setSubmitState(prevSubmissionData => ({
          ...prevSubmissionData,
          ...postData,
          name: authData.login,
          icon: authData.icon
        }));
      };

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
    <form className="border border-1 p-4" onSubmit={handleSubmit} onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault(); }}>
        <fieldset disabled={!authData.status}>
        <div className="row g-2 col-5">
            <div className="input-group mb-3 text-left">
                <span className="input-group-text" id="basic-addon1">@</span>
                <span className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">{authData.login}</span>
            </div>
        </div>
        <div className="form-floating mb-3">
            <textarea onChange={handleChange} name="postText" className="form-control" id="postInput"></textarea>
            <label htmlFor="postInput">Post message</label>
        </div>
        <div className="row g-2 mb-3">
            <div className="col-md form-floating"> 
                <div className="input-group col-md">
                    <SearchLocation changeLocation={setPostData} masterState={postData}/>
                </div>
            </div>
            <div className="col-md"> 
                <input onChange={handleImageChange} type="file" name="imgData" className="form-control" id="imageInput" aria-label="Upload"/>
            </div>
        </div>
        <button type="submit" className="btn btn-primary col-md-6">Post</button>
        </fieldset>
    </form>
)
}

export {Input}