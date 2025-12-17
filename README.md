# Portfolio Website

Modern, animated portfolio website built with React and Vite.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Beautiful scroll and hover effects
- **Modern UI** - Clean, professional design with light theme
- **Fast Performance** - Built with Vite for optimal speed
- **Easy to Customize** - Simple structure for quick edits

## 📋 Sections

- **Hero** - Eye-catching introduction with quick stats
- **About** - Education and work experience
- **Skills** - Frontend, Backend, and Tools showcase
- **Projects** - Featured work with live demos
- **Contact** - Multiple ways to get in touch

## 🛠️ Technologies Used

- React 18
- Vite
- Lucide React (icons)
- CSS3 Animations
- Modern JavaScript

## 📝 Customization Guide

### 1. Personal Information

Open `src/Portfolio.jsx` and update:

**Line ~247** - Your name:
```jsx
<h1 className="hero-title">Your Name</h1>
```

**Line ~249-253** - Your description:
```jsx
<p className="hero-description">
  Computer Science student at Westsächsische Hochschule Zwickau...
</p>
```

### 2. Experience

**Line ~338-380** - Update your work experience and education in the experience cards

### 3. Skills

**Line ~415-465** - Modify your tech stack in the three skill categories:
- Frontend Development
- Backend Development  
- Tools & Others

### 4. Projects

**Line ~485-587** - Update your projects:
- Project title
- Description
- Technologies used
- GitHub and demo links

### 5. Contact Information

**Line ~620-638** - Update your contact details:
- Email address
- LinkedIn profile
- GitHub profile

### 6. Footer

**Line ~652** - Update copyright with your name

## 🚀 Deployment on Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Done! Your site is live 🎉

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Login to your Vercel account
   - Confirm project settings
   - Deploy!

### Option 3: Drag & Drop

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Go to Vercel:**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Drag and drop the `dist` folder
   - Done!

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Navigate to `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Customization Tips

### Colors
The main colors are defined in the CSS:
- Primary Blue: `#3498db`
- Secondary Green: `#2ecc71`
- Text Dark: `#2c3e50`
- Background: `#f8f9fa`

Search for these hex codes in `Portfolio.jsx` to change the color scheme.

### Fonts
Currently using:
- Display: `Playfair Display` (headings)
- Body: `DM Sans` (text)

Change the Google Fonts import at line 21 to use different fonts.

### Animations
Most animations use CSS keyframes. You can adjust:
- Duration: Change the `1s`, `0.8s` values
- Timing: Modify `ease-out`, `ease-in-out`
- Delay: Update `animation-delay` values

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: <768px

## 🐛 Troubleshooting

**Build fails?**
- Make sure Node.js version is 16+
- Delete `node_modules` and run `npm install` again

**Site not updating on Vercel?**
- Clear deployment cache in Vercel dashboard
- Trigger a new deployment

**Icons not showing?**
- Check internet connection (Lucide icons load from CDN)
- Verify `lucide-react` is installed

## 📄 License

Free to use and customize for your personal portfolio!

## 🤝 Contributing

Feel free to fork and create your own version!

---

Made with ❤️ and React