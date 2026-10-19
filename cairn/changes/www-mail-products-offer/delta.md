---
cairn: delta
change: www-mail-products-offer
---

# Delta

## ADDED Requirements

- www-site: Mail products offer. The business page SHALL carry an offer for products that read or send their customers' mail (CRM, helpdesk, ERP, internal tools): migration off deprecated access (Exchange Web Services, basic auth) to OAuth over IMAP and SMTP, running on the customer's servers, kept working every year, with a setup fee and a yearly price. It MAY offer to prepare the customer's OAuth app verification with them and SHALL NOT promise to own or perform it. It SHALL NOT claim Microsoft Graph support until the stack has it.

## MODIFIED Requirements

- www-site: Business page. The page presents three offers (email providers, products that handle mail, integrators). The integrator offer's priority work comes from a bank of days agreed each year, and the supported version line is a higher tier with its own starting price. Deadlines shown SHALL be checked against Microsoft's announcements, with the date of the check recorded in the source.

## REMOVED Requirements

None.
