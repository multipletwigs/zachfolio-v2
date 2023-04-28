# Zachfolio

Zachfolio is a personal blog website created using Next.js, Notion API, and Tailwind CSS. 

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Notion API](https://developers.notion.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/your-username/zachfolio.git
```

2. Install the dependencies:

```
cd zachfolio-v2
npm install
```

3. Create a `.env.local` file at the root of the project and add your Notion API key and database ID:

```
NOTION_API_KEY=your-notion-api-key-here
NOTION_DATABASE_ID=your-notion-database-id-here
```

4. Start the development server:
```
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploying

The website can be deployed to a variety of hosting services such as Vercel, Heroku, or Netlify. Simply set up a deployment pipeline that runs the `npm run build` command to build the project and then runs the `npm run start` command to start the server.

## Contributing

Contributions are welcome! If you find any bugs or have any suggestions for improvement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
