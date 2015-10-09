(function(){
  'use strict';

  if(!document.querySelector){
    console.log('You are using an outdated browser');
    return;
  }

  var DEBUG = true;
  var httpRequest = new XMLHttpRequest();

  // Methods you'll use:
  // httpRequest.onreadystatechange = function()
  // httpRequest.readyState (returns 0-4)
  // httpRequest.responseText - data
  // httpRequest.open('GET', url);
  // httpRequest.send();

  window.AjaxLoader = function(config){

    // The links from which to fetch data
    this.anchorContainer = config.anchorContainer || null;

    // The container to inject data
    this.container = config.container || null;

    // httpRequest.onreadystatechange = this.handleRequest;
    this.bindListener();
  };

  window.AjaxLoader.prototype = {

    _fetchData: function (url) {
      httpRequest.open('GET', url);
      httpRequest.send();
      var response;
      // var jsonResponse = JSON.parse(response);
      // var stringResponse = response.toString();
      httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState == 0) {
          console.log('0 - not initialized');
        }
        if (httpRequest.readyState == 1) {
          console.log('1 - server connection established');
        }
        if (httpRequest.readyState == 2) {
          console.log('2 - request received');
        }
        if (httpRequest.readyState == 3) {
          console.log('3 - processing request');
        }
        if (httpRequest.readyState == 4) {
          console.log('4 - request finished, response ready');
          if(httpRequest.status == 200) {
            console.log('good to go');
            response = httpRequest.responseText;
          }
        }
      }
      this.updatePage(response);
    },

    bindListener: function () {
      var anchorContainer = document.querySelector(this.anchorContainer);
      anchorContainer.addEventListener('click', function(e){
        console.log(e.target);
        if(e.target && e.target.nodeName == 'A') {
          e.preventDefault();
          console.log(e.target.getAttribute('href'));
          this._fetchData(e.target.getAttribute('href'));
        }
      }.bind(this));
    },

    handleRequest: function () {

    },

    updatePage: function(data) {
      console.log('data', data);
      // console.log('dataTwo', dataTwo);
    }

  };

}())
