# 👋 Hi, I'm Artem! <br/> I'm ready to present you the product <br/> ECO-Music GQL ![Logo](https://i.ibb.co/QnQFVFd/Apple-touch-icon-57x57.png)

The Vibes GQL project is a pioneering endeavor at the intersection of music and sustainability, harnessing the power of GraphQL technology to promote eco-consciousness within the music industry. This innovative platform offers a range of features aimed at reducing the environmental impact of music production, distribution, and consumption while enhancing the overall sustainability of the industry.

Key components of the Vibes GQL project include:

    1. Sustainable Music Discovery:
    Through GraphQL-powered search and recommendation systems,
    users can discover and explore eco-friendly music artists,
    albums, and tracks that prioritize sustainability in their production processes.

    2. Carbon Footprint Tracking:
    The project provides tools for musicians and music producers to calculate
    and monitor the carbon footprint associated with their music production activities,
    enabling them to make informed decisions to minimize environmental impact.

    3. Green Supply Chain Management:
    By integrating with supply chain data sources via GraphQL,
    the platform facilitates transparency and accountability across the music supply chain,
    empowering stakeholders to identify and address environmental inefficiencies.

    4. Community Engagement:
    Vibes GQL fosters a vibrant community of eco-conscious musicians,
    industry professionals, and fans, providing forums for knowledge sharing, collaboration,
    and advocacy for sustainable practices in the music industry.

    5. Eco-Friendly Events:
    The platform supports the planning and promotion of eco-friendly music events and concerts,
    offering tools for organizers to implement sustainable event practices such as waste reduction,
    carbon offsetting, and renewable energy usage.

    6. Educational Resources:
    Through GraphQL-powered content delivery, Vibes GQL offers educational resources
    and best practices for adopting sustainable approaches to music production, distribution, and consumption.

    7. Data Analytics and Insights:
    Advanced analytics capabilities enable users to gain valuable insights
    into the environmental impact of their music-related activities,
    facilitating data-driven decision-making for greater sustainability.

Overall, the Vibes GQL project represents a groundbreaking initiative to transform the music industry into a force for positive environmental change, empowering stakeholders to create, share, and enjoy music in a way that is both artistically fulfilling and ecologically responsible.

## Demo

![App Screenshot](https://i.ibb.co/RcmhKY7/Screenshot-2024-05-19-at-22-06-24.png)

## Tech Stack

**Client:** Nextjs, TS, React-query, graphql, SCSS, TailwindCSS

**Server:** Node, Nestjs, Prisma

## Run Locally

Clone the project

```bash
  git clone https://github.com/Dev-PGVAA/Music-GQL.git
```

Go to the project directory

```bash
  cd Music-GQL
```

Config .env

- server

  ```py
  DATABASE_URL="your_url"
  JWT_SECRET="your_jwt_code"

  SERVER_URL="your_server_url"
  CLIENT_URL="your_client_url"
  DOMAIN="your_domain"

  # mail service
  MAIL_FROM="your_email"
  MAIL_AUTH_CODE="your_email_auth_code"
  MAIL_SERVICE="your_email_service"

  # social auth
  GOOGLE_CLIENT_ID="your_google_client_id"
  GOOGLE_SECRET="your_google_client_secret"

  GITHUB_CLIENT_ID="your_github_client_id"
  GITHUB_CLIENT_SECRET="your_github_client_secret"

  NODE_ENV="development"
  ```

- client

  ```py
  SERVER_URL="your_server_url"
  CLIENT_URL="your_client_url"
  GRAPHQL_SERVER_URL="your_server_graphql_url"
  DOMAIN="your_domain"
  JWT_SECRET="your_jwt_code(same_in_server)"

  NODE_ENV="development"
  ```

then install dependencies

```bash
  cd server && npm install
  npx prisma db push

  cd client && npm install
```

Start the server

```bash
  cd server && npm run start:dev
  cd clent && npm run dev
```

## Features

- Light/dark mode toggle
- Another languages
- All pages
- some utils
- and more....

## Feedback

If you have any feedback, please reach out to us at programmingvaa@gmail.com

## Support

For support, email programmingvaa@gmail.com or join our Slack channel.

## Authors

- [Just me](https://github.com/Dev-PGVAA)
