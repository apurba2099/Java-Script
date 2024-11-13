'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//global variable
let map, mapEvent;

class App {
  #map;
  #mapEvent;
  constructor() {
    // Get user's position
    this._getPosition();
  }

  _getPosition() {
    //geolocation use
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position!');
        }
      );
  }

  _loadMap(position) {
    // console.log(position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    //   console.log(position);
    console.log(latitude, longitude);
    //   use google maps links
    console.table(
      `https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D}`
    );

    const coords = [latitude, longitude];

    console.log(this);
    this.#map = L.map('map').setView(coords, 15); //(coords and zoom which will represent it by 15, and vrious what i want to show zoom)

    // console.log(map) // just for show the evennt in prototype

    //there a different style in the map tiles openstreetmap.org/{z}
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Displaying on a map marker

    //Handling clicks on map
    this.#map.on('click', function (mapE) {
      //Rendering Workout input form
      this.#mapEvent = mapE;
      form.classList.remove('hidden');
      inputDistance.focus();
    });
  }

  _showForm() {}
  _toggleElevationField() {}
  _newWorkout() {}
}

const app = new App();
// app._getPosition();

form.addEventListener('submit', function (e) {
  e.preventDefault();

  //Clear input fields
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';
  // Display a marker
  console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Workout 🚴')
    .openPopup();
});

//toggling input fields
inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');

  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
