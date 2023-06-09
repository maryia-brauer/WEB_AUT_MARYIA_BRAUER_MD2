import BasePage from "./Base.page";

class HistoryPage extends BasePage {
    static get url() {
        return "/";
    }

    static get historyText() {
        return cy.get('.col-sm-12 > p');
    }
}

export default HistoryPage;