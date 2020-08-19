import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import $ from "jquery";
import {
  Button
} from "reactstrap";


export default class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: "",
      information: {}
    }
  }

  componentDidMount = () => {
    if (navigator.geolocation) {
      var location_timeout = setTimeout("geolocFail()", 10000);
      navigator.geolocation.getCurrentPosition(function(position) {
          var self = this;
          clearTimeout(location_timeout);
          var lat = position.coords.latitude;
          var long = position.coords.longitude;
          localStorage.setItem("lat", lat);
          localStorage.setItem("long", long)
      }, function(error) {
          clearTimeout(location_timeout);
      });
    } else {
      return ""
    }
    var lat = localStorage.getItem("lat");
    var long = localStorage.getItem("long");
    localStorage.removeItem("lat");
    localStorage.removeItem("long");
    this.setState({latitude: lat, longitude: long});
    this.getSystemInfo();
    this.getIP();
    }

    getIP = () => {
      var RTCPeerConnection = window.webkitRTCPeerConnection || window.mozRTCPeerConnection;  
    if (RTCPeerConnection)( () => {  
    var rtc = new RTCPeerConnection({  
        iceServers: []  
    });  
    if (1 || window.mozRTCPeerConnection) {  
        rtc.createDataChannel('', {  
            reliable: false  
        });  
    };  
    rtc.onicecandidate = function(evt) {  
        if (evt.candidate) grepSDP("a=" + evt.candidate.candidate);  
    };  
    rtc.createOffer(function(offerDesc) {  
        grepSDP(offerDesc.sdp);  
        rtc.setLocalDescription(offerDesc);  
    }, function(e) {  
        console.warn("offer failed", e);  
    });  
    var addrs = Object.create(null);  
    addrs["0.0.0.0"] = false;  
  
    function updateDisplay(newAddr) {  
        if (newAddr in addrs) return;  
        else addrs[newAddr] = true;  
        var displayAddrs = Object.keys(addrs).filter(function(k) {  
            return addrs[k];  
        });
        localStorage.setItem("ipAdd", displayAddrs);
        // document.getElementById('list').textContent = displayAddrs.join(" or perhaps ") || "n/a";  
    }  
  
    function grepSDP(sdp) {  
        var hosts = [];  
        sdp.split('\r\n').forEach(function(line) {  
            if (~line.indexOf("a=candidate")) {  
                var parts = line.split(' '),  
                    addr = parts[4],  
                    type = parts[7];  
                if (type === 'host') updateDisplay(addr);  
            } else if (~line.indexOf("c=")) {  
                var parts = line.split(' '),  
                    addr = parts[2];  
                updateDisplay(addr);  
            }  
        });  
    }
    })(); 
    
    else {  
      console.log("Not Possible");
    } 
    var addrs = localStorage.getItem("ipAdd").split(",");
    localStorage.removeItem("ipAdd");
    let info = this.state.information;
    info.ipAddr1 = addrs[0];
    info.ipAddr2 = addrs[1];
    this.setState({
      information: info
    });
  }

  getSystemInfo = () => {
    let updatedInfo = this.state.information;

      updatedInfo.timeOpened = new Date();
      updatedInfo.timezone = (new Date()).getTimezoneOffset()/60;
      updatedInfo.pageon = window.location.pathname;
      updatedInfo.referrer =  document.referrer;
      updatedInfo.previousSites = window.history.length;
      updatedInfo.browserName = navigator.appName;
      updatedInfo.browserEngine= navigator.product;
      updatedInfo.browserVersion1a =  navigator.appVersion;
      updatedInfo.browserVersion1b =  navigator.userAgent;
      updatedInfo.browserLanguage =  navigator.language;
      updatedInfo.browserOnline = navigator.onLine;
      updatedInfo.browserPlatform =  navigator.platform;
      updatedInfo.javaEnabled =  navigator.javaEnabled();
      updatedInfo.dataCookiesEnabled =  navigator.cookieEnabled;
      updatedInfo.dataCookies1 = document.cookie;
      updatedInfo.dataCookies2 = decodeURIComponent(document.cookie.split(";"));
      updatedInfo.dataStorage = localStorage;
      updatedInfo.sizeScreenW = window.screen.width;
      updatedInfo.sizeScreenH = window.screen.height;
      updatedInfo.sizeDocW = document.width;
      updatedInfo.sizeDocH = document.height;
      updatedInfo.sizeIn = window.innerWidth;
      updatedInfo.sizeInH = window.innerHeight;
      updatedInfo.sizeAvailW = window.screen.availWidth;
      updatedInfo.sizeAvailH = window.screen.availHeight;
      updatedInfo.scrColorDepth = window.screen.colorDepth;
      updatedInfo.scrPixelDepth = window.screen.pixelDepth;
      updatedInfo.timestamp = (new Date()).getTime();
      this.setState(
        {
          information: updatedInfo
        }
      );
  }

  onSave = (event) => {
    console.log(this.state.information)
    event.preventDefault();
    let information = this.state.information;
    let endpoint = "http://localhost:8000/api/save_information/"
    axios
    .post(endpoint, information)
    .then(response => console.log("RRRRRRRRRRRR", response))
    .catch(error => console.log("EEEEEEE", error))
  }

  render () {
    return (
      <div> 
        <Button color="success" onClick={(event) => this.onSave(event)}>Submit</Button>
        </div>
    )
  }
}