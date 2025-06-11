function asyncTask(taskName, duration, callback) {
  console.log("Task started " + taskName);
  setTimeout(function() {
    console.log('Completed ' + taskName);
    callback();
  }, duration);
}

// Task 1
asyncTask('Task 1', 1000, function() {
  // Task 2
  asyncTask('Task 2', 1500, function() {
    // Task 3
    asyncTask('Task 3', 1000, function() {
      console.log("All tasks completed");
    });
  });
});