import React, { useState, useRef } from 'react';
import { Marker, Popup, TileLayer, MapContainer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: require("../images/Mushroom_icon.svg.png"),
  iconSize: [35, 45],
  iconAnchor: [17, 45],
  popupAnchor: [3, -46]
});
const mushrooms = [
  {
    name: "nervous bell",
    spots: "dashed",
    color: "RED",
    latlng: [52.082042, 5.236192],
  },
  {
    name: "nice benz",
    spots: "dotted",
    color: "BLUE",
    latlng: [52.080678, 5.236192],
  },
  {
    name: "quizzical chaplygin",
    spots: "double",
    color: "RED",
    latlng: [52.081624, 5.235895]
  },
  {
    name: "nifty bhabha",
    spots: "groove",
    color: "BLUE",
    latlng: [52.080671, 5.236392]

  },

  {
    name: "peaceful dijkstra",
    spots: "hidden",
    color: "GREEN",
    latlng: [52.081451, 5.235404]
  },
  {
    name: "nostalgic bhaskara",
    spots: "inset",
    color: "BLUE",
    latlng: [52.080552, 5.234156]
  },
  {
    name: "silly burnell",
    spots: "ridge",
    color: "BLUE",
    latlng: [52.080598, 5.234361]
  },
  {
    name: "romantic cray",
    spots: "groove",
    color: "GREEN",
    latlng: [52.080253, 5.234631]
  },
  {
    name: "vigilant bose",
    spots: "solid",
    color: "RED",
    latlng: [52.081063, 5.236819]
  },
  {
    name: "quirky buck",
    spots: "dashed",
    color: "GREEN",
    latlng: [52.081163, 5.236446]
  },
  {
    name: "stoic cartwright",
    spots: "double",
    color: "BLUE",
    latlng: [52.080861, 5.235876]
  },
  {
    name: "pensive clarke",
    spots: "dotted",
    color: "YEllOW",
    latlng: [52.081199, 5.234929]
  },
  {
    name: "strange cannon",
    spots: "hidden",
    color: "YEllOW",
    latlng: [52.080273, 5.234664]

  },
  {
    name: "stupefied bohr",
    spots: "none",
    color: "RED",
    latlng: [52.081883, 5.235415]
  },
  {
    name: "pedantic colden",
    spots: "hidden",
    color: "BLUE",
    latlng: [52.081813, 5.236781]
  },
  {
    name: "priceless davinci",
    spots: "dashed",
    color: "GREEN",
    latlng: [52.081538, 5.236694]
  },
  {
    name: "vibrant chandrasekhar",
    spots: "outset",
    color: "RED",
    latlng: [52.081182, 5.237143]
  },
  {
    name: "wizardly booth",
    spots: "groove",
    color: "GREEN",
    latlng: [52.080429, 5.237424]
  },
  {
    name: "suspicious driscoll",
    spots: "inset",
    color: "YEllOW",
    latlng: [52.080074, 5.236462]
  },
  {
    name: "optimistic blackburn",
    spots: "ridge",
    color: "RED",
    latlng: [52.080144, 5.235857]
  },
  {
    name: "reverent curie",
    spots: "groove",
    color: "BLUE",
    latlng: [52.081222, 5.235965],
    urlImg: require("../logo.svg")
  }
]

function GardenMap() {
  const [center, setCenter] = useState({ lat: 52.090603, lng: 5.233253 })
  const zoom_level = 12;
  const mapRef = useRef();
  const [filter, setFilter] = useState([]);

  //handle filter with color and spots
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFilter((prevFilter) => [...prevFilter, value]);
    } else {
      setFilter((prevFilter) => prevFilter.filter((spots) => spots !== value));
      setFilter((prevFilter) => prevFilter.filter((color) => color !== value));
    }
  };

  const filteredMushrooms = mushrooms.filter((mushroom) =>
    filter.includes(mushroom.spots) || filter.includes(mushroom.color)
  );
  const filtered = filteredMushrooms?.length > 0 ? filteredMushrooms : mushrooms;
  const checkSomeCondition = filter?.length >= 2;
  return (
    <>
      <MapContainer center={[center.lat, center.lng]} zoom={zoom_level} ref={mapRef} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=1x3xYIeWEGN2GDAY3Pve" />
        {filtered.map((mushroom, idx) => (
          <Marker position={[mushroom.latlng[0], mushroom.latlng[1]]} icon={markerIcon} key={idx}>
            <Popup>
              <b>Information about this mushroom: </b><br />
              <b> Name: </b> {mushroom.name}<br />
              <b> Spots: </b> {mushroom.spots}<br />
              <b> Color: </b> {mushroom.color}
            </Popup>
          </Marker>
        ))}:
      </MapContainer>
      {/* <h1>Garden map mushrooms</h1> <h5>Loading basic map using layer</h5> */}
      <div className='BoxFilter'>
        <div>
          <h4 className='filteColor'>Colors</h4>
            <input onChange={handleCheckboxChange} type="checkbox" id="blue" name="blue" value="BLUE" />
            <label for="blue"> BLUE</label><br />
            <input onChange={handleCheckboxChange} type="checkbox" id="green" name="green" value="GREEN" />
            <label for="green"> Green</label><br />

            {checkSomeCondition ? <br/> : <>
            <input onChange={handleCheckboxChange} type="checkbox" id="red" name="red" value="RED" />
            <label for="red"> Red</label><br />
            <input onChange={handleCheckboxChange} type="checkbox" id="yellow" name="yellow" value="YEllOW" />
            <label for="yellow"> Yellow</label><br /> </>}

          </div>
          <div>
              <h4 className='filterSpots'>Spots</h4>
              <input onChange={handleCheckboxChange} type="checkbox" id="groove" name="groove" value="groove" />
              <label for="groove"> Groove</label><br />
              <input onChange={handleCheckboxChange} type="checkbox" id="ridge" name="ridge" value="ridge" />
              <label for="ridge"> Ridge</label><br />
              <input onChange={handleCheckboxChange} type="checkbox" id="inset" name="inset" value="inset" />
              <label for="inset"> Inset</label><br />
              <input onChange={handleCheckboxChange} type="checkbox" id="outset" name="outset" value="outset" />
              <label for="outset"> Outset</label><br />
              <input onChange={handleCheckboxChange} type="checkbox" id="dashed" name="dashed" value="dashed" />
              <label for="dashed"> Dashed</label><br />
              <input onChange={handleCheckboxChange} type="checkbox" id="hidden" name="hidden" value="hidden" />
              <label for="hidden"> Hidden</label><br />
              <input onChange={handleCheckboxChange} type="checkbox" id="none" name="none" value="none" />
              <label for="none"> None</label><br />
              <input onChange={handleCheckboxChange} type="checkbox" id="dotted" name="dotted" value="dotted" />
              <label for="dotted"> dotted</label><br />
              <input onChange={handleCheckboxChange} type="checkbox" id="double" name="double" value="double" />
              <label for="double"> double</label><br />
              <input onChange={handleCheckboxChange} type="checkbox" id="solid" name="solid" value="solid" />
              <label for="solid"> solid</label><br />
            </div>
      </div>
    </>
  );
}

export default GardenMap;
