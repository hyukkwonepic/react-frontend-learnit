// // 0. 동기적 프로그래밍
// function getTime() {
//   setTimeout(() => {
//     console.log('The current time is', new Date());
//   }, 1000);
// }

// function execute() {
//   getTime();
//   console.log('Haha did I get the time?'); // 먼저 실행
// }

// execute();


// // 1. callback 함수
// function getTime(callback) {
//   setTimeout(() => {
//     callback(new Date());
//   }, 1000);
// }

// function execute() {
//   getTime((currentTime) => {
//     console.log('The current time', currentTime);
//     console.log('Haha did I get the time? '); // 시간 출력 후 실행
//   });
// }

// execute();


// // 1-1. callback과 onSuccess, onFailure
// function getTime(onSuccess, onFailure) {
//   setTimeout(() => {
//     const isSuccess = true;
//     // const isSuccess = Math.random() >= 0.5;

//     if (isSuccess) {
//       onSuccess(new Date());
//     } else {
//       onFailure('Error!');
//     }
//   }, 1000);
// }

// function execute() {
//   // callback hell...
//   getTime((currentTime) => {
//     console.log('The current time is ', currentTime);
//     getTime((newTime) => {
//       console.log('The new time is', newTime);
//       getTime((realNewTime) => {
//         console.log('The real new time is', realNewTime);
//         getTime((pheww) => {
//           console.log('phewww...', pheww);
//         })
//       })
//     })
//   }, (error) => {
//     console.log(error);
//   });
// }

// execute();


// // 2. promise
// function getTime() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isSuccess = true;
//       if (isSuccess) {
//         resolve(new Date());
//       } else {
//         reject('Error!');
//       }
//     }, 1000);
//   });
// }

// function execute() {
//   // promise chain
//   getTime()
//     .then((currentTime) => {
//       console.log('The current time is ', currentTime);
//       return getTime();
//     })
//     .then((newTime) => {
//       console.log('The new time', newTime);
//       return getTime();
//     })
//     .then((hahaha) => {
//       console.log('The hahaha', hahaha);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// execute();


// // 3. async/await
// function getTime() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isSuccess = true;
//       if (isSuccess) {
//         resolve(new Date());
//       } else {
//         reject('Error');
//       }
//     }, 1000);
//   })
// };

// async function execute() {
//   try {
//     const currentTime = await getTime();
//     console.log('The current time is', currentTime);
//   } catch (error) {
//     console.log(error);
//   }
// }

// execute();