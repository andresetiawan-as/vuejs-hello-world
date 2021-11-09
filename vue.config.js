module.exports = {
    transpileDependencies: [
      'vuetify'
    ],
    // devServer: {
    //   proxy: {
    //       '/V1': {
    //           target: 'http://erp-cache.intra.bca.co.id/get-photo/employee/original/',
    //           changeOrigin: true,
    //           pathRewrite: {
    //               '^/V1': ''
    //           }
    //       },
  
    //     }
    // }
  }

//   module.exports = {
//     // devServer: {
//     //   proxy: 'http://erp-cache.intra.bca.co.id/get-photo/employee/original/'
//     // }
//       devServer: {
//       proxy: {
//           '/V1': {
//               target: 'http://erp-cache.intra.bca.co.id/get-photo/employee/original/',
//               changeOrigin: true,
//               pathRewrite: {
//                   '^/V1': ''
//               }
//           },
  
//         }
//     }
//   }