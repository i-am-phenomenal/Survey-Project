import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import $ from "jquery";
import { Button } from "reactstrap";
// import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import { Entity, Scene } from "aframe-react";

export default class App extends Component {
  constructor(props) {
    // var loader = new THREE.OBJLoader();
    super(props);
    this.state = {
      latitude: "",
      longitude: "",
      information: {},
    };
  }

  componentDidMount = () => {
    const script = document.createElement("script");
    // this.THREE = THREE;
    // const objLoader = nr
    //  script.src="https://api.tinkercad.com/libraries/1jiw9epElcK/0/library.min.js"
    //  document.body.appendChild(script);
    //  console.log(script);
    //    creativePlatformRuntime.require(
    //     [{
    //         id: "6VDO1siyKr5",
    //         version: 0
    //     }], // The ID of the Canvas

    //     function(canvas) { // The callback when it downloads
    //       console.log(canvas);
    //         // TODO: Your image process code will go here

    //     },
    //     function() { // Called on failure

    //     }
    // );
  };

  // componentDidMount = () => {
  //   if (navigator.geolocation) {
  //     var location_timeout = setTimeout("geolocFail()", 10000);
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //         var self = this;
  //         clearTimeout(location_timeout);
  //         var lat = position.coords.latitude;
  //         var long = position.coords.longitude;
  //         localStorage.setItem("lat", lat);
  //         localStorage.setItem("long", long)
  //     }, function(error) {
  //         clearTimeout(location_timeout);
  //     });
  //   } else {
  //     return ""
  //   }
  //   var lat = localStorage.getItem("lat");
  //   var long = localStorage.getItem("long");
  //   localStorage.removeItem("lat");
  //   localStorage.removeItem("long");
  //   this.setState({latitude: lat, longitude: long});
  //   this.getSystemInfo();
  //   this.getIP();
  //   }

  //   getIP = () => {
  //     var RTCPeerConnection = window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
  //   if (RTCPeerConnection)( () => {
  //   var rtc = new RTCPeerConnection({
  //       iceServers: []
  //   });
  //   if (1 || window.mozRTCPeerConnection) {
  //       rtc.createDataChannel('', {
  //           reliable: false
  //       });
  //   };
  //   rtc.onicecandidate = function(evt) {
  //       if (evt.candidate) grepSDP("a=" + evt.candidate.candidate);
  //   };
  //   rtc.createOffer(function(offerDesc) {
  //       grepSDP(offerDesc.sdp);
  //       rtc.setLocalDescription(offerDesc);
  //   }, function(e) {
  //       console.warn("offer failed", e);
  //   });
  //   var addrs = Object.create(null);
  //   addrs["0.0.0.0"] = false;

  //   function updateDisplay(newAddr) {
  //       if (newAddr in addrs) return;
  //       else addrs[newAddr] = true;
  //       var displayAddrs = Object.keys(addrs).filter(function(k) {
  //           return addrs[k];
  //       });
  //       localStorage.setItem("ipAdd", displayAddrs);
  //       // document.getElementById('list').textContent = displayAddrs.join(" or perhaps ") || "n/a";
  //   }

  //   function grepSDP(sdp) {
  //       var hosts = [];
  //       sdp.split('\r\n').forEach(function(line) {
  //           if (~line.indexOf("a=candidate")) {
  //               var parts = line.split(' '),
  //                   addr = parts[4],
  //                   type = parts[7];
  //               if (type === 'host') updateDisplay(addr);
  //           } else if (~line.indexOf("c=")) {
  //               var parts = line.split(' '),
  //                   addr = parts[2];
  //               updateDisplay(addr);
  //           }
  //       });
  //   }
  //   })();

  //   else {
  //     console.log("Not Possible");
  //   }
  //   var addrs = localStorage.getItem("ipAdd").split(",");
  //   localStorage.removeItem("ipAdd");
  //   let info = this.state.information;
  //   info.ipAddress1 = addrs[0];
  //   info.ipAddress2 = addrs[1];
  //   this.setState({
  //     information: info
  //   });
  // }

  // getSystemInfo = () => {
  //   let updatedInfo = this.state.information;

  //     updatedInfo.timeOpened = new Date();
  //     // updatedInfo.timezone = (new Date()).getTimezoneOffset()/60;
  //     updatedInfo.pageOn = window.location.pathname;
  //     updatedInfo.referrer =  document.referrer;
  //     updatedInfo.previousSites = window.history.length;
  //     updatedInfo.browserName = navigator.appName;
  //     updatedInfo.browserEngine= navigator.product;
  //     updatedInfo.browserVersion1a =  navigator.appVersion;
  //     updatedInfo.browserVersion1b =  navigator.userAgent;
  //     updatedInfo.browserLanguage =  navigator.language;
  //     updatedInfo.browserOnline = navigator.onLine;
  //     updatedInfo.browserPlatform =  navigator.platform;
  //     updatedInfo.javaEnabled =  navigator.javaEnabled();
  //     updatedInfo.dataCookiesEnabled =  navigator.cookieEnabled;
  //     updatedInfo.dataCookies1 = document.cookie;
  //     updatedInfo.dataCookies2 = decodeURIComponent(document.cookie.split(";"));
  //     updatedInfo.sizeScreenWidth = window.screen.width;
  //     updatedInfo.sizeScreenHeight = window.screen.height;
  //     updatedInfo.sizeDocumentWidth = document.width;
  //     updatedInfo.sizeDocumentHeight = document.height;
  //     updatedInfo.sizeIn = window.innerWidth;
  //     updatedInfo.sizeInHeight = window.innerHeight;
  //     updatedInfo.sizeAvailWidth = window.screen.availWidth;
  //     updatedInfo.sizeAvailHeight = window.screen.availHeight;
  //     updatedInfo.screenColorDepth = window.screen.colorDepth;
  //     updatedInfo.screenPixelDepth = window.screen.pixelDepth;
  //     updatedInfo.timestamp = (new Date()).getTime();
  //     this.setState(
  //       {
  //         information: updatedInfo
  //       }
  //     );
  // }

  // onSave = (event) => {

  //   event.preventDefault();
  //   let information = this.state.information;
  //   information.latitude = this.state.latitude;
  //   information.longitude = this.state.longitude;
  //   let endpoint = "http://localhost:8000/api/save_information/"
  //   axios
  //   .post(endpoint, information)
  //   .then(response => console.log("RRRRRRRRRRRR", response))
  //   .catch(error => console.log(error))
  // }

  render3DModel = () => {
    var OBJFile = "public/assets/exportedKermitMesh.obj";

    var MTLFile = "public/assets/exportedKermitMesh.obj.mtl";

    var PNGFile = "D:/Colmap_workspace/statue2_output/textured/textured.png";

    var container;

    var camera, scene, renderer;
    var mouseX = 0,
      mouseY = 0;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {
      container = document.createElement("div");
      document.body.appendChild(container);

      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        2000
      );
      camera.position.z = 250;

      scene = new THREE.Scene();
      var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
      scene.add(ambientLight);

      var pointLight = new THREE.PointLight(0xffffff, 0.8);
      camera.add(pointLight);
      scene.add(camera);

      var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
          var percentComplete = (xhr.loaded / xhr.total) * 100;
          console.log(Math.round(percentComplete, 2) + "% downloaded");
        }
      };

      var onError = function () {};

      var manager = new THREE.LoadingManager();
      // manager.addHandler(/\.`dds`$/i, new DDSLoader()); // Lets try without this line

      new MTLLoader(manager)
        .setPath("../build/assets/")
        .load("exportedKermitMesh.obj.mtl", function (materials) {
          materials.preload();
          new OBJLoader(manager)
            .setMaterials(materials)
            .setPath("../build/assets/")
            .load(
              "exportedKermitMesh.obj",
              function (object) {
                object.position.y = -95;
                scene.add(object);
              },
              onProgress,
              onError
            );
        });

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      document.addEventListener("mousemove", onDocumentMouseMove, false);
      window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX - windowHalfX) / 2;
      mouseY = (event.clientY - windowHalfY) / 2;
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }
    function render() {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }
  };

  render() {
    return (
      <div>
        <p> Hello</p>
        {this.render3DModel()}
        {/* <Button color="success" onClick={(event) => this.onSave(event)}>Submit</Button> */}
      </div>
    );
  }
}
