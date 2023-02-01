// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/routes
// 

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// symptoms answer.
router.post('/symptoms-answer', function (req, res) {
    var symptoms = req.session.data['do-you-have-symptoms']
    if (symptoms == "no") {
        res.redirect('register-coronavirus-test-119/tested-positive-before')
    } else {
        res.redirect('register-coronavirus-test-119/when-did-symptoms-start')
    }
})


// travel-work-education answer.
router.post('/travel-work-education-answer', function (req, res) {
    var travelWorkEdu = req.session.data['travel-work-education']
    if (travelWorkEdu == "yes-work") {
        res.redirect('register-coronavirus-test-119/area-of-work')
    } else if (travelWorkEdu == "yes-education"){
        res.redirect('register-coronavirus-test-119/education-place')
    } else if (travelWorkEdu == "no"){
        res.redirect('register-coronavirus-test-119/country')
    } else if (travelWorkEdu == "not-to-say"){
        res.redirect('register-coronavirus-test-119/country')
    } else {
        res.redirect('register-coronavirus-test-119/area-of-work')
    }
})

// gp-address answer.
router.post('/gp-address-answer', function (req, res) {
    var gpaddress = req.session.data['confirmGpAddress']
    if (gpaddress == "yes") {
        res.redirect('register-coronavirus-test-119/travel-overseas')
    } else if (gpaddress == "no"){
        res.redirect('register-coronavirus-test-119/address/gp-address-postcode')
    } else {
        res.redirect('register-coronavirus-test-119/travel-overseas')
    }
})

// travel-overseas answer.
router.post('/travel-answer', function (req, res) {
    var overseas = req.session.data['travel']
    if (overseas == "no") {
        res.redirect('register-coronavirus-test-119/nhs-number')
    } else {
        res.redirect('register-coronavirus-test-119/travel-country')
    }
})


