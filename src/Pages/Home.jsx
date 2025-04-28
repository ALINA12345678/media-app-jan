import React, { useState } from 'react';
import Add from '../Components/Add';
import { Link } from 'react-router-dom';
import View from '../Components/View';
import Category from '../Components/Category';



function Home() {
  const [uploadVideoResponse, setUploadVideoResponse] = useState({});
  const [dropVideoResponse, setDropVideoResponse] = useState({});

  return (
    <div className="container mt-4">
      {/* Top row: Upload left, Watch History right */}
      <div className="d-flex justify-content-between align-items-start">
        <div className="add-videos">
        <Add setUploadVideoResponse={setUploadVideoResponse} />
        </div>
        <div>
          <Link
            to={'/watch-history'}
            style={{ textDecoration: 'none', color: 'blue', fontSize: '30px' }}
          >
            Watch-History{" "}
            <i className="fa-solid fa-clock-rotate-left fa-flip-horizontal"></i>
          </Link>
        </div>
      </div>

      {/* Bottom row: All videos and category */}
      <div className="row mt-5">
        <div className="col-lg-9">
          <h2 className="text-info">All Videos</h2>
          <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse} />
        </div>
        <div className="col-lg-3">
          <Category dropVideoResponse={dropVideoResponse}/>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
