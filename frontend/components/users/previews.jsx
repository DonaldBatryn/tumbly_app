// import React from 'react';
// import RecommendedContainer from '../recommended/recommended_container';
// import RadarContainer from '../radar/radar_container';

// class Previews extends React.Component {

//     componentDidMount() {
//         this.props.fetchUsers()
//     }

//     render() {
//         if (!this.props.users) {
//             return (
//                 <div className="right-column">
                  
//                 </div>
//             )
//         }
//         let { users } = this.props;
//         let length = users.length
//         let randIdx = Math.floor((Math.random() * 10) % length)
//         return (
//             <div className="right-column">
//                 <RecommendedContainer users={users} />
//                 <RadarContainer user={users[randIdx]} />
//             </div>
//         )
//     }
// }

// export default Previews;