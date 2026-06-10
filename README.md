Overview

QuickSlot is a sports venue booking backend built using Node.js, Express, Prisma, and MongoDB.

The system allows users to:

View venues
View available slots for a selected date
Book a slot
View their bookings
Cancel bookings

The application prevents double booking using a database-level unique constraint.

Tech Stack
Node.js
Express.js
Prisma ORM
MongoDB Atlas
Swagger API Documentation
Project Structure
src/
├── config/
├── controllers/
├── routes/
├── services/
├── app.js

prisma/
├── schema.prisma
Installation
Clone Repository
git clone <repository-url>
cd quickslot-server
Install Dependencies
npm install
Configure Environment Variables

Create .env

DATABASE_URL=your_mongodb_connection_string
PORT=5000
Generate Prisma Client
npx prisma generate
Push Database Schema
npx prisma db push
Seed Data
npm run seed
Start Server
npm run dev
API Documentation

Swagger:

http://localhost:5000/api-docs
Available APIs
Venues
GET /api/v1/venues
Slots
GET /api/v1/venues/:venueId/slots?date=YYYY-MM-DD
Book Slot
POST /api/v1/bookings
User Bookings
GET /api/v1/users/:userId/bookings
Cancel Booking
DELETE /api/v1/bookings/:bookingId
Double Booking Protection

To prevent concurrent bookings of the same slot:

@@unique([venueId, date, slotTime])

Only one booking can exist for a specific venue, date, and slot combination.

If two users attempt to book the same slot simultaneously:

First request succeeds
Second request receives HTTP 409 Conflict
Future Improvements
JWT Authentication
Real-time slot updates using WebSockets
Unit Tests
Docker Support
Redis Caching
AI Usage

AI tools were used for:

API scaffolding
Architecture planning
Documentation assistance

All generated code was reviewed, tested, and modified before use.
