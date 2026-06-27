import Modal from "./Modal";
import MarkLocation from "./MarkLocation";
import "./App.css"

export default function App(){

    const postalOrders = [
  {
    id: 1,
    status: 'order-info-received',
    eta: '2020-09-02T17:10:05Z',
    parcel_id: '5286',
    sender: 'Roomm',
    verification_required: true,
    location_id: 'FR54 8485 2391 49NW OMM2 T6S6 K60',
    location_name: 'Mifflin',
    location_coordinate_latitude: -32.9444147,
    location_coordinate_longitude: -62.2288223,
    location_status_ok: true,
    user_phone: 'l46 729478015',
    user_name: 'Jhon Doe',
    notes: null,
    last_updated: '2020-09-19T05:03:16Z'
  },
  {
    id: 2,
    status: 'ready-for-pickup',
    eta: '2020-09-13T10:21:09Z',
    parcel_id: '9722',
    sender: 'Topicstorm',
    verification_required: false,
    location_id: 'FR33 1728 3070 5854 GKSU ZEH4 H82',
    location_name: 'Pond',
    location_coordinate_latitude: 57.7325747,
    location_coordinate_longitude: 12.0715528,
    location_status_ok: true,
    user_phone: 'p46 729478015',
    user_name: 'Jhon Doe',
    notes: null,
    last_updated: '2020-09-03T01:58:14Z'
  },
  {
    id: 3,
    status: 'order-info-received',
    eta: '2020-09-03T13:27:34Z',
    parcel_id: '7054',
    sender: 'Eazzy',
    verification_required: false,
    location_id: 'HU10 2305 6869 6590 0006 3115 2824',
    location_name: 'Prairie Rose',
    location_coordinate_latitude: 22.5088124,
    location_coordinate_longitude: -83.5136841,
    location_status_ok: true,
    user_phone: 'p46 729478015',
    user_name: 'Jhon Doe',
    notes: null,
    last_updated: '2020-09-15T19:37:15Z'
  },
  {
    id: 4,
    status: 'on-the-way',
    eta: '2020-09-21T22:54:10Z',
    parcel_id: '0123',
    sender: 'Ozu',
    verification_required: false,
    location_id: 'GB93 KYAM 4946 3407 8179 61',
    location_name: 'Northfield',
    location_coordinate_latitude: 55.9140499,
    location_coordinate_longitude: 72.2239408,
    location_status_ok: false,
    user_phone: 'u46 729478015',
    user_name: 'Jhon Doe',
    notes: null,
    last_updated: '2020-09-17T15:39:14Z'
  },
  {
    id: 5,
    status: 'delivered',
    eta: '2020-09-14T09:58:25Z',
    parcel_id: '7643',
    sender: 'Devcast',
    verification_required: true,
    location_id: 'FR74 4761 8403 00QU SP8R I0MN N95',
    location_name: 'Everett',
    location_coordinate_latitude: 11.5291917,
    location_coordinate_longitude: 8.6573084,
    location_status_ok: false,
    user_phone: ':46 729478015',
    user_name: 'Jhon Doe',
    notes: null,
    last_updated: '2020-09-27T15:57:38Z'
  },
  {
    id: 6,
    status: 'on-the-way',
    eta: '2020-09-21T05:00:46Z',
    parcel_id: '9953',
    sender: 'Livetube',
    verification_required: false,
    location_id: 'RO55 QGWR V6NK 0C9C CUCV RWFN',
    location_name: 'Morning',
    location_coordinate_latitude: 13.874099,
    location_coordinate_longitude: 120.972283,
    location_status_ok: false,
    user_phone: 'u46 729478015',
    user_name: 'Jhon Doe',
    notes: null,
    last_updated: '2020-09-25T00:58:34Z'
  },
  {
    id: 7,
    status: 'delivered',
    eta: '2020-09-04T16:30:26Z',
    parcel_id: '8624',
    sender: 'Pixonyx',
    verification_required: false,
    location_id: 'DE77 0492 2774 2166 4592 33',
    location_name: 'Swallow',
    location_coordinate_latitude: 45.7652358,
    location_coordinate_longitude: 126.6379525,
    location_status_ok: false,
    user_phone: 'l46 729478015',
    user_name: 'Jhon Doe',
    notes: null,
    last_updated: '2020-09-03T21:51:28Z'
  },
  {
    id: 8,
    status: 'order-info-received',
    eta: '2020-09-10T18:53:16Z',
    parcel_id: '7708',
    sender: 'Teklist',
    verification_required: false,
    location_id: 'GB12 MPDS 4563 3055 8346 49',
    location_name: 'Prairie Rose',
    location_coordinate_latitude: 46.5993244,
    location_coordinate_longitude: -1.1457859,
    location_status_ok: true,
    user_phone: 'u46 729478015',
    user_name: 'Jhon Doe',
    notes: null,
    last_updated: '2020-09-11T10:05:55Z'
  },
  {
    id: 9,
    status: 'delivered',
    eta: '2020-09-23T21:46:38Z',
    parcel_id: '8184',
    sender: 'Mydo',
    verification_required: false,
    location_id: 'SK04 7247 5385 0775 9521 4182',
    location_name: 'Waxwing',
    location_coordinate_latitude: 52.54952,
    location_coordinate_longitude: 13.35118,
    location_status_ok: true,
    user_phone: 'l46 729478015',
    user_name: 'Jhon Doe',
    notes: null,
    last_updated: '2020-09-28T13:47:44Z'
  },
  {
    id: 10,
    status: 'order-info-received',
    eta: '2020-09-03T17:55:35Z',
    parcel_id: '7921',
    sender: 'Twitterwire',
    verification_required: true,
    location_id: 'PK16 LDIZ PLUS ZAOJ B0ZP IOHT',
    location_name: 'Forest Run',
    location_coordinate_latitude: 12.3437798,
    location_coordinate_longitude: 121.3345788,
    location_status_ok: false,
    user_phone: 'l46 729478015',
    user_name: 'Jhon Doe',
    notes: null,
    last_updated: '2020-09-23T14:20:54Z'
  }
]

    return(
      <>
        <h1 id = "title">TrackPacker</h1>
        <h3>Welcome! This is is your current parcels, click to se more information.</h3>
        <div className = "orders">
            {postalOrders.map(postalOrder => (<Modal key = {postalOrder.id} postalOrder = {postalOrder}/>))}
        </div>
      </>
    );
}