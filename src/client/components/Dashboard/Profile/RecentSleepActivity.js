import React, { Component, PropTypes } from 'react';
import RecentSleepActivityView from './RecentSleepActivityView';

const icon = {
  sleep: 'http://i4.mirror.co.uk/incoming/article2367811.ece/ALTERNATES/s615/Man-sleeping-and-snoring-overhead-view.jpg'
};

class RecentSleepActivity extends Component {
  constructor(props) {
    super(props);
    this.SleepData = [1, 2, 3];
  }

  componentWillReceiveProps(nextProps) {
    this.SleepData = nextProps.activities.activities.data[0];
  }

  render() {
    return (
      <div>
        <div className="profile-activity-header">
          <div className="profile-text-header-container">
            <img src={icon.Sleep} className="activity-icon img-circle" alt="test" />
            <p className="profile-text-header">Recent Sleep</p>
          </div>
        </div>
        <div className="profile-activity-body">
          <div className="profile-text-body-container">
            <ul>
              <p className="profile-text-body">{this.SleepData.slice(-3).map((m, index) => 
                <RecentSleepActivityView duration={m.duration} quality={m.quality} key={index} date={m.date_performed} />
              )}
              </p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentSleepActivity;
