function toggleTopics(subject) {
    const topics = document.getElementById(`${subject}-topics`);
    const allTopics = document.querySelectorAll('.topics');
    allTopics.forEach(function(div) {
      if (div !== topics) {
        div.style.display = 'none';
      }
    });
    if (topics.style.display === 'block') {
      topics.style.display = 'none';
    } else {
      topics.style.display = 'block';
    }
  }
  