import { Navigate } from "react-router-dom";

import "./profile.css";
import "../../global.css";
import { GlobalToolBar } from "../../global";
import METAMASK from '../../images/METAMASK.png';

export default function Profile(props){

    const ProfilePage = () => {
        return (
            
        <div className = "profile-background">
            <div className = "profile">
                <img src = {METAMASK} alt = "logo" height = "100%"/>
                <div className = "profile-account">
                    <p>
                        <b>Profile details</b>
                    </p>
                    <hr color = "black"/>
                    <p>
                        Address:&nbsp;
                        <span className = "global-message">{props.address}</span>
                        <br/>
                        Network:&nbsp;
                        <span className = "global-message">{props.networkType}</span>
                        <br/>
                        Balance:&nbsp;
                        <span className = "global-message">{props.balance}</span>
                        &nbsp;ETH
                    </p>
                </div>
            </div>

            <GlobalToolBar/>
        </div>
            
        )
    }

    return (
        <div>
            {
                props.isConnected ?
                <ProfilePage />:
                <Navigate to = '/InterfaceDemo' />
            }
        </div>
    )
}