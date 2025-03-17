# DuoBit Website

A modern, responsive website for DuoBit built with React and Material-UI.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Contact form with validation
- Optimized for performance
- Ready for AWS S3 deployment

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd duobit-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will be available at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized production build in the `build` directory.

## Deployment to AWS S3

1. Create an S3 bucket in your AWS account
2. Enable static website hosting on the bucket
3. Configure the bucket policy to allow public access
4. Upload the contents of the `build` directory to the bucket

### AWS S3 Bucket Policy Example

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

### Static Website Hosting Configuration

1. Go to your S3 bucket properties
2. Scroll down to "Static website hosting"
3. Enable static website hosting
4. Set the index document to `index.html`
5. Set the error document to `index.html` (for client-side routing)

## Technologies Used

- React
- TypeScript
- Material-UI
- Framer Motion
- Emotion (for styled components)

## Development

### Project Structure

```
src/
  ├── components/     # React components
  ├── styles/        # Global styles
  ├── App.tsx        # Main App component
  └── index.tsx      # Entry point
```

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from create-react-app

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
