# Cypress SauceDemo Automation

## 📌 Description
This project contains end-to-end automated tests for the SauceDemo website using Cypress and the Page Object Model (POM).

It covers authentication, cart management, and checkout workflows, including positive, negative, and edge case scenarios.

---

## 🛠 Tech Stack
- Cypress
- JavaScript
- Page Object Model (POM)

---

## 📂 Project Structure
cypress/
 ├── e2e/
 │    ├── tests/
 │    │     ├── auth.cy.js
 │    │     ├── cart.cy.js
 │    │     ├── checkout.cy.js
 │    │     ├── purchaseProduct.cy.js
 │    ├── pages/
 │    │     ├── InventoryPage.js
 │    │     ├── ProductPage.js
 │    │     ├── CheckoutPage.js
 │    │     ├── LoginPage.js
 │    │     ├── OrderCompletedPage.js
 │    │     ├── OverviewPage.js
 │    ├── locators/
 ├── constants/
 ├── support/

---

## ✅ Test Coverage

### 🔐 Authentication
- Login with valid credentials (redirects to inventory page)
- Login with invalid credentials
- Login with empty username
- Login with empty password

### 🛒 Cart
- Add product to cart
- Remove product from cart

### 💳 Checkout
- Complete checkout with valid data
- Validation errors (empty fields)
- Checkout with empty cart *(current behavior)*

---

## ⚠️ Observations

- The application allows checkout with an empty cart  
  → This may indicate a business logic issue.

- When both username and password are empty, only username validation is triggered  
  → Indicates sequential validation instead of combined validation.

---

## ▶️ How to Run

``bash
npm install
npx cypress open

---

## 👤 Author
Raouia ABOURACHID