import BasePage from "./Base.page";

class AppointmentPage extends BasePage {
    static get url() {
        return "/#appointment";
    }

    static get facility() {
        return cy.get('#combo_facility');
    }

    static get hospitalReadmission() {
        return cy.get('#chk_hospotal_readmission');
    }

    static get medicaid() {
        return cy.get('#radio_program_medicaid');
    }

    static get visitDateField() {
        return cy.get('#txt_visit_date');
    }

    static get date() {
        return cy.get('[class="day"]');
    }

    static get comment() {
        return cy.get('#txt_comment');
    }

    static get bookAppointmentButton() {
        return cy.get('#btn-book-appointment');
    }

    static get menuButton() {
        return cy.get('#menu-toggle');
    }

    static get logoutButton() {
        return cy.get('.sidebar-nav').contains('Logout');
    }

    static get historyButton() {
        return cy.get('.sidebar-nav').contains('History');
    }
}

export default AppointmentPage;