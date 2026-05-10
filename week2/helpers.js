/**
 * Custom Error Class for student validation
 */
class ValidationError extends Error {
  constructor(message, field, studentName) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
    this.studentName = studentName;
  }
}

/**
 * Validates student data
 * @param {Object} student 
 */
const validateStudent = (student) => {
  const { name, age, grades } = student;
  
  if (!name || name.trim() === "") {
    throw new ValidationError("Name is missing or empty!", "name", name || "Unknown");
  }
  
  if (age < 11 || age > 17) {
    throw new ValidationError("Age must be between 11 and 17!", "age", name);
  }
  
  for (const [subject, grade] of Object.entries(grades)) {
    if (grade < 0 || grade > 100) {
      throw new ValidationError("Grade must be between 0 and 100!", `grades.${subject}`, name);
    }
  }
};

/**
 * Arrow function to calculate the average of grades
 * @param {Object} grades 
 * @returns {number}
 */
const calculateAverage = (grades) => {
  const values = Object.values(grades);
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  return parseFloat((sum / values.length).toFixed(2));
};

/**
 * Function expression to get letter grade based on average
 * @param {number} average 
 * @returns {string}
 */
const getGrade = function(average) {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
};

/**
 * Function declaration with callback (error-first convention)
 * @param {Object} student 
 * @param {Function} callback 
 */
function processStudent(student, callback) {
  try {
    validateStudent(student);
    
    // Requirement 4: Destructuring & Spread/Rest
    const { grades, ...rest } = student; // Rest operator used here
    const average = calculateAverage(grades);
    const letterGrade = getGrade(average);
    
    const processedStudent = {
      ...rest, // Spread operator used here
      grades,
      average,
      grade: letterGrade
    };
    
    callback(null, processedStudent);
  } catch (error) {
    callback(error);
  }
}

/**
 * Arrow function to format the report card
 * @param {Object} processedStudent 
 * @returns {string}
 */
const formatReport = (processedStudent) => {
  const { name, age, grades, average, grade } = processedStudent;
  const { math, science, english, history } = grades;
  
  return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   📋 STUDENT REPORT CARD 
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name    : ${name}
🎂 Age     : ${age}
📚 Grades  : 
   • Math     : ${math}
   • Science  : ${science}
   • English  : ${english}
   • History  : ${history}
📊 Average  : ${average}
🏆 Grade    : ${grade}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
};

module.exports = {
  ValidationError,
  validateStudent,
  calculateAverage,
  getGrade,
  processStudent,
  formatReport
};
