module.exports = {
  mod: 'jit', // Just-in-Time mode
  content: ["./src/*.{html,js}"], // add the files to watch
  theme: {
    extend: {},
  },
  variant: {}, // will fill later
  plugins: [
    require('@tailwindcss/forms')
  ],
}
