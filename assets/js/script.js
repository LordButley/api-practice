const API_KEY = "CH8rWpLLyHOD4j6gukpqD73WkAc";
const API_URL = "http://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

