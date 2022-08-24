const $resultado = document.querySelector('#resultado')

const $clearButton = document.querySelector('#clearButton')
$clearButton.addEventListener('click', () => $resultado.innerHTML = '')

const $deleteButton = document.querySelector('#deleteButton')
$deleteButton.addEventListener('click', () => {
    if($resultado.textContent) {
        const $result = document.querySelector('.result').innerHTML
        $resultado.innerHTML = $result.substring(0, $result.length -1)
    }
})

const $divisionButton = document.querySelector('#divisionButton')
$divisionButton.addEventListener('click', () => $resultado.innerHTML += '/')

const $multiplicationButton = document.querySelector('#multiplicationButton')
$multiplicationButton.addEventListener('click', () => $resultado.innerHTML += '*')

const $sevenButton = document.querySelector('#sevenButton')
$sevenButton.addEventListener('click', () => $resultado.innerHTML += 7)

const $eightButton = document.querySelector('#eightButton')
$eightButton.addEventListener('click', () => $resultado.innerHTML += 8)

const $nineButton = document.querySelector('#nineButton')
$nineButton.addEventListener('click', () => $resultado.innerHTML += 9)

const $subtractionButton = document.querySelector('#subtractionButton')
$subtractionButton.addEventListener('click', () => $resultado.innerHTML += '-')

const $fourButton = document.querySelector('#fourButton')
$fourButton.addEventListener('click', () => $resultado.innerHTML += 4)

const $fiveButton = document.querySelector('#fiveButton')
$fiveButton.addEventListener('click', () => $resultado.innerHTML += 5)

const $sixButton = document.querySelector('#sixButton')
$sixButton.addEventListener('click', () => $resultado.innerHTML += 6)

const $additionButton = document.querySelector('#additionButton')
$additionButton.addEventListener('click', () => $resultado.innerHTML += '+')

const $oneButton = document.querySelector('#oneButton')
$oneButton.addEventListener('click', () => $resultado.innerHTML += 1)

const $twoButton = document.querySelector('#twoButton')
$twoButton.addEventListener('click', () => $resultado.innerHTML += 2)

const $threeButton = document.querySelector('#threeButton')
$threeButton.addEventListener('click', () => $resultado.innerHTML += 3)

const $zeroButton = document.querySelector('#zeroButton')
$zeroButton.addEventListener('click', () => $resultado.innerHTML += 0)

const $dotButton = document.querySelector('#dotButton')
$dotButton.addEventListener('click', () => $resultado.innerHTML += '.')













/* const $testButton = document.querySelector('#testButton')

function text(text) {
    return text
}

function edit () {
    $testButton.innerHTML = text('a')
}

$testButton.addEventListener('click', edit) */
