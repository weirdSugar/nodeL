const fs = require('fs')


/**
 上边的程序拷贝一些小文件没啥问题，
 但这种一次性把所有文件内容都读取到内存中后再一次性写入磁盘的方式不适合拷贝大文件，
 内存会爆仓。
 对于大文件，我们只能读一点写一点，直到完成拷贝。
 因此用到I/O流 用pipe连接
 */

function copy(src, dst) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}

function main(argv){
  if(argv.length<2){
    console.log('??')
    return
  }
  copy(argv[0],argv[1])
}

main(process.argv.slice(2))