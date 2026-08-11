/*
 * Pricing for the offers section. Every value below renders as-is on
 * the page.
 *
 * NOTE: these numbers are the 2026-08-07 market-study proposition
 * (anchors: EmailEngine 1200 EUR/year flat, Proxmox 120-1100 EUR/year
 * tiers, Servercow mailcow support 46-166 EUR/month, Hetzner managed
 * 34-79 EUR/month plus setup, Elest.io instance plus support tiers).
 * Adjust freely before deploying; raising later with grandfathered
 * early buyers is cheap, lowering is not.
 */

export const pricing = {
  /* Yearly support and updates subscription: flat per company,
     unlimited mailboxes, business-hours email support (2 business
     days), update channel, security advisories and artifacts. A
     priority tier (1200 EUR/year, 4-business-hour response on
     mail-flow-down) can join later without touching this card. */
  support: '390 € / year',

  /* Operated on your infra: flat per deployment up to 100 mailboxes
     (250 EUR/month up to 500), standard configuration, business-hours
     SLA, GDPR DPA, plus a one-time 450 EUR setup. */
  operated: 'from 150 € / month',
}
