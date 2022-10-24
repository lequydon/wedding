import React, { useState } from 'react';
import { MDBInput, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import axios from 'axios';

function WeddingWeb() {
    const [headerText, setHeaderText] = useState("");
    const [headerDate, setHeaderDate] = useState("");
    const [bannerTextImg, setBannerTextImg] = useState();
    const [bannerImg, setBannerImg] = useState();
    const [backgroundImg, setBackgroundImg] = useState();
    const [brideName, setBrideName] = useState("");
    const [groomName, setGroomName] = useState("");
    const [dateText, setDateText] = useState("");
    const [titleText, setTitleText] = useState("");
    const [contentText, setContentText] = useState("");
    const [storyImg, setStoryImg] = useState();
    const [facebookGroom, setFacebookGroom] = useState("");
    const [facebookBride, setFacebookBride] = useState("");
    const [dateWedding, setDateWedding] = useState();
    const [dateTextSchedule, setDateTextSchedule] = useState("");
    const [titleTextSchedule, setTitleTextSchedule] = useState("");
    const [contentTextSchedule, setContentTextSchedule] = useState("");
    const [storyImgSchedule, setStoryImgSchedule] = useState();
    const [storyList, setStoryList] = useState([]);
    const [scheduleList, setScheduleList] = useState([]);
    const [listPhoto, setListPhoto] = useState([]);
    const [youtubeLink, setYoutubeLink] = useState("");
    const [map, setMap] = useState("");
    const clickAddStory = async () => {
        let showImgStory=await convertBase64(storyImg);
        let story = {
            dateText: dateText,
            titleText: titleText,
            contentText: contentText,
            storyImg: storyImg,
            showImgStory:showImgStory
        }
        if (storyList != null) {
            setStoryList([...storyList, story]);
            setDateText("");
            setTitleText("");
            setContentText("");
            setStoryImg(null);
        }
        else {
            setStoryList([story]);
            setDateText("");
            setTitleText("");
            setContentText("");
            setStoryImg(null);
        }
    }
    const clickAddStorySchedule=async()=>{
        let showImgStory=await convertBase64(storyImgSchedule);
        let story = {
            dateText: dateTextSchedule,
            titleText: titleTextSchedule,
            contentText: contentTextSchedule,
            storyImg: storyImgSchedule,
            showImgStory:showImgStory
        }
        if (scheduleList != null) {
            setScheduleList([...scheduleList, story]);
            setDateTextSchedule("");
            setTitleTextSchedule("");
            setContentTextSchedule("");
            setStoryImgSchedule(null);
        }
        else {
            setScheduleList([story]);
            setDateTextSchedule("");
            setTitleTextSchedule("");
            setContentTextSchedule("");
            setStoryImgSchedule(null);
        }
    }
    const deleteStory=(e,i)=>{
        let result_data = [];
        result_data = storyList.filter((main) => main != i);
        setStoryList(result_data);
    }
    const deleteStorySchedule=(e,i)=>{
        let result_data = [];
        result_data = scheduleList.filter((main) => main != i);
        setScheduleList(result_data);
    }
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }
      const uploadPhoto  =async (file)=>{
        let showPhotoFile=await convertBase64(file);
        let photo = {
            photoFile: file,
            showPhotoFile: showPhotoFile
        }
        setListPhoto([...listPhoto,photo]);
      }
      const deletePhoto=(e,i)=>{
        let result_data = [];
        result_data = listPhoto.filter((main) => main != i);
        setListPhoto(result_data);
      }
      const formPostData=()=>{
        let formData = new FormData();
        formData.append("headerText",headerText);
        formData.append("headerDate",headerDate);
        formData.append("bannerTextImg",bannerTextImg);
        formData.append("bannerImg",bannerImg);
        formData.append("brideName",brideName);
        formData.append("groomName",groomName);   
        formData.append("backgroundImg",backgroundImg);
        formData.append("facebookGroom",facebookGroom);     
        formData.append("facebookBride",facebookBride);     
        formData.append("dateWedding",dateWedding);     
        storyList.map((data, index) => {
            formData.append(`storyList[${index}][dateText]`,data.dateText);
            formData.append(`storyList[${index}][titleText]`,data.titleText);
            formData.append(`storyList[${index}][contentText]`,data.contentText);
            formData.append(`storyList[${index}][storyImg]`,data.storyImg);
        });
        scheduleList.map((data, index) => {
            formData.append(`scheduleList[${index}][dateText]`,data.dateText);
            formData.append(`scheduleList[${index}][titleText]`,data.titleText);
            formData.append(`scheduleList[${index}][contentText]`,data.contentText);
            formData.append(`scheduleList[${index}][storyImg]`,data.storyImg);
        });
        listPhoto.map((data, index) => {
            formData.append(`listPhoto[${index}][photoFile]`,data.photoFile);
        });
        formData.append("youtubeLink",youtubeLink);
        formData.append("map",map);
        axios({
            method: "POST",
            url: "/api/wedding",
            data: formData,
            headers: {
              'Content-Type': 'multipart/form-data; boundary=${form._boundary}'
            }
          })
          .then(function (response) {
            //handle success
            console.log(response);
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          });
      }
    return (
        <div className="container">
            <div>
                <div className='text-center'>
                    <img
                        src='wedding/images/capture6.png'
                        className='img-fluid hover-shadow'
                        alt='' width={'500px'}
                    />
                </div>
                <div className='w-50 mt-1' style={{ margin: '0 auto' }}>
                    <MDBInput label='Header Text' onChange={(e) => { setHeaderText(e.target.value) }} type='text' />
                </div>
                <div className='w-50 mt-1' style={{ margin: '0 auto' }}>
                    <MDBInput label='Header Date' onChange={(e) => { setHeaderDate(e.target.value) }} type='text' />
                </div>
            </div>
            <div className='mt-3'>
                <div className='text-center'>
                    <img
                        src='wedding/images/capture1.png'
                        className='img-fluid hover-shadow'
                        alt=''
                        width={'500px'}
                    />
                </div>
                <div className='w-50 mt-1 text-center' style={{ margin: '0 auto' }}>
                    <label>Text Image</label>
                    <MDBInput type='file' onChange={(e) => { setBannerTextImg(e.target.files[0]) }} />
                </div>
                <div className='w-50 mt-1 text-center' style={{ margin: '0 auto' }}>
                    <label>Image Banner</label>
                    <MDBInput type='file' onChange={(e) => { setBannerImg(e.target.files[0]) }} />
                </div>
            </div>
            <div className='mt-3'>
                <div className='text-center'>
                    <img
                        src='wedding/images/capture2.png'
                        className='img-fluid hover-shadow'
                        alt='' width={'500px'}
                    />
                </div>
                <div>
                    <div className='w-50 mt-1 text-center' style={{ margin: '0 auto' }}>
                        <label>BackgroundIMG</label>
                        <MDBInput type='file' onChange={(e) => { setBackgroundImg(e.target.files[0]) }} />
                    </div>
                    <div className='w-50 mt-1' style={{ margin: '0 auto' }}>
                        <MDBInput label='Bride name' type='text' onChange={(e) => { setBrideName(e.target.value) }} />
                    </div>
                    <div className='w-50 mt-1' style={{ margin: '0 auto' }}>
                        <MDBInput label='Groom name' type='text' onChange={(e) => { setGroomName(e.target.value) }} />
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <div className='text-center'>
                    <img
                        src='wedding/images/capture3.png'
                        className='img-fluid hover-shadow'
                        alt='' width={'500px'}
                    />
                </div>
                <div className='d-flex'>
                    <div className='w-100 mt-1 me-1' style={{ margin: '0 auto' }}>
                        <MDBInput label='Date Text' type='text' value={dateText} onChange={(e) => { setDateText(e.target.value) }} />
                    </div>
                    <div className='w-100 mt-1 me-1' style={{ margin: '0 auto' }}>
                        <MDBInput label='Title Text' type='text' value={titleText} onChange={(e) => { setTitleText(e.target.value) }} />
                    </div>
                    <div className='w-100 mt-1 me-1' style={{ margin: '0 auto' }}>
                        <MDBInput label='Content Text' type='text' value={contentText} onChange={(e) => { setContentText(e.target.value) }} />
                    </div>
                </div>
                <div className='w-50 mt-1 text-center' style={{ margin: '0 auto' }} value={storyImg} onChange={(e) => { setStoryImg(e.target.files[0]) }}>
                    <label>Image Story</label>
                    <MDBInput type='file' />
                </div>
                <div className='w-100 mt-1 me-1 text-center' style={{ margin: '0 auto' }}>
                    <MDBBtn onClick={clickAddStory}>Add</MDBBtn>
                </div>
                <div className='d-flex flex-wrap'>
                    {storyList != "" &&
                        storyList.map((i, index) => {
                            return (
                                <div key={index} className='shadow me-4 mt-4 p-2 rounded position-relative' style={{ width: '200px' }}>
                                    <div>
                                        <MDBBtn onClick={(e)=>{deleteStory(e,i)}} tag='a' color='none' className='m-1 position-absolute' style={{ color: '#dd4b39', top: -15, right: -15 }}>
                                            <MDBIcon fas icon='times-circle' size='2x' />
                                        </MDBBtn>
                                    </div>
                                    <h4>{i.dateText}</h4>
                                    <h5>{i.titleText}</h5>
                                    <div>{i.contentText}</div>
                                    <img
                                        src={i.showImgStory}
                                        className='img-fluid hover-shadow'
                                        alt='' width={'500px'} height={'500px'}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='mt-3'>
                <div className='text-center'>
                    <img
                        src='wedding/images/capture4.png'
                        className='img-fluid hover-shadow'
                        alt='' width={'500px'} height={'500px'}
                    />
                </div>
                <div className='d-flex '>
                    <div className='w-100 mt-1 me-1' style={{ margin: '0 auto' }}>
                        <MDBInput label='Date Text' value={dateTextSchedule} onChange={(e) => { setDateTextSchedule(e.target.value) }} type='text' />
                    </div>
                    <div className='w-100 mt-1 me-1' style={{ margin: '0 auto' }}>
                        <MDBInput label='Title Text' value={titleTextSchedule} type='text' onChange={(e) => { setTitleTextSchedule(e.target.value) }} />
                    </div>
                    <div className='w-100 mt-1 me-1' style={{ margin: '0 auto' }}>
                        <MDBInput label='Content Text' value={contentTextSchedule} type='text' onChange={(e) => { setContentTextSchedule(e.target.value) }} />
                    </div>
                </div>
                <div className='w-50 mt-1 text-center' style={{ margin: '0 auto' }}>
                    <label>Image Story</label>
                    <MDBInput type='file' onChange={(e) => { setStoryImgSchedule(e.target.files[0]) }}/>
                </div>
                <div className='w-100 mt-1 me-1 text-center' style={{ margin: '0 auto' }}>
                    <MDBBtn onClick={clickAddStorySchedule}>Add</MDBBtn>
                </div>
                <div className='d-flex flex-wrap'>
                    {scheduleList != "" &&
                        scheduleList.map((i, index) => {
                            return (
                                <div key={index} className='shadow me-4 mt-4 p-2 rounded position-relative' style={{ width: '200px' }}>
                                    <div>
                                        <MDBBtn onClick={(e)=>{deleteStorySchedule(e,i)}} tag='a' color='none' className='m-1 position-absolute' style={{ color: '#dd4b39', top: -15, right: -15 }}>
                                            <MDBIcon fas icon='times-circle' size='2x' />
                                        </MDBBtn>
                                    </div>
                                    <h4>{i.dateTextSchedule}</h4>
                                    <h5>{i.titleTextSchedule}</h5>
                                    <div>{i.contentTextSchedule}</div>
                                    <img
                                        src={i.showImgStory}
                                        className='img-fluid hover-shadow'
                                        alt='' width={'500px'} height={'500px'}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='mt-3'>
                <div className='text-center'>
                    <img
                        src='wedding/images/capture5.png'
                        className='img-fluid hover-shadow'
                        alt='' width={'500px'}
                    />
                </div>
                <div className='w-50 mt-1 text-center' style={{ margin: '0 auto' }}>
                    <label>All photo</label>
                    <MDBInput type='file' onChange={(e) => { uploadPhoto(e.target.files[0]) }}/>
                </div>
                <div className='d-flex flex-wrap'>
                {listPhoto != "" &&
                        listPhoto.map((i, index) => {
                            return (
                                <div key={index} className='shadow me-4 mt-4 p-2 rounded position-relative' style={{ width: '200px' }}>
                                <div>
                                    <MDBBtn onClick={(e)=>{deletePhoto(e,i)}} tag='a' color='none' className='m-1 position-absolute' style={{ color: '#dd4b39', top: -15, right: -15 }}>
                                        <MDBIcon fas icon='times-circle' size='2x' />
                                    </MDBBtn>
                                </div>
                                <img
                                    src={i.showPhotoFile}
                                    className='img-fluid hover-shadow'
                                    alt='' width={'500px'} height={'500px'}
                                />
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='text-center mt-3'>
                <label>Map Link</label>
                <MDBInput onChange={(e) => { setMap(e.target.value) }} label='Link map' type='text' />
            </div>
            <div className='text-center mt-3'>
                <label>Youtube Link</label>
                <MDBInput onChange={(e) => { setYoutubeLink(e.target.value) }} label='Link youtube' type='text' />
            </div>
            <div className='text-center mt-3'>
                <label>FacebookBride</label>
                <MDBInput onChange={(e) => { setFacebookBride(e.target.value) }} label='facebook bride' type='text' />
            </div>
            <div className='text-center mt-3'>
                <label>FacebookGroom</label>
                <MDBInput onChange={(e) => { setFacebookGroom(e.target.value) }} label='facebook groom' type='text' />
            </div>
            <div className='text-center mt-3'>
                <label>WeddingDay</label>
                <MDBInput onChange={(e) => { setDateWedding(e.target.value) }} label='date wedding' type='date' />
            </div>
            <div>
                <div className='w-100 mt-1 me-1 text-center' style={{ margin: '0 auto' }}>
                    <MDBBtn onClick={formPostData}>Upload</MDBBtn>
                </div>
            </div>
        </div>
    );
}

export default WeddingWeb;