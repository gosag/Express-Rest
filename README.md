<div align="center">

# Express-Rest

**A clean, scalable RESTful API boilerplate built with Node.js, Express, and MongoDB.**

Production-ready patterns for CRUD, pagination, filtering, sorting, and centralized error handling — structured so you can drop in a new resource and be productive in minutes.

---

## Why this exists

Most starter repos either do too little (a single `app.js` with everything crammed in) or too much (opinionated frameworks that fight you). Express-Rest sits in the middle: a **real, working REST API** with the fundamentals done properly — so it's fast to clone for a new project, and useful as a reference for how a clean Express + Mongoose backend should be organized.

## Features

| | |
|---|---|
| ✅ | Full CRUD on resources |
| ✅ | Pagination with page/limit query params |
| ✅ | Filtering by any allowed field |
| ✅ | Sorting with an allow-list to prevent abuse |
| ✅ | Centralized error-handling middleware |
| ✅ | Environment-based configuration |
| ✅ | Scalable, convention-based folder structure |

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A MongoDB instance — local or [MongoDB Atlas](https://www.mongodb.com/atlas)

### Installation

```bash
# Clone the repo
git clone https://github.com/gosag/mern-backend-core.git
cd Express-Rest

# Install dependencies
npm install
```

### Configuration

Create a `.env` file in the project root:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

### Run

```bash
npm run dev
```

The API will be live at `http://localhost:8000`.

## Project Structure

```
Express-Rest/
├── controllers/        # business logic
├── routes/             # API route definitions
├── models/             # Mongoose schemas
├── middlewares/        # custom middlewares (errors, auth, etc.)
├── config/             # database connection setup
├── public/             # static assets
├── server.js           # entry point
├── .env                # config (not committed)
├── package.json
└── README.md
```

## API Reference

### Posts

| Method | Endpoint | Description |
|--------|----------|--------------|
| `GET` | `/posts` | Get all posts |
| `GET` | `/posts/:id` | Get a single post |
| `POST` | `/posts` | Create a new post |
| `PUT` | `/posts/:id` | Update a post |
| `DELETE` | `/posts/:id` | Remove a post |

### Pagination

```http
GET /posts?page=2&limit=10
```

Response shape:

```json
{
  "currentPage": 2,
  "totalItems": 42,
  "totalPages": 5,
  "posts": [ ... ]
}
```

### Filtering

Pass any allowed field as a query param:

```http
GET /posts?author=123&category=tech
```

### Sorting

```http
GET /posts?sortBy=createdAt&order=desc
```

> Only whitelisted fields are accepted as sort keys, to prevent arbitrary/unsafe sorts.

## Environment Variables

| Key | Purpose |
|-----|---------|
| `PORT` | Port the server listens on |
| `MONGO_URI` | MongoDB connection string |
| `NODE_ENV` | Environment mode (`development` / `production`) |

## Error Handling

All errors flow through a single centralized middleware, which:
- Returns consistent JSON error responses
- Maps errors to proper HTTP status codes
- Gracefully handles malformed IDs and database errors
- Keeps error-handling logic out of individual controllers

## Roadmap

- [ ] Request validation layer (Joi / Zod)
- [ ] Authentication & role-based access control
- [ ] Rate limiting
- [ ] API tests (Jest / Supertest)
- [ ] Swagger/OpenAPI docs

## Contributing

Found a bug or have an idea to improve this? Issues and PRs are welcome — open one and let's talk it through.

## Author

**Gosa Girma** — Full Stack Developer
[Portfolio](https://gosagirma.me) · [GitHub](https://github.com/gosag)

## License

Open-source under the [MIT License](#license) — free to use, modify, and build on.
