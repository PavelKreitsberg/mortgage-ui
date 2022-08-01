const banks = [
  {
    id: '435tr34wrt',
    name: 'Mono',
    interestRate: 5,
    maxLoan: 500000,
    minPayment: 1000,
    loanTerm: 12,
  },
  {
    id: 'asdfw342rew5',
    name: 'Privat',
    interestRate: 7,
    maxLoan: 1000000,
    minPayment: 5000,
    loanTerm: 50,
  },
];


// Links to items

const banksListField = document.querySelector('li[data-banks="list-field"]');

const bankInfoField = document.querySelector('li[data-banks="info-field"]');

const form = document.querySelector('form')

const btnSubmitForm = document.querySelector('#submit-btn')

const btnResetForm = document.querySelector('#reset-btn')


// Functions

const banksListCreatorMarkup = (banks) => {
  const title = '<h2 class="subtitle">Bank`s list</h2>';
  const btnCreator = '<button class="button" type="button">Create new bank</button>';

  const banksList = `<ul class="banks">` + banks.map((bank, index)=>
    `<li class="banks__item">
        <p>${index + 1}. ${bank.name}</p>
        <button type="button" class="button-edit"></button>
        <button type="button" class="button-close"></button>
    </li>`
  ).join('') + '</ul>';

  banksListField.insertAdjacentHTML('afterbegin', title + banksList + btnCreator);
}


const bankInfoCreatorMarkup = (bank) => {

  const infoMarkup = 
  `<h2 class="subtitle">Loan Information</h2>
          <ul class="features">
            <li class="features__item">
              <p class="features__name">Bank:</p>
              <span class="features__value">${bank.name}</span>
            </li>
            <li class="features__item">
              <p class="features__name">Mortgage size, $:</p>
              <span class="features__value">${bank.maxLoan}</span>
            </li>
            <li class="features__item">
              <p class="features__name">Minimum down payment, $:</p>
              <span class="features__value">${bank.minPayment}</span>
            </li>
            <li class="features__item">
              <p class="features__name">Loan period, month:</p>
              <span class="features__value">${bank.loanTerm}</span>
            </li>
            <li class="features__item">
              <p class="features__name">Interest rate, %:</p>
              <span class="features__value">${bank.interestRate}</span>
            </li>
          </ul>`
  
  bankInfoField.insertAdjacentHTML('afterbegin', infoMarkup)
}

const generateRandomId = () => (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, "").slice(0, 9);

// Form

const createNewBank = (event) => {  

  event.preventDefault();

  let obj = {}

  obj.id = generateRandomId()

  new FormData(form).forEach((value, name) => { obj[name] = value })

  banks.push(obj)

  banksListField.innerHTML = '';

  banksListCreatorMarkup(banks)
}

const clearFormFields = (event) => {
  form.reset()
}

// Actions

btnSubmitForm.addEventListener('click', createNewBank)

btnResetForm.addEventListener('click' , clearFormFields)

banksListCreatorMarkup(banks);

bankInfoCreatorMarkup(banks[1])

