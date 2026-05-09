const students = [
  {
    id: 1,
    name: "Eyad Mohammed",
    age: 15,
    grades: {
      math: 92,
      science: 88,
      english: 95,
      history: 79
    }
  },
  {
    id: 2,
    name: "Ahmed Mostafa",
    age: 14,
    grades: {
      math: 75,
      science: 82,
      english: 70,
      history: 68
    }
  },
  {
    id: 3,
    name: "Omar Ahmed",
    age: 16,
    grades: {
      math: 110, // inv grade for err handling
      science: 85,
      english: 80,
      history: 75
    }
  }
];

module.exports = students;
