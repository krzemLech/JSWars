
/**
 * Function to present my clone to the Emperor
 * @param {import('./army').Clone} clone
 */
function printMyCloneAbs(clone) {
    console.log(`My clone is ${clone.name} and he is best in using ${clone.weapon}.`);
}

printMyCloneAbs({ name: 'Rex', weapon: 'DC-17m' });