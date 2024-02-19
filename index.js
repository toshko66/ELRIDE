// Assuming this JSON data is fetched or present in your script
const jsonData = `{
    "packages": [
        {
          "name": "Standart",
          "subscriptionPrice": "0",
          "useAllCars": "-",
          "freeCarReservationPeriod": "15 min",
          "extraFee": "According to the tariff of the specific area",
          "exclusiveElectricCars": "-",
          "minuteRentRate": "Standard",
          "dailyRentRateWeekends": "Standard",
          "egoPoints": "3 eGo Points",
          "insuranceFranchiseFee": "Yes",
          "color": "#F5F5F5",
          "textColor": "#000000"
        },
        {
            "name": "ELRIDEPRO",
            "subscriptionPrice": "95",
            "orPrice":"or 370 BGN/month*",
            "useAllCars": "60 minutes OR 50 km**",
            "freeCarReservationPeriod": "20 min",
            "extraFee": "No extra fee in purple parking zones",
            "exclusiveElectricCars": "BMW i3",
            "minuteRentRate": "Lower",
            "dailyRentRateWeekends": "Lower",
            "egoPoints": "6 eGo Points",
            "insuranceFranchiseFee": "Yes",
            "color": "#8591FC",
            "textColor": "#FFFFFF"
        },
        {
          "name": "Recharged",
          "subscriptionPrice": "9",
          "useAllCars": "-",
          "freeCarReservationPeriod": "20 min",
          "extraFee": "No extra fee in purple parking zones",
          "exclusiveElectricCars": "BMW i3",
          "minuteRentRate": "Lower",
          "dailyRentRateWeekends": "Lower",
          "egoPoints": "6 eGo Points",
          "insuranceFranchiseFee": "Yes",
          "color": "#58C3A9",
          "textColor": "#FFFFFF"
        },
        {
          "name": "Supercharged",
          "subscriptionPrice": "19",
          "useAllCars": "-",
          "freeCarReservationPeriod": "25 min",
          "extraFee": "No extra fee in purple parking zones",
          "exclusiveElectricCars": "BMW i3",
          "minuteRentRate": "Lower",
          "dailyRentRateWeekends": "Lower",
          "egoPoints": "6 eGo Points",
          "insuranceFranchiseFee": "No",
          "color": "#52B6CB",
          "textColor": "#FFFFFF"
        }
      ]
  }`;

const packageData = JSON.parse(jsonData);

function createDropdownButton(package) {
    const orPriceContent = package.orPrice ? `<p>${package.orPrice}</p>` : '';

    return `
<div class="package-wrapper w-75 mx-auto my-4 d-lg-none">

    <button id="mobile-button" class="btn  fw-semibold w-100 py-3 fs-3 d-flex justify-content-center align-items-baseline gap-2" style="background-color: ${package.color};color: ${package.textColor};" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${package.name}" aria-expanded="false" aria-controls="collapse${package.name}">
        <p class="button-p fw-semibold">${package.name}</p>
        <i class="fas fa-caret-down"></i>
    </button>

    <div class="custom-class collapse rounded-bottom mb-2" id="collapse${package.name}">

        <div class="bg-white rounded-bottom ">
            <div class="border-bottom w-100 d-flex flex-column align-items-center ">
            <p class="text-center fw-semibold p-custom-class">Subscription Price</p>
            <div class="d-flex flex-column align-items-center position-relative mb-3" >
            <span class="fw-bold span-custom-class">${package.subscriptionPrice}</span>
            <i class="i-custom-class position-absolute" >BGN/MONTH</i>
            </div>
            <label>${orPriceContent}</label>
        </div>

        <div class=" all-cars-div border-bottom py-3 w-100 d-flex flex-column align-items-center">
            <p class="text-center fw-semibold p-custom-class">Use all cars with no additional cost everyday up to</p>
            <span class="custom-text">${package.useAllCars}</span>
        </div>

        <div class="border-bottom py-3 w-100 d-flex flex-column align-items-center">
            <p class="text-center fw-semibold p-custom-class">Free Car Reservation Period</p>
            <span class="custom-text">${package.freeCarReservationPeriod}</span>
        </div>

        <div class="border-bottom py-3 w-100 d-flex flex-column align-items-center">
            <p class="text-center fw-semibold p-custom-class">Extra fee in purple parking zones</p>
            <span class="custom-text">${package.extraFee}</span>
        </div>

        <div class="border-bottom py-3 w-100 d-flex flex-column align-items-center">
            <p class="text-center fw-semibold p-custom-class">Exclusive Electric Cars</p>
            <span class="custom-text">${package.exclusiveElectricCars}</span>
        </div>

        <div class="border-bottom py-3 w-100 d-flex flex-column align-items-center">
            <p class="text-center fw-semibold p-custom-class">Minute rent rate for higher category cars</p>
            <span class="custom-text">${package.minuteRentRate}</span>
        </div>

        <div class="border-bottom py-3 w-100 d-flex flex-column align-items-center">
            <p class="text-center fw-semibold p-custom-class">Daily Rent Rate On The Weekends</p>
            <span class="custom-text">${package.dailyRentRateWeekends}</span>
        </div>

        <div class="border-bottom py-3 w-100 d-flex flex-column align-items-center">
            <p class="text-center fw-semibold p-custom-class">eGo points for every euro spent on trips</p>
            <span class="custom-text">${package.egoPoints}</span>
        </div>

        <div class="d-flex flex-column py-3 align-items-center">
            <p class="text-center fw-semibold p-custom-class">Insurance Franchise Fee</p>
            <span class="custom-text">${package.insuranceFranchiseFee}</span>
        </div>

    </div>
    </div>
</div>
    `;
}

function buildDropdowns(packages) {
    const dropdownHTML = packages.map(createDropdownButton).join('');
    document.getElementById('package-dropdowns').innerHTML = dropdownHTML;
}

document.addEventListener('DOMContentLoaded', () => buildDropdowns(packageData.packages));



document.addEventListener('click', function (e) {
    if (e.target && e.target.getAttribute('data-bs-toggle') === 'collapse') {
        const collapseTargetId = e.target.getAttribute('data-bs-target');
        const collapseElement = document.querySelector(collapseTargetId);
        if (collapseElement.classList.contains('show')) {
            e.target.classList.remove('btn-collapsed');
        } else {
            e.target.classList.add('btn-collapsed');
        }
    }
});

//tazi funkciq me nakara da sujalq che go napravih tolkova slojno 
document.addEventListener('DOMContentLoaded', () => {
    const elrideproUseAllCars = document.querySelector('#collapseELRIDEPRO .all-cars-div .custom-text');
    if (elrideproUseAllCars) {
        elrideproUseAllCars.innerHTML = elrideproUseAllCars.innerHTML.replace(' OR ', '<span class="or-text" style="color: initial;"> OR </span>');
    }
});



