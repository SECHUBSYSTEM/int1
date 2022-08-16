const package = document.querySelector('.package');
const choose = document.querySelector('.show');

package.addEventListener('click', function () {
    showPackage();
})

function showPackage() {
    choose.classList.toggle('hidden');
}