import React, { useState } from 'react';
import { MDBInput,MDBBtn,MDBIcon } from 'mdb-react-ui-kit';

function WeddingWeb() {
    const [headerText,setHeaderText]=useState("");
    const [headerDate,setHeaderDate]=useState("");
    const [bannerTextImg,setBannerTextImg]=useState();
    const [bannerImg,setBannerImg]=useState();
    const [brideName,setBrideName]=useState("");
    const [groomName,setGroomName]=useState("");
    const [dateText,setDateText]=useState("");
    const [titleText,setTitleText]=useState("");
    const [contentText,setContentText]=useState("");
    const [storyImg,setStoryImg]=useState();
    const [storyList,setStoryList]=useState([]);
    const [scheduleList,setScheduleList]=useState();
    const clickAddStory=()=>{
        let story={
            dateText:dateText,
            titleText:titleText,
            contentText:contentText,
            storyImg:storyImg
        }
        if(storyList!=null){
            setStoryList([...storyList,story]);
            setDateText("");
            setTitleText("");
            setContentText("");
        }
        else{
            setStoryList([story]);
            setDateText("");
            setTitleText("");
            setContentText("");            
        }
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
                <div className='w-50 mt-1' style={{margin:'0 auto'}}>
                    <MDBInput label='Header Text' onChange={(e)=>{setHeaderText(e.target.value)}} type='text' />
                </div>
                <div className='w-50 mt-1' style={{margin:'0 auto'}}>
                    <MDBInput label='Header Date' onChange={(e)=>{setHeaderDate(e.target.value)}} type='text' />
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
                <div className='w-50 mt-1 text-center' style={{margin:'0 auto'}}>
                    <label>Text Image</label>
                    <MDBInput  type='file' onChange={(e)=>{setBannerTextImg(e.target.files[0])}} />
                </div>
                <div  className='w-50 mt-1 text-center' style={{margin:'0 auto'}}>
                    <label>Image Banner</label>
                    <MDBInput type='file' onChange={(e)=>{setBannerImg(e.target.files[0])}}/>
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
                    <div className='w-50 mt-1' style={{margin:'0 auto'}}>
                        <MDBInput label='Bride name' type='text' onChange={(e)=>{setBrideName(e.target.value)}}/>
                    </div>
                    <div className='w-50 mt-1' style={{margin:'0 auto'}}>
                        <MDBInput label='Groom name' type='text' onChange={(e)=>{setGroomName(e.target.value)}}/>
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
                    <div className='w-100 mt-1 me-1' style={{margin:'0 auto'}}>
                        <MDBInput label='Date Text' type='text' value={dateText} onChange={(e)=>{setDateText(e.target.value)}}/>
                    </div>
                    <div className='w-100 mt-1 me-1' style={{margin:'0 auto'}}>
                        <MDBInput label='Title Text' type='text' value={titleText} onChange={(e)=>{setTitleText(e.target.value)}}/>
                    </div>
                    <div className='w-100 mt-1 me-1' style={{margin:'0 auto'}}>
                        <MDBInput label='Content Text' type='text' value={contentText} onChange={(e)=>{setContentText(e.target.value)}}/>
                    </div>
                </div>
                <div  className='w-50 mt-1 text-center' style={{margin:'0 auto'}}  onChange={(e)=>{setStoryImg(e.target.files[0])}}>
                    <label>Image Story</label>
                    <MDBInput type='file' />
                </div>
                <div className='w-100 mt-1 me-1 text-center' style={{margin:'0 auto'}}>
                        <MDBBtn onClick={clickAddStory}>Add</MDBBtn>
                </div>
                <div className='d-flex flex-wrap'>
                    {storyList!=""&&
                        storyList.map((i,index)=>{
                            return(
                                <div className='shadow me-4 mt-4 p-2 rounded position-relative' style={{width:'200px'}}>
                                <div>
                                <MDBBtn tag='a' color='none' className='m-1 position-absolute'  style={{ color: '#dd4b39',top:-15,right:-15 }}>
                                    <MDBIcon fas icon='times-circle'  size='2x' />
                                </MDBBtn>
                                </div>
                                <h4>abc</h4>
                                <h5>abc</h5>
                                <div>abc</div>
                                <img
                                    src='wedding/images/capture3.png'
                                    className='img-fluid hover-shadow'
                                    alt='' width={'500px'}
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
                        alt='' width={'500px'}
                    />
                </div>
                <div className='d-flex '>
                    <div className='w-100 mt-1 me-1' style={{margin:'0 auto'}}>
                        <MDBInput label='Date Text' type='text' />
                    </div>
                    <div className='w-100 mt-1 me-1' style={{margin:'0 auto'}}>
                        <MDBInput label='Title Text' type='text' />
                    </div>
                    <div className='w-100 mt-1 me-1' style={{margin:'0 auto'}}>
                        <MDBInput label='Content Text' type='text' />
                    </div>
                </div>
                <div  className='w-50 mt-1 text-center' style={{margin:'0 auto'}}>
                    <label>Image Story</label>
                    <MDBInput type='file' />
                </div>
                <div className='w-100 mt-1 me-1 text-center' style={{margin:'0 auto'}}>
                        <MDBBtn>Add</MDBBtn>
                </div>
                <div className='d-flex flex-wrap'>
                    <div className='shadow me-4 mt-4 p-2 rounded position-relative' style={{width:'200px'}}>
                        <div>
                        <MDBBtn tag='a' color='none' className='m-1 position-absolute'  style={{ color: '#dd4b39',top:-15,right:-15 }}>
                            <MDBIcon fas icon='times-circle'  size='2x' />
                        </MDBBtn>
                        </div>
                        <h4>abc</h4>
                        <h5>abc</h5>
                        <div>abc</div>
                        <img
                            src='wedding/images/capture4.png'
                            className='img-fluid hover-shadow'
                            alt='' width={'500px'}
                        />
                    </div>
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
                <div  className='w-50 mt-1 text-center' style={{margin:'0 auto'}}>
                    <label>All photo</label>
                    <MDBInput type='file' />
                </div>
                <div className='w-100 mt-1 me-1 text-center' style={{margin:'0 auto'}}>
                        <MDBBtn>Add</MDBBtn>
                </div>
                <div className='d-flex flex-wrap'>
                    <div className='shadow me-4 mt-4 p-2 rounded position-relative' style={{width:'200px'}}>
                        <div>
                        <MDBBtn tag='a' color='none' className='m-1 position-absolute'  style={{ color: '#dd4b39',top:-15,right:-15 }}>
                            <MDBIcon fas icon='times-circle'  size='2x' />
                        </MDBBtn>
                        </div>
                        <img
                            src='wedding/images/capture5.png'
                            className='img-fluid hover-shadow'
                            alt='' width={'500px'}
                        />
                    </div>
                </div>
            </div>
            <div className='text-center mt-3'>
                <label>Upload Map</label>
                <MDBInput label='Link map' type='text' />
            </div>
            <div>
            <div className='w-100 mt-1 me-1 text-center' style={{margin:'0 auto'}}>
                        <MDBBtn>Upload</MDBBtn>
                </div>
            </div>
        </div>
    );
}

export default WeddingWeb;