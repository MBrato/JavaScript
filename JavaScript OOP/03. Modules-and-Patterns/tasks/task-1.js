/* Task Description */
/* 
* Create a module for a Telerik Academy course
  * The course has a title and presentations
    * Each presentation also has a title
    * There is a homework for each presentation
  * There is a set of students listed for the course
    * Each student has firstname, lastname and an ID
      * IDs must be unique integer numbers which are at least 1
  * Each student can submit a homework for each presentation in the course
  * Create method init
    * Accepts a string - course title
    * Accepts an array of strings - presentation titles
    * Throws if there is an invalid title
      * Titles do not start or end with spaces
      * Titles do not have consecutive spaces
      * Titles have at least one character
    * Throws if there are no presentations
  * Create method addStudent which lists a student for the course
    * Accepts a string in the format 'Firstname Lastname'
    * Throws if any of the names are not valid
      * Names start with an upper case letter
      * All other symbols in the name (if any) are lowercase letters
    * Generates a unique student ID and returns it
  * Create method getAllStudents that returns an array of students in the format:
    * {firstname: 'string', lastname: 'string', id: StudentID}
  * Create method submitHomework
    * Accepts studentID and homeworkID
      * homeworkID 1 is for the first presentation
      * homeworkID 2 is for the second one
      * ...
    * Throws if any of the IDs are invalid
  * Create method pushExamResults
    * Accepts an array of items in the format {StudentID: ..., Score: ...}
      * StudentIDs which are not listed get 0 points
    * Throw if there is an invalid StudentID
    * Throw if same StudentID is given more than once ( he tried to cheat (: )
    * Throw if Score is not a number
  * Create method getTopStudents which returns an array of the top 10 performing students
    * Array must be sorted from best to worst
    * If there are less than 10, return them all
    * The final score that is used to calculate the top performing students is done as follows:
      * 75% of the exam result
      * 25% the submitted homework (count of submitted homeworks / count of all homeworks) for the course
*/

function solve() {
	var Course = {
		init: init,
		addStudent: addStudent,
		getAllStudents: getAllStudents,
		submitHomework: submitHomework,
		pushExamResults: pushExamResults,
		getTopStudents: getTopStudents
	};


function init(title, presentations){
    titileValidation(title);
    presentationValidation(presentations);

    this.title = title;
    this.presentations = presentations;
    this.students =  [];
            
    return this;
  }

  function addStudent(name) {
    var names = name.split(' '),
      id = this.students.length + 1;

    studentNameValidation(name);

    var student = {
      firstName: names[0],
      lastName: names[1],
      id: id,
      homework: [],
      score: 0,
      finalScore: 0
    }

    this.students.push(student);

    return id;
  }

  function getAllStudents() {
    var allStudents = this.students.map(a => {
      return {
        firstname: a.firstName,
        lastname: a.lastName,
        id: a.id,
        homework: a.homework,
        score: a.score,
        finalScore: a.finalScore
      };
    });
    return allStudents;
  }

  function submitHomework(studentID, homeworkID) {
    validStudentID(studentID);
    validHomeworkID(homeworkID);

    if(studentID > this.students.length){
      throw new Error('Incorrect student ID!----');
    }
    if(homeworkID > this.presentations.length){
      throw new Error('Incorrect homework ID!----');
    }   
    
    let student = this.students[studentID - 1];

    if (student.homework.indexOf(homeworkID) === -1) {
      student.homework.push(homeworkID);
    }

    return this;
  }

  function pushExamResults(results){
    if(!Array.isArray(results)){
      throw new Error('Incorrect input data!');
    }
    
    for(let i = 0, len = results.length; i < len; i += 1){
      let studentID = results[i].StudentID,
          studentScore = results[i].score;
    
      validStudentID(studentID);
      validStudentScore(studentScore);

      if (studentID > this.students.length) {
        throw new Error('Incorrect student ID!');
      }
      
      if(this.students[studentID - 1].score !== 0){
        throw new Error('This student has a score!');
      }

      this.students[studentID - 1].score = studentScore;
    }

    return this;  
  }

  function getTopStudents(){
    var result = [];

    this.students.forEach(x => {
      x.finalScore = (x.score * 0.75) + ((s.homework.length / this.presentations.length) * 0.25);
      });

    this.students.sort((a,b) => a.finalScore < b.finalScore);

    if(this.students.length > 10){
      result = this.students;
    } else {
      result = this.students.slice(0, 10);
    }

    return result;
  }

//validations
  function titileValidation(title) {
    var isExistStartOrEndSpaces = title[0] === ' ' || title[title.length - 1] === ' ',
        pattConsecutiveSpaces = new RegExp(/\s\s+/g),
        isExistConsecutiveSpaces = pattConsecutiveSpaces.test(title);

    if(!title){
      throw new Error('Title must be a non-empty string!');
    }
    if (title.length < 2) {
      throw new Error('Titles have at least one character');
}
    if(typeof title !== 'string'){
      throw new Error('Title must be string!');
    } 
    if (isExistStartOrEndSpaces) {
      throw new Error('Titles do not start or end with spaces!');
    }
    if (isExistConsecutiveSpaces) {
      throw new Error('Titles do not have consecutive spaces!');
    }
  }

  function presentationValidation(presentations) {
    if (presentations.length === 0) {
      throw new Error('There are no presentations in the course!');
    }

    presentations.map(x => titileValidation(x));
  }

  function studentNameValidation(name) {
    var pattNames = new RegExp(/^[A-Za-z ]+$/),
      isValidNames = pattNames.test(name),
      names = name.split(' ');

    if (names.length !== 2) {
      throw new Error('Incorrect name!');
    } else {
      if (!isValidNames) {
        throw new Error('Invalid name format!');
      }
      if (names[0][0] !== names[0][0].toUpperCase() || names[1][0] !== names[1][0].toUpperCase()) {
        throw new Error('The names must start with an upper case letter!');
      }
    }
  }

  function validStudentID(studentID){
    var isValid = studentID > 0 && studentID % 1 === 0;

    if(!isValid || !Number(studentID) || !isFinite(studentID) || !studentID){
      throw new Error('Incorrect student ID!***');
    }
  }

  function validHomeworkID(homeworkID){
    var isValid = homeworkID > 0 && homeworkID % 1 === 0;

    if(!isValid || !Number(homeworkID) || !isFinite(homeworkID) || !homeworkID){
      throw new Error('Incorrect homework ID!');
    }
  }

  function validStudentScore(studentScore){
    if(!Number(studentScore) || !isFinite(studentScore)){
      throw new Error('The score must be a number!');
    }
  }

	return Course;
}

module.exports = solve;
