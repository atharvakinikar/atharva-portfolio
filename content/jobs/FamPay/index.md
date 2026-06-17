---
date: '2024-04-01'
title: 'Software Development Engineer'
company: 'FamPay'
location: 'Bengaluru, India'
range: 'April 2024 - Ongoing'
url: 'https://fampay.in/'
---

- Architected and owned the high-revenue Giftcards service (₹10 Million/month), leveraging Temporal for workflow orchestration and gRPC, Kafka for inter-service communication; collaborated with third-party providers and the recon team for DSR reconciliation, also implemented distributed tracing for improved observability.
- Revamped the invoicing service to process 150k invoices/day with atomicity and resiliency guarantees; eliminated duplicate invoice generation and finance-reported mismatches, cutting dev intervention for reconciliation to zero.
- Directed a 3-person team to integrate a high-priority BGMI gift card vendor from conception to production in a record 3 days; accelerated technical decisions and code reviews to unlock a GMV of ₹20 Million/month.
- Owned India’s largest PPI mandate ecosystem for global merchants; ensured platform compliance by actively blocking fraudulent, non-KYC and inactive users resulting in the revocation of 30k+ ineligible mandates per month.
- Architected the end-to-end refunds flow for PPI transactions using NPCI adjustment reports, owning the full lifecycle from report ingestion to final settlement; processes 15k+ adjustment records daily, triggering 90k+ refunds/month with high reliability and idempotency.
- Authored the TRD and migrated the coupons service from monolith to a vertically isolated module in the giftcards service; mentored 2 interns end-to-end across the SDLC; engineered support for reliable and fast bulk ingestion of 1M+ rows per run from S3 to PostgreSQL via aws_s3 extension.
- Designed and implemented the In-App P2M transaction flow in TPAP using gRPC for communication and the outbox pattern for Kafka message relay, processing 100k+ monthly in-app debits.
