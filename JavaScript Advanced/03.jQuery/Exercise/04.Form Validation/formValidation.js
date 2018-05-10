function validate() {
  let username = $('#username');
  let email = $('#email');
  let password = $('#password');
  let confPass = $('#confirm-password');
  let companyCheckbox = $('#company');
  let companyNumber = $('#companyNumber');
  let companyInfo = $('#companyInfo');
  let submitBtn = $('#submit');
  let validationDiv = $('#valid');
  let isValide = true;

  companyCheckbox.on('change', function() {
    if (companyCheckbox.is(':checked')) {
      companyInfo.css('display', 'block');
    } else {
      companyInfo.css('display', 'none');
    }
  });
  submitBtn.on('click', function(event) {
    event.preventDefault();
    validateForm();
    validationDiv.css('display', isValide ? 'block' : 'none');
    isValide = true;
  });

  function validateForm() {
    validateInputWithRegex(username, /^[A-Za-z\d]{3,20}$/g);
    validateInputWithRegex(email, /^.*?@.*?\..*$/g);
    if (confPass.val() === password.val()) {
      validateInputWithRegex(password, /^\w{5,15}$/g);
      validateInputWithRegex(confPass, /^\w{5,15}$/g);
    } else {
      confPass.css('border', 'solid red');
      password.css('border', 'solid red');
      isValide = false;
    }
    if (companyCheckbox.is(':checked')) {
      validateCompanyInfo();
    }
  }

  function validateInputWithRegex(input, patt) {
    if (patt.test(input.val())) {
      input.css('border', 'none');
    } else {
      input.css('border', 'solid red');
      isValide = false;
    }
  }

  function validateCompanyInfo() {
    let numVal = +companyNumber.val();
    if (numVal <= 9999 && numVal >= 1000) {
      companyNumber.css('border', 'none');
    } else {
      companyNumber.css('border', 'solid red');
      isValide = false;
    }
  }
}
