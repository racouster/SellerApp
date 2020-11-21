import React, { useState } from 'react';
import './ProfileContainer.css';
import Box from '3box';
import Profile from './Profile';
import GetProfile from './GetProfile';
import Location from './Location';
import Seller from './Seller';
import Web3 from 'web3'

import { Geolocation, Geoposition } from '@ionic-native/geolocation';

declare global {
  interface Window {
    ethereum: any;
  }
}

interface ProfileContainerProps { }

const ProfileContainer: React.FC<ProfileContainerProps> = () => {

  //import Authereum from 'authereum'
  // const authereum = new Authereum('kovan')
  // const provider = authereum.getProvider()
  // let web3 = new Web3(provider)
  //await provider.enable()

  let apikey = '';
  let web3 = new Web3(Web3.givenProvider || "wss://mainnet.infura.io/ws/v3/" + apikey)
  const [did, setProfile] = useState<string>('')
  const [lat, setLat] = useState<number>(0)
  const [lon, setLon] = useState<number>(0)
  const [bx, setBx] = useState<Box>()

  const getLocation = async function getLocation() {
    let loctn = await Geolocation.getCurrentPosition() as Geoposition;
    setLat(loctn.coords.latitude);
    setLon(loctn.coords.longitude);
  }

  const sendTomarket = async function sendTomarket(itemToSell: Object) {
    //let spaces = Box.listSpaces(firstAccount);
    const space = await bx?.openSpace('DataDefenders')

    await space?.private.set('item-to-buy', `${lat}:${lon}`)
  }

  const getProfile = async function getProfile(address: string) {
    

    let provider = window?.ethereum || web3.currentProvider;
    let accounts = await window?.ethereum?.enable();
    accounts = accounts || await web3.eth.getAccounts();

    let firstAccount: string = accounts.shift() || '';

    //const newProfile = await Box.getProfile(firstAccount);
    
    //const provB = await window.ethereum?.request({ method: 'eth_requestAccounts' })
    const box = await Box.openBox(firstAccount, provider)
    await box.syncDone;
    setBx(box)
    setProfile(box.DID)

  }


  return (
    <div>
      <GetProfile profileGetter={getProfile} />
      <Profile Name={did} />
      <Location lat={lat} lon={lon} locationGetter={getLocation} />
      <Seller sellFunction={sendTomarket} sellItem={[lat, lon]} />
    </div>
  );
};

export default ProfileContainer;
