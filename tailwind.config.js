module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a365d", // blue-900 - Deep professional trust, authority without intimidation
          50: "#e6f3ff",
          100: "#b3d9ff", 
          200: "#80bfff",
          300: "#4da6ff",
          400: "#1a8cff",
          500: "#1a365d",
          600: "#153052",
          700: "#102947",
          800: "#0b223c",
          900: "#061b31"
        },
        secondary: {
          DEFAULT: "#3182ce", // blue-600 - Technical confidence, interactive element guidance
          50: "#ebf8ff",
          100: "#bee3f8",
          200: "#90cdf4",
          300: "#63b3ed",
          400: "#4299e1",
          500: "#3182ce",
          600: "#2c5aa0",
          700: "#2a69ac",
          800: "#1e4d72",
          900: "#153e75"
        },
        accent: {
          DEFAULT: "#38b2ac", // teal-500 - Achievement highlights, positive progress indicators
          50: "#e6fffa",
          100: "#b2f5ea",
          200: "#81e6d9",
          300: "#4fd1c7",
          400: "#38b2ac",
          500: "#319795",
          600: "#2c7a7b",
          700: "#285e61",
          800: "#234e52",
          900: "#1d4044"
        },
        background: "#ffffff", // white - Clean content canvas, maximum readability focus
        surface: "#f7fafc", // gray-50 - Subtle content separation, gentle visual hierarchy
        text: {
          primary: "#2d3748", // gray-800 - Extended reading comfort, professional clarity
          secondary: "#718096" // gray-500 - Supporting information hierarchy, elegant restraint
        },
        success: "#38a169", // green-600 - Project completion, positive skill validation
        warning: "#d69e2e", // yellow-600 - Attention without alarm, important updates
        error: "#e53e3e", // red-600 - Helpful problem identification, constructive feedback
        border: {
          DEFAULT: "#e2e8f0", // gray-200 - Clean separation
          light: "#f1f5f9" // gray-100 - Subtle separation
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        cta: ['Inter', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace']
      },
      fontWeight: {
        'headline': '600',
        'headline-bold': '700',
        'body': '400',
        'body-medium': '500',
        'cta': '600',
        'code': '400',
        'code-medium': '500'
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'prominent': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      },
      transitionDuration: {
        'smooth': '300ms'
      },
      transitionTimingFunction: {
        'smooth': 'ease'
      },
      borderWidth: {
        'clean': '1px'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      }
    },
  },
  plugins: [],
}