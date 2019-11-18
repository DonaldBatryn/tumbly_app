import React from 'react';
import PostCreatePanelContainer from '../posts/post_create_panel_container';
import PostIndexContainer from '../posts/post_index_container';
import RecommendedContainer from '../recommended/recommended_container';
import RadarContainer from '../radar/radar_container';
// import PreviewsContainer from '../users/previews_container';

class Dashboard extends React.Component {

    

    render() {
        return (
            <div className="dashboard-container">
                <div className="dashboard-aisle">
                    <div className="left-column">
                        <PostCreatePanelContainer />
                        <PostIndexContainer />
                    </div>
                    <div className="right-column">
                        <RadarContainer />
                        <RecommendedContainer />
                        {/* <PreviewsContainer /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;