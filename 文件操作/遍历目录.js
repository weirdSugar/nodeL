const fs=require('fs')
const path=require('path')
const dir=path.resolve('/d:','/spaceDir','nodeL')

// 同步
function synTravel(dir){
  const dirs=fs.readdirSync(dir)
  for(let i=0;i<dirs.length;i++){
    const tmp=path.resolve(dir,dirs[i])
    if(fs.statSync(tmp).isDirectory()){
      synTravel(tmp)
    }else{
      console.log(tmp)
    }
  }
}
// synTravel(dir)


// 异步

// function travel(dir){
//   fs.readdir(dir,function(err,data){
//     if(err){
//       console.error(err) 
//     }else{
//       for(let i=0;i<data.length;i++){
//         const tmp = path.resolve(dir,data[i])
//         fs.stat(tmp,function(errStat,stats){
//           if(errStat){
//             console.error(errStat)
//           }else{
//             if(stats.isFile()){
//               console.log(tmp)
//             }else{
//               travel(tmp)
//             }
//           }
//         })
//       }
//     }
//   })
// }
// synTravel(dir)




function travel(dir, callback, finish) {
  fs.readdir(dir, function (err, files) {
    (function next(i) {
      if (i < files.length) {
        var pathname = path.join(dir, files[i]);

        fs.stat(pathname, function (err, stats) {
          if (stats.isDirectory()) {
            travel(pathname, callback, function () {
              next(i + 1);
            });
          } else {
            callback(pathname, function () {
              next(i + 1);
            });
          }
        });
      } else {
        finish && finish();
      }
    }(0));
  });
}


travel(dir,function(p,q){
  console.log(p)
  q()
},
function(){
  console.log('over')
}
)


