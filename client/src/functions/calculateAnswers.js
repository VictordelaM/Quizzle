export const calculateAnswers=(answers, correctAnswer)=> {
    const withDifference = answers.map(a => ({
        ...a,
        difference: Math.abs(Number(a.answer) - Number(correctAnswer)),
      }));
    
      withDifference.sort((a, b) => a.difference - b.difference);
    
      const results = [];
      const pointsByPlace = [3, 2, 1];
      let index = 0;
      let currentPlace = 1;
    
      while (index < withDifference.length && pointsByPlace.length > 0) {
        const currentGroup = [withDifference[index]];
        const currentDiff = withDifference[index].difference;
        index++;
    
        // Gruppe mit gleichen Differenzen sammeln
        while (
          index < withDifference.length &&
          withDifference[index].difference === currentDiff
        ) {
          currentGroup.push(withDifference[index]);
          index++;
        }
    
        const currentPoints = pointsByPlace.shift(); // Punkte für diesen Platz
        currentGroup.forEach(person => {
          results.push({ ...person, points: currentPoints });
        });
    
        // Plätze überspringen: wir ziehen weitere Punkte ab je nachdem wie viele den Platz teilen
        // z. B. wenn 2 Leute Platz 1 belegen, überspringe Platz 2 (also 1 Platz)
        for (let i = 1; i < currentGroup.length; i++) {
          pointsByPlace.shift(); // streiche übersprungene Plätze
        }
      }
      return results;
  }

// const correctAnswer = 5

// const answers = [
//   { username: 'A', answer: '50' }, // diff 0
//   { username: 'B', answer: '50' }, // diff 0
//   { username: 'C', answer: '49' }, // diff 0
//   { username: 'D', answer: '48' }, // diff 1
//   { username: 'E', answer: '49' }, // diff 2
// ]
// calculateAnswers(answers, correctAnswer)