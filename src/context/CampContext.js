import React from 'react';
import {createContext} from 'react';
import {getRefData} from '../api/getRefData';
import {UserContext} from './UserContext';

var CampContext = createContext();

const CampProvider = (props) => {
  const {userProfile} = React.useContext(UserContext);
  // console.log('User Profile in Campcontex:', userProfile);

  //CampContext Provides campProfile and campData states
  const [campProfile, setCampProfile] = React.useState(null);
  const [campData, setCampData] = React.useState(null);

  React.useEffect(() => {
    async function fetchCampData() {
      var tempCampProfile = await getRefData(userProfile.activeCamp);
      var tempCampData = await getRefData(tempCampProfile.camp);
      console.log('temp', tempCampData);
      setCampProfile(tempCampProfile);
      setCampData(tempCampData);
    }
    fetchCampData();
  }, []);

  return (
    <CampContext.Provider
      value={{campData, campProfile, setCampData, setCampProfile}}>
      {props.children}
    </CampContext.Provider>
  );
};

export {CampContext, CampProvider};
