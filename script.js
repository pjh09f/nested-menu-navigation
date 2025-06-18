//toggles visibility of a specific subject's topics
function toggleTopics(subject) {
    //gets the topic section related to the clicked subject
    const topics = document.getElementById(`${subject}-topics`);
  
    //hides all other topic sections
    const allTopics = document.querySelectorAll('.topics');
    allTopics.forEach(function(div) {
      if (div !== topics) {
        div.style.display = 'none';
      }
    });
  
    //toggle the clicked section between visible and hidden
    if (topics.style.display === 'block') {
      topics.style.display = 'none';
    } else {
      topics.style.display = 'block';
    }
  }
  