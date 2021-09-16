// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)


  const url = 'https://teclead.de/recruiting/radios';
  const stations = document.querySelectorAll('.stations').forEach ((station) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        station.innerHTML = data.radios.name;
        station.innerHTML = data.radios.frequency;
      })
  });

export { index };
