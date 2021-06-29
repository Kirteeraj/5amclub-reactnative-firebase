import React from 'react';
import {createContext} from 'react';
import {getProfile} from '../api';
import {getRefData} from '../api/getRefData';
import {UserContext} from './UserContext';

var CampContext = createContext();

const CampProvider = (props) => {
  const {userProfile, setUserProfile} = React.useContext(UserContext);
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

  async function refresh() {
    // Note : refreshing camp will also refresh UserProfile
    const userProfile1 = await getProfile();
    setUserProfile(userProfile1);
    console.log('refresh called');

    var tempCampProfile = await getRefData(userProfile1.activeCamp);
    var tempCampData = await getRefData(tempCampProfile.camp);
    console.log('temp', tempCampData);
    setCampProfile(tempCampProfile);
    setCampData(tempCampData);
  }

  return (
    <CampContext.Provider
      value={{campData, campProfile, setCampData, setCampProfile, refresh}}>
      {props.children}
    </CampContext.Provider>
  );
};

export {CampContext, CampProvider};
