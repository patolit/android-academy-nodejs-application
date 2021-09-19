const mergeSortNameAmount = (students, lecturesSubscribed) => {
  let mergedArray = [];
  students.forEach((student, index) => {
    mergedArray.push([student, lecturesSubscribed[index]]);
  });

  mergedArray.sort(function (a, b) {
    return b[1] - a[1];
  });
  return mergedArray;
};

const topNStudentsAttendees = (students, attendees, N) => {
  let lecturesSubscribed = new Array(students.length).fill(0);

  attendees.forEach((lecture) => {
    students.forEach((student, index) => {
      if (lecture.includes(student)) {
        lecturesSubscribed[index] += 1;
      }
    });
  });

  const mergedSortedStudentList = mergeSortNameAmount(
    students,
    lecturesSubscribed
  );

  let response = [];
  for (let i = 0; i < N; i++) {
    response.push(mergedSortedStudentList[i][0]);
  }
  return response;
};
