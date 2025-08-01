// Material Design 3 (M3) color system
export const colors = {
  primary: {
    50: "#eef6ff",
    100: "#d8ebff",
    200: "#b8dcff",
    300: "#8ac8ff",
    400: "#5cabff",
    500: "#3d8eff",
    600: "#007c00", // Primary
    700: "#1e5ccd",
    800: "#204ca7",
    900: "#1e4184",
  },
  secondary: {
    50: "#f4f6fd",
    100: "#e9edfb",
    200: "#d2dbf7",
    300: "#b0beee",
    400: "#8999e2",
    500: "#6c77d6",
    600: "#5b5fc8", // Secondary
    700: "#4d4eb3",
    800: "#424292",
    900: "#383a75",
  },
  tertiary: {
    50: "#fdf2fb",
    100: "#fae5f6",
    200: "#f6cbee",
    300: "#f0a5e0",
    400: "#e876cb",
    500: "#db50b2",
    600: "#ce3197", // Tertiary
    700: "#b32479",
    800: "#931f63",
    900: "#781d50",
  },
  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
  neutralVariant: {
    50: "#f8f9fa",
    100: "#f1f3f5",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#868e96",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },
};

// Material Design typography
export const typography = {
  display: {
    large: "text-[57px] font-normal leading-[64px]",
    medium: "text-[45px] font-normal leading-[52px]",
    small: "text-[36px] font-normal leading-[44px]",
  },
  headline: {
    large: "text-[32px] font-normal leading-[40px]",
    medium: "text-[28px] font-normal leading-[36px]",
    small: "text-[24px] font-normal leading-[32px]",
  },
  title: {
    large: "text-[22px] font-normal leading-[28px]",
    medium: "text-[16px] font-medium leading-[24px]",
    small: "text-[14px] font-medium leading-[20px]",
  },
  body: {
    large: "text-[16px] font-normal leading-[24px]",
    medium: "text-[14px] font-normal leading-[20px]",
    small: "text-[12px] font-normal leading-[16px]",
  },
  label: {
    large: "text-[14px] font-medium leading-[20px]",
    medium: "text-[12px] font-medium leading-[16px]",
    small: "text-[11px] font-medium leading-[16px]",
  },
};

// Material Design elevation/shadows
export const elevation = {
  0: "",
  1: "shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)]",
  2: "shadow-[0_3px_6px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.12)]",
  3: "shadow-[0_10px_20px_rgba(0,0,0,0.15),0_3px_6px_rgba(0,0,0,0.10)]",
  4: "shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)]",
  5: "shadow-[0_19px_38px_rgba(0,0,0,0.30),0_15px_12px_rgba(0,0,0,0.22)]",
};

// Material Design spacings based on 8px grid
export const spacing = {
  1: "4px", // 0.5 × 8px
  2: "8px", // 1 × 8px
  3: "12px", // 1.5 × 8px
  4: "16px", // 2 × 8px
  5: "24px", // 3 × 8px
  6: "32px", // 4 × 8px
  7: "40px", // 5 × 8px
  8: "48px", // 6 × 8px
  9: "56px", // 7 × 8px
  10: "64px", // 8 × 8px
  12: "80px", // 10 × 8px
  16: "128px", // 16 × 8px
};

// Material Design breakpoints
export const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

// Material Design shape (border radius)
export const shape = {
  rounded: {
    none: "0px",
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },
};
