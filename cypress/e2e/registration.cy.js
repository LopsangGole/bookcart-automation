describe('Registration workflow', () => {
    let testData;

    before(() => {
        cy.fixture('registration-test-data.json').then((data) => {
            console.log(data)
            testData = data;
        });
    })


    beforeEach(() => {
        cy.visit('/register')
    })

    it('should have the correct page title', () => {
        cy.title().should('eq', 'BookCart');
    });

    it('should have the correct header text', () => {
        cy.get('mat-card-title.mat-mdc-card-title').should('contain', 'User Registration');
    });

    it('should have the required form fields', () => {
        cy.get('div.mat-mdc-text-field-wrapper').eq(0).should('exist');
        cy.get('input[placeholder="Last Name"]').should('exist');
        cy.get('input[placeholder="User name"]').should('exist');
        cy.get('input[placeholder="Password"]').should('exist');
        cy.get('input[placeholder="Confirm Password"]').should('exist');
        cy.contains('mat-label', 'Gender:').should('exist');
    });

    it('should have the "Register" button', () => {
        cy.contains('span', 'Register').should('exist').and('be.visible');
        cy.log('Register button exists and is visible.')
    });

    it('should have the "Already Registered?" text', () => {
        cy.get('.mat-h4').should('exist').and('contain', 'Already Registered?');
    });


    it('should register a user successfully', () => {
        const { validUser } = testData;
        cy.register(validUser);
        cy.url().should('include', '/');
    });


    it('should not register for invalid user data', () => {
        testData.invalidUsers.forEach((testCase) => {
            if (testCase.firstName) {
                cy.get('div.mat-mdc-text-field-wrapper').eq(0).type(testCase.firstName);
            }
            if (testCase.lastName) {
                cy.get('input[placeholder="Last Name"]').type(testCase.lastName);
            }
            if (testCase.username) {
                cy.get('input[placeholder="User name"]').type(testCase.username);
            }
            if (testCase.password) {
                cy.get('input[placeholder="Password"]').type(testCase.password);
            }
            if (testCase.confirmPassword) {
                cy.get('input[placeholder="Confirm Password"]').type(testCase.confirmPassword);
            }
            if (testCase.gender) {
                cy.get(`mat-radio-button[value="${testCase.gender}"]`).click();
            }
            cy.get('mat-card-actions[align="end"] span').eq(1).click();
            cy.get('div.mat-mdc-text-field-wrapper').eq(0).clear();
            cy.get('input[placeholder="Last Name"]').clear();
            cy.get('input[placeholder="User name"]').clear();
            cy.get('input[placeholder="Password"]').clear();
            cy.get('input[placeholder="Confirm Password"]').clear();
            cy.get('mat-radio-button').each(($radioButton) => {
                if ($radioButton.prop('checked')) {
                    cy.wrap($radioButton).click();
                }
            });
        });
    });

})