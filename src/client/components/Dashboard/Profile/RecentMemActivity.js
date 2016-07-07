import React, { Component, PropTypes } from 'react';
import RecentMemActivityView from './RecentMemActivityView';

const icon = {
  mem: 'http://rappingmanual.com/wp-content/uploads/2013/02/Motivate-self.jpg'
};

class RecentMemActivity extends Component {
  constructor(props) {
    super(props);
    this.MemData = [1, 2, 3];
  }

  componentWillReceiveProps(nextProps) {
    this.MemData = nextProps.activities.activities.data[3];
  }

  render() {
    return (
      <div>
        <div className="profile-activity-header">
          <div className="profile-text-header-container">
            <img src={icon.mem} className="activity-icon img-circle" alt="test" />
            <p className="profile-text-header">Recent Mem</p>
          </div>
        </div>
        <div className="profile-activity-body">
          <div className="profile-text-body-container">
            <ul>
              <p className="profile-text-body">{this.MemData.slice(-3).map((m, index) => 
                <RecentMemActivityView mood={m.mood} energy={m.energy} key={index} motivation={m.motivation} date={m.date_performed} />
              )}
              </p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentMemActivity;
