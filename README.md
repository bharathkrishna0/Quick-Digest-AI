# Quick-Digest-AI- Article Summarizer 🚀
Transform lengthy articles into bite-sized summaries instantly. AI-powered reading assistant that saves you time on every webpage.


![Quick Digest UI](./Screenshot%202025-06-07%20233923.png)

## ✨ Features

* 📑 **Smart Summarization** - Summarizes selected webpage content using advanced AI
* 🧭 **Flexible Summary Types** - Choose between Brief, Detailed, or Key Points format
* ⚡ **One-Click Actions** - Instant Summarize and Copy options for maximum efficiency
* 🧼 **Clean UI** - Modern, responsive popup interface that's easy to use
* 🌐 **Universal Compatibility** - Works on any website with readable content
* 📋 **Quick Copy** - Copy summaries to clipboard with one click
* 🎯 **Smart Selection** - Automatically detects and summarizes relevant content
* 🔒 **Privacy Focused** - Your reading habits stay private


## 📁 Project Structure

```
ai-summary-extension/
├── popup.html          # Main popup interface
├── popup.js           # Popup functionality and UI logic
├── background.js      # Background service worker
├── options.html       # Extension settings page
├── manifest.json      # Extension configuration
├── icon.png          # Extension icon
└── README.md         # This file
```

## 🚀 Setup Instructions

### Prerequisites
- Google Chrome browser
- Gemini API key (free from Google AI Studio)

### Installation Steps

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/yourusername/quickdigest-extension.git
   ```

2. **Navigate to Chrome Extensions**:
   - Open Chrome and go to `chrome://extensions`
   - Or click the three dots menu → More Tools → Extensions

3. **Enable Developer Mode**:
   - Toggle the **Developer mode** switch (top right corner)

4. **Load the Extension**:
   - Click **Load unpacked**
   - Select the `ai-summary-extension` folder
   - The extension will appear in your Chrome toolbar

5. **Configure API Key**:
   - Right-click the QuickDigest icon
   - Select "Options"
   - Enter your Gemini API key
   - Save settings

## 🔧 Configuration

### Getting Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and paste it in the extension options


## 💻 Technologies Used

* **JavaScript** - Core extension logic and AI integration
* **HTML/CSS** - User interface and styling
* **Chrome Extension APIs** - Browser integration and functionality
* **Gemini API** - Google's advanced AI for text summarization
* **Manifest V3** - Latest Chrome extension standards







**Made with ❤️ by the Bharath**


