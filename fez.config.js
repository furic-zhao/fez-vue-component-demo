/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

export default {
  cssCompiler: "scss",
  useInject: {
    vendor: {
      js: [{
        target: 'vendor-vue-axios.js',
        contain: ['**/vue.js', '**/axios.js']
      }, {
        target: 'vendor-jquery.js',
        contain: ['**/jquery.js']
      }]
    }
  },
  browserify: {
    shim: [{
        import: 'Vue',
        from: 'vue'
      },
      {
        import: 'axios',
        from: 'axios'
      },
      {
        import: '$',
        from: 'jquery'
      }
    ]
  },
  useMock: {
    dev: true,
    dist: false
  }
}
