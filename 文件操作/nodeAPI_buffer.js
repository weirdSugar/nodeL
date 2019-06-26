
/**
 * JS语言自身只有字符串数据类型，没有二进制数据类型，
 * 因此NodeJS提供了一个与String对等的全局构造函数Buffer
 * 来提供对二进制数据的操作。
 * 除了可以读取文件得到Buffer的实例外，还能够直接构造
 */


const buf=Buffer.from('阿萨德安慰我')
// var buf =Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
console.log(buf)
console.log(buf.length)
console.log(buf[0])
console.log(buf.toString('utf-8'))
console.log(buf.toJSON())
console.log('\n\n')

const buf2 = Buffer.from([127, -1]);
console.log(buf2);     // <Buffer 7f ff>
const buf3 = Buffer.from([127, 255]);
console.log(buf3);    // <Buffer 7f ff>


//buffer裁剪，裁剪后返回的新的buffer与原buffer指向同一块内存
var bu1 = Buffer.from('test');
var bu2 = bu1.slice(1, 3).fill('xx');
console.log(bu2.toString()); // xx
console.log(bu1.toString()); // txxt

console.log('\n\n')


// 所以拷贝有专门的方法 copy
var bin = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
var dup = Buffer.alloc(bin.length);
// 先申请块新的
bin.copy(dup);
dup[0] = 0x48;
console.log(bin); // => <Buffer 68 65 6c 6c 6f>
console.log(dup); // => <Buffer 48 65 65 6c 6f>