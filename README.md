📦 CITK Campus Lost & Found

A centralized, web-based Lost & Found platform designed for Central Institute of Technology, Kokrajhar (CITK) to help students and staff report, track, and recover lost items efficiently.

🚩 Problem Statement

On most campuses, lost items are reported through informal channels such as WhatsApp groups or notice boards. These methods are unorganized, unreliable, and lack any proper matching mechanism, leading to low recovery rates and wasted time.

There is a need for a centralized, structured, and reliable system to manage lost and found items within the campus.

💡 Solution Overview

CITK Campus Lost & Found provides a single platform where users can:

Report lost or found items with images and details

View all reported items in one place

Automatically identify possible matches

Allow campus authorities to verify and mark items as returned

The platform is lightweight, easy to use, and designed specifically for campus environments.

✨ Features

Centralized web-based Lost & Found system

Report lost items with image, description, and location

Report found items with image and location

View all lost and found items in an organized layout

Automatic matching of lost and found items

Admin panel for verification and status updates

Status tracking (Open / Returned)

Mobile-friendly and responsive UI

Scalable design suitable for multi-campus use

🛠 Tech Stack
Frontend

HTML

CSS

JavaScript

Backend & Cloud Services

Firebase Firestore – Cloud database for storing item data

Google Cloud Platform (via Firebase) – Backend services

Image Handling

Cloud-based image hosting service for storing and serving item images

🏗 Architecture Overview

Web browser-based frontend

Firebase Firestore as backend database

Matching logic for lost and found items

Admin panel for verification and lifecycle management

The architecture is modular, scalable, and easy to extend.

🔄 Process Flow

User reports a lost or found item with details and image

Data is stored in the cloud database

System checks for possible matches

Matches are displayed to users

Admin verifies and marks items as returned

Status updates are reflected across the platform

🚀 Future Enhancements

User authentication and role-based access

AI-based matching for higher accuracy

Notification system for match alerts

Claim verification workflow

Analytics dashboard for tracking recovery metrics

Deployment on Firebase Hosting

🧪 Project Status

MVP completed

Fully functional for demo and hackathon evaluation

Frontend currently demonstrated via local hosting (Live Server)

Backend powered by Firebase Firestore

🎯 Hackathon Context

This project was developed as part of a hackathon to address a real-world campus problem using Google technologies and practical system design.
