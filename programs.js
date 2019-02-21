var b = 0;
for(var a=2; a < process.argv.length; a++)
{
 b += Number(process.argv[a]);
 }
 console.log(b);