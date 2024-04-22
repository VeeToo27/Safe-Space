// This function initializes the Google Sign-In button
function initializeGoogleSignIn() {
    gapi.load('auth2', function() {
      var auth2 = gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com', // Replace with your own client ID
        cookiepolicy: 'single_host_origin',
      });
      attachGoogleSignInHandler(auth2);
    });
  }
  
  // This function attaches a click event listener to the Google Sign-In button
  function attachGoogleSignInHandler(auth2) {
    var googleSignInBtn = document.getElementById('google-signin-btn');
    googleSignInBtn.addEventListener('click', function() {
      auth2.signIn().then(function(googleUser) {
        var profile = googleUser.getBasicProfile();
        var id_token = googleUser.getAuthResponse().id_token;
        // You can send the id_token to your backend server for further authentication
        console.log('ID Token:', id_token);
      }, function(error) {
        console.log('Google Sign-In failed:', error);
      });
    });
  }
  
  // Call the initializeGoogleSignIn function when the page is loaded
  document.addEventListener('DOMContentLoaded', function() {
    initializeGoogleSignIn();
  });
  
// Function to initialize Facebook SDK
function initializeFacebookSDK() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : 'YOUR_FACEBOOK_APP_ID',
        cookie     : true,
        xfbml      : true,
        version    : 'v10.0'
      });
      attachFacebookSignInHandler();
    };
  }
  
  // Function to attach click event listener to Facebook Sign-In button
  function attachFacebookSignInHandler() {
    var facebookSignInBtn = document.getElementById('facebook-signin-btn');
    facebookSignInBtn.addEventListener('click', function() {
      FB.login(function(response) {
        if (response.authResponse) {
          var access_token = response.authResponse.accessToken;
          // You can send the access_token to your backend server for further authentication
          console.log('Access Token:', access_token);
        } else {
          console.log('Facebook Sign-In failed.');
        }
      }, {scope: 'email'});
    });
  }
  
  // Function to initialize Twitter SDK
  function initializeTwitterSDK() {
    // Twitter SDK initialization code
  }
  
  // Function to attach click event listener to Twitter Sign-In button
  function attachTwitterSignInHandler() {
    var twitterSignInBtn = document.getElementById('twitter-signin-btn');
    twitterSignInBtn.addEventListener('click', function() {
      // Twitter Sign-In logic
    });
  }
  
  // Function to initialize GitHub SDK
  function initializeGitHubSDK() {
    // GitHub SDK initialization code
  }
  
  // Function to attach click event listener to GitHub Sign-In button
  function attachGitHubSignInHandler() {
    var githubSignInBtn = document.getElementById('github-signin-btn');
    githubSignInBtn.addEventListener('click', function() {
      // GitHub Sign-In logic
    });
  }
  
  // Call the initialize functions when the page is loaded
  document.addEventListener('DOMContentLoaded', function() {
    initializeGoogleSignIn();
    initializeFacebookSDK();
    initializeTwitterSDK();
    initializeGitHubSDK();
  });