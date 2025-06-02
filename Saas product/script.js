document.getElementById('jobSearchForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const keyword = document.getElementById('keywords').value.trim();
  const location = document.getElementById('location').value.trim();

  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; // Clear previous results

  // Simulated data (replace with API fetch if needed)
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote",
    },
    {
      title: "UX Designer",
      location: "New York",
    },
    {
      title: "Software Engineer",
      location: "San Francisco",
    },
  ];

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(keyword.toLowerCase()) &&
    job.location.toLowerCase().includes(location.toLowerCase())
  );

  if (filteredJobs.length === 0) {
    resultsContainer.innerHTML = `<p>No jobs found. Try different keywords or location.</p>`;
    return;
  }

  filteredJobs.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card';
    jobCard.innerHTML = `
      <div class="job-title">${job.title}</div>
      <div class="job-location">${job.location}</div>
    `;
    resultsContainer.appendChild(jobCard);
  });
});