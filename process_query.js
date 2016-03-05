'use strict';

const encoder = require('encoder.js');

module.exports = function(query) {
  let value = encoder.decodeURI(query);
  let date;
  if(isNaN(+value)) {
    date = new Date(value);
  } else {
    date = new Date(value * 1000);
  }

  if (!(date.getTime() > 0)) {
    return {unix: null, natural: null};
  }

  return {
    unix: date / 1000 >> 0,
    natural: date.toLocaleDateString('EN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  };
}
