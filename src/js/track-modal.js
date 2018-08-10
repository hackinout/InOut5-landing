(function($) {
  "use strict"; // Start of use strict

  var tracks = [
    {
      id: "ai/ml",
      title: "AI/ML",
      body: "Lorem ipsum text for AI ML",
      img: "img/track-img.png"
    },
    {
      id: "blockchain",
      title: "Blockchain",
      body: "Lorem ipsum text for Blockchain",
      img: "img/track-img.png"
    }
  ];

  function getNextTrackIndex(currentTrackId) {
    var currentIndex = tracks
      .map(function(track) {
        return track.id;
      })
      .indexOf(currentTrackId);

    return currentIndex === tracks.length - 1 ? 0 : currentIndex + 1;
  }

  function setTrackData(track) {
    var modal = $("#trackModal");
    modal.find(".modal-title").text(track.title);
    modal.find(".modal-body").text(track.body);
    modal.find("#trackImg").attr("src", track.img);
    modal.find("#trackImg").attr("alt", track.title + " art");
    modal.data("id", track.id);
  }

  $("#trackModal").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var selectedTrackId = button.data("track"); // Extract info from data-* attributes
    var selectedTrack = tracks.filter(function(track) {
      return track.id === selectedTrackId;
    })[0];

    setTrackData(selectedTrack);
  });

  $("#nextTrack").on("click", function() {
    var currentTrackId = $("#trackModal").data("id");

    setTrackData(tracks[getNextTrackIndex(currentTrackId)]);
  });
})(jQuery); // End of use strict
