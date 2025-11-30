import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        mountain: {
          dark: "hsl(var(--mountain-dark))",
        },
        ocean: {
          blue: "hsl(var(--ocean-blue))",
        },
        bamboo: {
          green: "hsl(var(--bamboo-green))",
        },
        sunset: {
          gold: "hsl(var(--sunset-gold))",
        },
        mist: {
          light: "hsl(var(--mist-light))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-slow": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "cloud-drift": {
          "0%": {
            transform: "translateX(-10%) translateY(0)",
          },
          "50%": {
            transform: "translateX(10%) translateY(-5px)",
          },
          "100%": {
            transform: "translateX(-10%) translateY(0)",
          },
        },
        "cloud-drift-2": {
          "0%": {
            transform: "translateX(10%) translateY(0)",
          },
          "50%": {
            transform: "translateX(-10%) translateY(5px)",
          },
          "100%": {
            transform: "translateX(10%) translateY(0)",
          },
        },
        "water-shimmer": {
          "0%, 100%": {
            opacity: "0.3",
            transform: "translateY(0) scaleX(1)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateY(-2px) scaleX(1.02)",
          },
        },
        "light-pulse": {
          "0%, 100%": {
            opacity: "0.4",
          },
          "50%": {
            opacity: "0.7",
          },
        },
        "sunrise-to-sunset": {
          "0%": {
            background: "linear-gradient(135deg, rgba(138, 135, 255, 0.3), rgba(255, 180, 200, 0.2))",
          },
          "25%": {
            background: "linear-gradient(135deg, rgba(255, 200, 100, 0.4), rgba(255, 220, 150, 0.3))",
          },
          "50%": {
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(200, 230, 255, 0.2))",
          },
          "75%": {
            background: "linear-gradient(135deg, rgba(255, 150, 80, 0.4), rgba(255, 100, 100, 0.3))",
          },
          "100%": {
            background: "linear-gradient(135deg, rgba(138, 135, 255, 0.3), rgba(255, 180, 200, 0.2))",
          },
        },
        "sun-rise-set": {
          "0%": {
            left: "10%",
            top: "75%",
            transform: "scale(0.8)",
            opacity: "0.4",
            filter: "blur(2px)",
          },
          "15%": {
            left: "20%",
            top: "60%",
            transform: "scale(1)",
            opacity: "0.7",
            filter: "blur(0px)",
          },
          "50%": {
            left: "50%",
            top: "20%",
            transform: "scale(1.2)",
            opacity: "1",
            filter: "blur(0px)",
          },
          "85%": {
            left: "80%",
            top: "60%",
            transform: "scale(1)",
            opacity: "0.7",
            filter: "blur(0px)",
          },
          "100%": {
            left: "90%",
            top: "75%",
            transform: "scale(0.8)",
            opacity: "0.4",
            filter: "blur(2px)",
          },
        },
        "sun-glow": {
          "0%, 100%": {
            boxShadow: "0 0 40px 15px rgba(255, 180, 120, 0.3), 0 0 80px 30px rgba(255, 200, 150, 0.2)",
          },
          "50%": {
            boxShadow: "0 0 60px 25px rgba(255, 255, 200, 0.5), 0 0 120px 50px rgba(255, 255, 255, 0.3)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-slow": "fade-in-slow 1s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
        "cloud-drift": "cloud-drift 30s ease-in-out infinite",
        "cloud-drift-2": "cloud-drift-2 40s ease-in-out infinite",
        "water-shimmer": "water-shimmer 4s ease-in-out infinite",
        "light-pulse": "light-pulse 8s ease-in-out infinite",
        "sunrise-to-sunset": "sunrise-to-sunset 5s ease-in-out infinite",
        "sun-rise-set": "sun-rise-set 5s ease-in-out infinite",
        "sun-glow": "sun-glow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
