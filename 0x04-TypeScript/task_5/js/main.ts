interface MajorCredits {
	credits: number,
	brand: string,
};
interface MinorCredits {
	credits: number,
	brand: string,
};

function sumMajorCredits(major_1: MajorCredits, major_2: MajorCredits): MajorCredits {
	return {
		credits: major_1.credits + major_2.credits,
		brand: 'major'
	}
}

function sumMinorCredits(minor_1: MinorCredits, minor_2: MinorCredits): MinorCredits {
	return {
		credits: minor_1.credits + minor_1.credits,
		brand: 'minor'
	}
}

// Each interface defines a number named credits
// Add a brand property to each interface in order to uniquely identify each of them
// Create two functions named sumMajorCredits and sumMinorCredits in task_5/js/main.ts:

// Each function takes two arguments subject1 and subject2
// sumMajorCredits returns MajorCredits value and sumMinorCredits returns MinorCredits value
// Each function sums the credits of the two subjects

const major1: MajorCredits = { credits: 3, brand: 'major' };
const major2: MajorCredits = { credits: 4, brand: 'major' };
const totalMajor = sumMajorCredits(major1, major2);
console.log(totalMajor);

const minor1: MinorCredits = { credits: 2, brand: 'minor' };
const minor2: MinorCredits = { credits: 1, brand: 'minor' };
const totalMinor = sumMinorCredits(minor1, minor2);
console.log(totalMinor); 