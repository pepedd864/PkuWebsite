// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // 重写tailwindcss默认配置
    // 修改 sm md lg xl 2xl 的默认值
    screens: {
      'sm': '640px',
      'md': '850px',
      'lg': '1000px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
