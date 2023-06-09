import HomePage from '../pageObjects/Home.page';
import LoginPage from '../pageObjects/Login.page';
import AppointmentPage from '../pageObjects/Appointment.page';
import SummaryPage from '../pageObjects/Summary.page';
import HistoryPage from '../pageObjects/History.page';

describe('CURA', () => {
  beforeEach(() => {
    //Open https://katalon-demo-cura.herokuapp.com/
    HomePage.visit();
    //Click - Make Appointment
    HomePage.makeAppoitmentButton.click();
    //Set username and password fields with the demo account credentials
    LoginPage.username.type('John Doe');
    LoginPage.password.type('ThisIsNotAPassword');
    //Click - Login
    LoginPage.loginButton.click();
  });

  it('1. Make an Appointment', () => {
    //Set the following values:
    //1. Facility - Seoul CURA Healthcare Center
    AppointmentPage.facility.select('Seoul CURA Healthcare Center');
    //2. Check - Apply for hospital readmission
    AppointmentPage.hospitalReadmission.check();
    //3. Select - Medicaid
    AppointmentPage.medicaid.check();
    //4. Set Date value by using the widget - 30
    AppointmentPage.visitDateField.click();
    AppointmentPage.date.contains('30').click();
    //5. Set comment - CURA Healthcare Service - use force
    AppointmentPage.comment.type('CURA Healthcare Service', { force: true });
    //6. Click - Book Appointment
    AppointmentPage.bookAppointmentButton.click();
    //Validate that previously set values are correct
    SummaryPage.facility.should('have.text', 'Seoul CURA Healthcare Center');
    SummaryPage.hospitalReadmission.should('have.text', 'Yes');
    SummaryPage.program.should('have.text', 'Medicaid');
    SummaryPage.visitDate.should('have.text', '30/06/2023');
    SummaryPage.comment.should('have.text', 'CURA Healthcare Service');
  })

  it.only('2. Make an Appointment', () => {
    //Click - Menu / Stack / Burger icon
    AppointmentPage.menuButton.click();
    //Validate that the sidebar is active
    AppointmentPage.logoutButton.should('be.visible');
    //Click - History
    AppointmentPage.historyButton.click();
    //Validate that - No appointment - is visible
    HistoryPage.historyText.should('have.text', 'No appointment.');
  })
})