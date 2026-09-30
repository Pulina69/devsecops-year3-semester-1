# IE3142 DevSecOps Continuous Assessment: OWASP NodeGoat

[![Build Status](https://github.com/Pulina69/devsecops-year3-semester-1/actions/workflows/devsecops-pipeline.yml/badge.svg)](https://github.com/Pulina69/devsecops-year3-semester-1/actions)
[![Security Gate: Semgrep](https://img.shields.io/badge/SAST-Semgrep-blue.svg)](#)
[![Security Gate: Trivy](https://img.shields.io/badge/Container_Scan-Trivy-blueviolet.svg)](#)

This repository contains the DevSecOps continuous integration and delivery pipeline for a hardened, multi-tier deployment of the OWASP NodeGoat application. The project demonstrates the practical application of the STRIDE threat modelling methodology, secure containerisation, vulnerability remediation, and automated security gating.

## 👥 Project Team (Group [ID])

| Role | Student Name | Student ID | Key Responsibilities |
| :--- | :--- | :--- | :--- |
| **Member 1** | Pethvan p | IT24101491 | Container Architecture, Hardening, Docker Compose |
| **Member 2** | Aluthge M.N | IT24102268 | STRIDE Threat Modelling, Risk Matrix |
| **Member 3** | Shanthoshika S | IT24101727 | Vulnerability Exploitation, Secure Coding Fixes, SAST |
| **Member 4** | [Name] | [ID] | CI/CD Pipeline Automation, Secrets Management |

---

## 🏗️ System Architecture & Containerisation

The application runs in a completely offline, containerised environment orchestrated by Docker Compose. 

*   **Web Tier (`nodegoat-web`):** Node.js/Express application running on a lightweight `node:16-bullseye-slim` base image. It enforces the principle of least privilege by running processes under the non-root `node` user.
*   **Database Tier (`nodegoat-db`):** MongoDB 4.4 instance handling persistent storage.
*   **Network Segmentation:** The database is isolated on an internal bridge network (`internal-net`) without exposing port 27017 to the host machine. The web container bridges `internal-net` and `public-net` to serve client traffic on port 4000.

---

## 🚀 Local Deployment

### Prerequisites
*   Docker Engine & Docker Compose
*   Git

### Quick Start
1. **Clone the repository:**
   ```bash
   git clone git@github.com:Pulina69/devsecops-year3-semester-1.git
   cd devsecops-year3-semester-1

