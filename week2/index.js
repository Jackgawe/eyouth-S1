const studentsData = require('./data');
const { 
  ValidationError, 
  processStudent, 
  formatReport 
} = require('./helpers');

/**
 * Simulates loading students from a database
 * @returns {Promise<Array>}
 */
const loadStudents = () => {
  return new Promise((resolve) => {
    console.log("⏳ Loading students from database...");
    setTimeout(() => {
      console.log("✅ Students loaded successfully!\n");
      resolve(studentsData);
    }, 1000);
  });
};

/**
 * Simulates saving valid reports to a database
 * @param {Array} validStudents 
 * @returns {Promise<Array>}
 */
const saveReport = (validStudents) => {
  return new Promise((resolve) => {
    console.log("⏳ Saving valid reports to database...");
    setTimeout(() => {
      console.log("✅ Reports saved successfully!\n");
      resolve(validStudents);
    }, 1500);
  });
};

/**
 * Processes all students and handles errors
 * @param {Array} students 
 * @returns {Promise<Array>}
 */
const processAllStudents = (students) => {
  return new Promise((resolve) => {
    console.log("⚙️  Processing student reports...");
    const validResults = [];
    
    students.forEach((student) => {
      processStudent(student, (err, processed) => {
        if (err) {
          if (err instanceof ValidationError) {
            console.log(`\n❌ Validation Error!`);
            console.log(`   Student : ${err.studentName}`);
            console.log(`   Field   : ${err.field}`);
            console.log(`   Message : ${err.message}\n`);
          } else {
            console.log(`\n❌ Unexpected Error: ${err.message}\n`);
          }
        } else {
          console.log(formatReport(processed));
          // Extract only the required fields for the final JSON output
          const { id, name, average, grade } = processed;
          validResults.push({ id, name, average, grade });
        }
      });
    });
    
    resolve(validResults);
  });
};

/**
 * Serializes and verifies JSON output
 * @param {Array} validStudents 
 */
const displayJSON = (validStudents) => {
  console.log("📦 JSON Output:");
  const jsonString = JSON.stringify(validStudents, null, 2);
  console.log(jsonString);
  
  // Verify round-trip parsing
  const parsedData = JSON.parse(jsonString);
  if (Array.isArray(parsedData) && parsedData.length === validStudents.length) {
    console.log("\n✅ JSON verified successfully!");
    console.log(`🎉 System finished! Processed ${validStudents.length} valid students.\n`);
  }
};

// Main flow using Promise Chaining
console.log("🚀 Starting Student Report Card System...\n");

loadStudents()
  .then(processAllStudents)
  .then(saveReport)
  .then(displayJSON)
  .then(() => {
    console.log("🔄 System process completed.");
  })
  .catch((err) => {
    console.error("❌ A critical system error occurred:", err.message);
  });
